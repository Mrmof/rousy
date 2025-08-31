<?php

namespace App\Http\Controllers;

use App\Models\ProductModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function addProduct(Request $request)
    {
        $rules = [
            'productName' => 'required|string|max:255|unique:product,productName',
            'productImage' => 'required|image|mimes:jpeg,png,jpg,gif|max:10048',
            'category_id' => 'required|integer',
            'productPrice' => 'required|numeric|min:0',
            'productDescription' => 'nullable|string',
        ];
        $messages = [
            'productName.required' => 'Please enter the product name.',
            'productName.unique' => 'Product name must be unique.',
            'productImage.required' => 'Please upload a product image.',
            'category_id.required' => 'Please select a category.',
            'productPrice.required' => 'Please enter the product price.',
            'productDescription.string' => 'The product description must be a string.',
        ];
        $validator = Validator::make($request->all(), $rules, $messages);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }else {
             $imageUniqueName = date('YmdHis') . '_' . $request->file('productImage')->getClientOriginalName();
             $oldProductPrice = $request->input('productPrice');
             
             $addproduct = ProductModel::create([
                 'productName' => $request->input('productName'),
                 'productImage' => $imageUniqueName,
                 'category_id' => $request->input('category_id'),
                 'productPrice' => $request->input('productPrice'),
                 'oldProductPrice' => $oldProductPrice,
                 'productQuantity' => 0,
                 'productDescription' => $request->input('productDescription'),
             ]);
             if ($addproduct) {
                // Product created successfully
                move_uploaded_file($request->file('productImage')->getRealPath(), public_path('product_images/' . $imageUniqueName));
                return redirect()->route('admin.products')->with('success', 'Product added successfully.');
             }else{
                return redirect()->back()->with('error', 'Failed to add product.');
             }
        }

        // Handle file upload
        if ($request->hasFile('productImage')) {
            $imagePath = $request->file('productImage')->store('products', 'public');
            $validated['productImage'] = $imagePath;
        }

        ProductModel::create($validated);

        return redirect()->back()->with('success', 'Product added successfully.');
    }
    public function restock_product(Request $request, $product_id)
    {
        $user_id = session('admin_id');
        $rules = [
            'restockQuantity' => 'required|integer|min:1',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }else {
            $product = ProductModel::find($product_id);
            if ($product) {
                $product->productQuantity += $request->input('restockQuantity');
                $product->save();
                $notification = new NotificationController();
                $notification->productRestockNotification($product->id, $product->productName, $request->input('restockQuantity'), $user_id);
                return redirect()->back()->with('success', 'Product restocked successfully.');
            } else {
                return redirect()->back()->with('error', 'Product not found.');
            }
        }
    }
    public function edit_product(Request $request, $product_id){
        $user_id = session('admin_id');
        $rules = [
            'productName' => 'required|string|max:255',
            'productImage' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:10048',
            'productPrice' => 'required|numeric|min:0',
            'productDescription' => 'nullable|string',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }else {
            $product = ProductModel::find($product_id);
            if ($product) {
                if ($request->hasFile('productImage')) {
                    $imageUniqueName = date('YmdHis') . '_' . $request->file('productImage')->getClientOriginalName();
                    $product->productImage = $imageUniqueName;
                     move_uploaded_file($request->file('productImage')->getRealPath(), public_path('product_images/' . $imageUniqueName));
                }
                $product->productName = $request->input('productName');
                $product->productDescription = $request->input('productDescription');
                $product->oldProductPrice = $product->productPrice;
                $product->productPrice = $request->input('productPrice');
                $product->save();
                $notification = new NotificationController();
                $notification->productUpdateNotification($product->id, $product->productName, $user_id);
                return redirect()->back()->with('success', 'Product updated successfully.');
            } else {
                return redirect()->back()->with('error', 'Product not found.');
            }
        }
    }
    public function delete_product($product_id){
        $user_id = session('admin_id');
        $product = ProductModel::find($product_id);
            if ($product) {
                $product->delete();
                $notification = new NotificationController();
                $notification->productDeleteNotification($product->id, $product->productName, $user_id);
                return redirect()->back()->with('success', 'Product deleted successfully.');
            } else {
                return redirect()->back()->with('error', 'Product not found.');
            }
    }
}
