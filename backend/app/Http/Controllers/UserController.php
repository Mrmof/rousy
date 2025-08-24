<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function signup(request $request){
        $rules = [
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users',
            'phone' => 'nullable|string|max:20',
            'city' => 'nullable|string|max:100',
            'password' => 'required|string|min:6|confirmed',
        ];
        $request->validate($rules);

        // Create the user
        $user = User::create([
            'name' => $request->input('firstName') . ' ' . $request->input('lastName'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'city' => $request->input('city'),
            'password' => $request->input('password'),
            'email_verified_at' => now(),
            'status' => 'active'
        ]);

        return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
    }
}
