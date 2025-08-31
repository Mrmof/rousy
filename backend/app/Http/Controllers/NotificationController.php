<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mockery\Matcher\Not;
use App\Models\NotificationModel;

class NotificationController extends Controller
{
    public function productRestockNotification($product_id, $product_name, $product_quantity, $user_id){
        
        $product_restock = NotificationModel::create([
            'title' => 'Product Restocked',
            'message' => 'The product "' . $product_name . '" with ID ' . $product_id . ' has been restocked with ' . $product_quantity . ' items.',
            'type' => 'success',
            'user_id' => $user_id,
            'is_read' => false
        ]);
    }
    public function productUpdateNotification($product_id, $product_name, $user_id){
        
        $product_restock = NotificationModel::create([
            'title' => 'Product Update',
            'message' => 'The product "' . $product_name . '" with ID ' . $product_id . ' has been updated.',
            'type' => 'success',
            'user_id' => $user_id,
            'is_read' => false
        ]);
    }
    public function productDeleteNotification($product_id, $product_name, $user_id){
        
        $product_restock = NotificationModel::create([
            'title' => 'Product Delete',
            'message' => 'The product "' . $product_name . '" with ID ' . $product_id . ' has been deleted.',
            'type' => 'success',
            'user_id' => $user_id,
            'is_read' => false
        ]);
    }
    
}
