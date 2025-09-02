<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string('productName');
            $table->string('productImage');
            $table->string('category_id');
            $table->decimal('productPrice', 10, 2);
            $table->decimal('oldProductPrice', 10, 2)->nullable();
            $table->integer('productQuantity')->default(0);
            $table->longText('productBenefits');
            $table->string('productBadges');
            $table->longText('productDescription')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');
    }
};
