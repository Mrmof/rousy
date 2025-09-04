<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderModel;
use App\Models\ProductModel;
use Illuminate\Support\Facades\Http;

class OrderController extends Controller
{
    public function initializePayment(Request $request)
    {

        // Create pending order first
        $order = OrderModel::create([
            'user_id' => $request->user_id,
            'amount' => $request->amount,
            'status' => 'pending',
            'items' => json_encode($request->items),
        ]);

        // Call Paystack API
        $response = Http::withToken(env('PAYSTACK_SECRET_KEY'))
            ->post('https://api.paystack.co/transaction/initialize', [
                'email' => $request->email,
                'amount' => $request->amount, // Paystack uses kobo
                'callback_url' => url('/api/payment/callback/' . $order->id),
            ]);

        $data = $response->json();


        // Save reference if available
        if (isset($data['data']['reference'])) {
            $order->update([
                'reference' => $data['data']['reference']
            ]);
        }

        return $data;
    }

    // public function initializePayment(Request $request)
    // {
    //     // Fake order creation
    //     $orderId = rand(1000, 9999);

    //     return response()->json([
    //         "status" => true,
    //         "message" => "Authorization URL created",
    //         "data" => [
    //             "authorization_url" => "https://checkout.paystack.com/dummy-test-url-" . $orderId,
    //             "access_code" => "ACCESS_CODE_" . $orderId,
    //             "reference" => "REF_" . $orderId
    //         ]
    //     ]);
    // }

    public function paymentCallback(Request $request, $orderId)
    {
        $reference = $request->query('reference');

        $response = Http::withToken(env('PAYSTACK_SECRET_KEY'))
            ->get("https://api.paystack.co/transaction/verify/{$reference}")
            ->json();

        $order = OrderModel::find($orderId);
        

        if ($response['data']['status'] === 'success') {
            $order->status = 'paid';
            $items = json_decode($order->items, true);

            if (is_array($items)) {
                foreach ($items as $item) {
                    $product = ProductModel::find($item['id']);
                    if ($product) {
                        $product->productQuantity -= $item['quantity'];
                        $product->save();
                    }
                }
            }
        } else {
            $order->status = 'failed';
        }
        
        $order->save();

        // return redirect('/payment-status?status=' . $order->status);
        return redirect('/admin?status=' . $order->status); //for testing, change to user part later
    }
}
