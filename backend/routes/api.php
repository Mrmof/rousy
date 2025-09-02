<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductCategoryController;

Route::post('/signup', [UserController::class, 'signup']);
Route::post('/signin', [UserController::class, 'signin']);
Route::get('/products', [ProductController::class, 'allproducts']);
Route::get('/categories', [ProductCategoryController::class, 'getCategories']);