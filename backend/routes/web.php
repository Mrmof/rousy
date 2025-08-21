<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
Route::get('/admin/hero', [AdminController::class, 'hero'])->name('admin.hero');
Route::get('/admin/product-category', [AdminController::class, 'product_category'])->name('admin.product_category');
Route::get('/admin/product-category-details', [AdminController::class, 'product_category_details'])->name('admin.product_category_details');
Route::get('/admin/products', [AdminController::class, 'products'])->name('admin.products');
Route::get('/admin/sales', [AdminController::class, 'sales'])->name('admin.sales');
Route::get('/admin/users', [AdminController::class, 'users'])->name('admin.users');
Route::get('/admin/orders', [AdminController::class, 'orders'])->name('admin.orders');

