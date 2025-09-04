<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroModel extends Model
{
    protected $table = 'hero';
    protected $fillable = ['image_name', 'image_path', 'image_size'];
}
