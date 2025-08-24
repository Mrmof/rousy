<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Dashboard;

Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
Route::get('/admin/hero', [AdminController::class, 'hero'])->name('admin.hero');
Route::get('/admin/product-category', [AdminController::class, 'product_category'])->name('admin.product_category');
Route::get('/admin/product-category-details', [AdminController::class, 'product_category_details'])->name('admin.product_category_details');
Route::get('/admin/products', [AdminController::class, 'products'])->name('admin.products');
Route::get('/admin/sales', [AdminController::class, 'sales'])->name('admin.sales');
Route::get('/admin/users', [AdminController::class, 'users'])->name('admin.users');
Route::get('/admin/orders', [AdminController::class, 'orders'])->name('admin.orders');
Route::get('/dashboard', [Dashboard::class, 'index'])->name('dashboard.index');
Route::get('/dashboard/orders', [Dashboard::class, 'orders'])->name('dashboard.orders');
Route::get('/dashboard/inbox', [Dashboard::class, 'inbox'])->name('dashboard.inbox');
Route::get('/dashboard/pending_review', [Dashboard::class, 'pending_review'])->name('dashboard.pending_review');
Route::get('/dashboard/pending_review_details', [Dashboard::class, 'pending_review_details'])->name('dashboard.pending_review_details');
Route::get('/dashboard/wishlist', [Dashboard::class, 'wishlist'])->name('dashboard.wishlist');
Route::get('/dashboard/account', [Dashboard::class, 'account'])->name('dashboard.account');

