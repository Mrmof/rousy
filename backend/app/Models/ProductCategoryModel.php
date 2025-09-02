<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategoryModel extends Model
{
    protected $table = 'productcategory';
    protected $fillable = ['category_name', 'product_category_photo', 'description'];
    public function products()
    {
        return $this->hasMany(ProductModel::class, 'category_id');
    }
}
