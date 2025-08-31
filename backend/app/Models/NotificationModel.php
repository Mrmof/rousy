<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NotificationModel extends Model
{
    protected $table = 'notification';
    protected $fillable = ['title', 'message', 'type', 'user_id', 'is_read'];
}
