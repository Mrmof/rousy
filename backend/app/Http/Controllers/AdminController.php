<?php

namespace App\Http\Controllers;

use App\Models\HeroModel;
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
        return view('admin.product_category', ['info' => $this->info]);
    }
    public function product_category_details()
    {
        $product = [
            'name' => 'Sample Laptop',
            'description' => 'A powerful laptop with 16GB RAM, 512GB SSD, and Intel i7 processor.',
            'price' => 1200.00,
            'category' => 'Electronics',
            'stock' => 15,
            'image' => asset('assets/img/product-sample.jpg'), // place a dummy image here
            'created_at' => now()->subDays(5)->toDateTimeString(),
            'updated_at' => now()->toDateTimeString(),
        ];
        return view('admin.product_category_details', ['info' => $this->info, 'product' => $product]);
    }
    public function products()
    {
        return view('admin.products', ['info' => $this->info]);
    }
    public function sales()
    {
        return view('admin.sales', ['info' => $this->info]);
    }
    public function users()
    {
        return view('admin.users', ['info' => $this->info]);
    }
    public function orders()
    {
        return view('admin.orders', ['info' => $this->info]);
    }
}
