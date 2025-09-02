<?php

namespace App\Http\Controllers;

use App\Models\HeroModel;
use App\Models\ProductCategoryModel;
use App\Models\ProductModel;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public $info = [
        'company' => 'Rosy Herbal Care',
        'role' => 'Administrator',
        'email' => 'support@rosy.com'
    ];
    public function index()
    {

        
        return view('admin.index', ['info' => $this->info]);
    }
    public function hero()
    {
        $hero = HeroModel::all();
        return view('admin.hero', ['info' => $this->info, 'heropages' => $hero]);
    }
    public function product_category()
    {
        $categories = new ProductCategoryModel();
        $categories = ProductCategoryModel::all();
        return view('admin.product_category', ['info' => $this->info, 'categories' => $categories]);
    }
    public function product_category_details($id)
    {
        $category = ProductCategoryModel::find($id);
        $products = ProductModel::where('category_id', $id)->get();
        if ($category) {
            return view('admin.product_category_details', ['info' => $this->info, 'category' => $category, 'products' => $products]);
        } else {
            return redirect()->route('admin.product_category')->with('error', 'Product category not found.');
        }
    }
    public function products()
    {
        $product_category = ProductCategoryModel::all();
        $products = ProductModel::all();
        return view('admin.products', ['info' => $this->info, 'categories' => $product_category, 'products' => $products]);
    }
    public function restock_product($product_id)
    {
        $product = ProductModel::find($product_id);
        return view('admin.restock_product', ['info' => $this->info, 'product' => $product]);
    }
    public function edit_product($product_id)
    {
        $product = ProductModel::find($product_id);
        return view('admin.edit_product', ['info' => $this->info, 'product' => $product]);
    }

    public function sales()
    {
        return view('admin.sales', ['info' => $this->info]);
    }
    public function users()
    {
        $users = User::all();
        return view('admin.users', ['info' => $this->info, 'users' => $users]);
    }
    public function orders()
    {
        return view('admin.orders', ['info' => $this->info]);
    }
}
