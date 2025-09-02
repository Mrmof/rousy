<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\ProductCategoryModel;

class ProductCategoryController extends Controller
{
    public function addProductCategory(Request $request) {
        
        $rules = [
            'name' => 'required|string|max:255|unique:productcategory,category_name',
            'categoryImage' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable|string|max:1000',
        ];
        $messages = [
            'name.required' => 'Product name is required',
            'name.unique' => 'Product name must be unique',
            'categoryImage.required' => 'Category image is required',
            'categoryImage.image' => 'Category image must be an image',
            'categoryImage.mimes' => 'Category image must be a file of type: jpeg, png, jpg, gif',
            'categoryImage.max' => 'Category image must not be greater than 2MB',
            'description.max' => 'Description must not be greater than 1000 characters',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }else {
            $imageUniqueName = date('YmdHis') . '_' . $request->file('categoryImage')->getClientOriginalName();
            // dd( $imageUniqueName);
            $savecategory = ProductCategoryModel::create([
                'category_name' => $request->input('name'),
                'product_category_photo' => $imageUniqueName,
                'description' => $request->input('description')
            ]);
            if ($savecategory) {
                move_uploaded_file($request->file('categoryImage')->getRealPath(), public_path('category_images/' . $imageUniqueName));
                return redirect()->route('admin.product_category')->with('success', 'Product category added successfully.');
            }else {
                return redirect()->route('admin.product_category')->with('error', 'Failed to add product category.');
            }
        }

    }

    public function viewProductCategory($id) {
        $category = ProductCategoryModel::find($id);
        if ($category) {
            return view('admin.product_category_details', ['category' => $category]);
        }else {
            return redirect()->route('admin.product_category')->with('error', 'Product category not found.');
        }
    }

    public function getCategories(){
        $data = ProductCategoryModel::all();
        return response()->json($data);
    }
    
    
}
