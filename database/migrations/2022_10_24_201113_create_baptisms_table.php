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
        Schema::create('baptisms', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->date('birthday')->nullable();
            $table->string('pob')->nullable();
            $table->date('dob')->nullable();
            $table->longText('parents')->nullable();
            $table->string('legitimitas')->nullable();
            $table->longText('godparents')->nullable();
            $table->longText('sponsors')->nullable();
            $table->date('baptism-date')->nullable();
            $table->string('minister')->nullable();
            $table->string('minister')->nullable();
            $table->string('legitimitas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('baptisms');
    }
};
