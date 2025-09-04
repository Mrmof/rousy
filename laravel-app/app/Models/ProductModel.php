<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model
{
    protected $table = 'product';

    protected $fillable = [
        'productName',
        'productImage',
        'category_id',
        'productPrice',
        'oldProductPrice',
        'productQuantity',
        'productBenefits',
        'productBadges',
        'productDescription',
    ];
    // Product belongs to a category
    public function category()
    {
        return $this->belongsTo(ProductCategoryModel::class, 'id');
    }

}
