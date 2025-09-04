<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;

Route::get('/', [UserController::class, 'redirection'])->name('user_director');
Route::get('/user/{id}', [UserController::class, 'change_status'])->name('admin.change.status');
Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
Route::get('/admin/hero', [AdminController::class, 'hero'])->name('admin.hero');
Route::get('/admin/product-category', [AdminController::class, 'product_category'])->name('admin.product_category');
Route::get('/admin/product-category-details/{id}', [AdminController::class, 'product_category_details'])->name('admin.product_category_details');
Route::get('/admin/products', [AdminController::class, 'products'])->name('admin.products');
Route::get('/admin/sales', [AdminController::class, 'sales'])->name('admin.sales');
Route::get('/admin/users', [AdminController::class, 'users'])->name('admin.users');
Route::get('/admin/orders', [AdminController::class, 'orders'])->name('admin.orders');
Route::post('/admin/hero/upload', [HeroController::class, 'addHeroPage'])->name('admin.hero.upload');
Route::get('/admin/hero/delete/{id}', [HeroController::class, 'deleteHeroImage'])->name('admin.hero.delete');
Route::post('/admin/category/add', [ProductCategoryController::class, 'addProductCategory'])->name('admin.category.add');
Route::get('/admin/category/delete/{id}', [ProductCategoryController::class, 'deleteProductCategory'])->name('admin.category.delete');
Route::post('/admin/products/add', [ProductController::class, 'addProduct'])->name('admin.product.add');
Route::get('/admin/products/restock/{product_id}', [AdminController::class, 'restock_product'])->name('admin.product.restock');
Route::post('/admin/products/restock/{product_id}', [ProductController::class, 'restock_product'])->name('admin.product.restock');
Route::get('/admin/products/delete/{product_id}', [ProductController::class, 'delete_product'])->name('admin.product.delete');
Route::get('/admin/products/edit/{product_id}', [AdminController::class, 'edit_product'])->name('admin.product.edit');
Route::post('/admin/products/edit/{product_id}', [ProductController::class, 'edit_product'])->name('admin.product.edit');





Route::get('/dashboard', [Dashboard::class, 'index'])->name('dashboard.index');
Route::get('/dashboard/orders', [Dashboard::class, 'orders'])->name('dashboard.orders');
Route::get('/dashboard/inbox', [Dashboard::class, 'inbox'])->name('dashboard.inbox');
Route::get('/dashboard/pending_review', [Dashboard::class, 'pending_review'])->name('dashboard.pending_review');
Route::get('/dashboard/pending_review_details', [Dashboard::class, 'pending_review_details'])->name('dashboard.pending_review_details');
Route::get('/dashboard/wishlist', [Dashboard::class, 'wishlist'])->name('dashboard.wishlist');
Route::get('/dashboard/account', [Dashboard::class, 'account'])->name('dashboard.account');

