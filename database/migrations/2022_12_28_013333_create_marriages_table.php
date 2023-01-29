<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('marriages', function (Blueprint $table) {
            $table->id();
            $table->longText('name')->nullable();
            $table->longText('address')->nullable();
            $table->longText('age')->nullable();
            $table->longText('civil_status')->nullable();
            $table->longText('parents')->nullable();
            $table->longText('witnesses')->nullable();
            $table->string('marriage_address')->nullable();
            $table->date('marriage_date')->nullable();
            $table->string('priest')->nullable();
            $table->string('status')->default('Pending');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('marriages');
    }
};
