<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\Hash;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'role' => 'admin',
            'password' => Hash::make('admin')
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Secretary',
            'email' => 'secretary@secretary.com',
            'role' => 'secretary',
            'password' => Hash::make('secretary')
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Staff',
            'email' => 'staff@staff.com',
            'role' => 'staff',
            'password' => Hash::make('staff')
        ]);

        // \App\Models\User::factory(100)->create();

    }
}
