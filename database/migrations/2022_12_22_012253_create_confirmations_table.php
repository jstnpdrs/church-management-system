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
        Schema::create('confirmations', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->date('dob')->nullable();
            $table->string('pob')->nullable();
            $table->longText('parents')->nullable();
            $table->longText('godparents_sponsors')->nullable();
            $table->string('minister')->nullable();
            $table->date('confirmation_date')->nullable();
            $table->string('status')->default('Pending');
            $table->timestamps();
            $table->softDeletes();
            // $table->string('legitimitas')->nullable();
            // $table->longText('sponsors')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('confirmations');
    }
};
