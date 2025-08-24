<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Dashboard extends Controller
{
     public $info = [
        'company' => 'Rosy Herbal Care',
        'role' => 'Administrator',
        'email' => 'support@rosy.com'
    ];
    public function index()
    {
        return view('dashboard.index');
    }

    public function orders()
    {
        return view('dashboard.orders', ['info' => $this->info]);
    }
    public function inbox()
    {
        return view('dashboard.inbox', ['info' => $this->info]);
    }
    public function pending_review()
    {
        return view('dashboard.pending_review', ['info' => $this->info]);
    }
    public function pending_review_details()
    {
        return view('dashboard.pending_review_details', ['info' => $this->info]);
    }
    public function wishlist()
    {
        return view('dashboard.wishlist', ['info' => $this->info]);
    }
    public function account()
    {
        return view('dashboard.account', ['info' => $this->info]);
    }
}
