<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Admin;

class UserController extends Controller
{
    public function signup(request $request)
    {
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

    public function signin(Request $request)
    {
        $rules = [
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:6',
        ];
        $request->validate($rules);

        $admin = Admin::where('email', $request->input('email'))
            ->first();

        if ($admin) {
            if ($request->input('password') === $admin->password) {
                session(['admin_id' => $admin->id]);
                return response()->json(['message' => 'Admin signed in successfully', 'redirect' => url('/'), 'session_id' => session('admin_id')], 200);
            }
        } else {
            $user = User::where('email', $request->input('email'))
                ->first();
            if ($user) {
                if ($request->input('password') === $user->password) {
                    session(['user_id' => $user->id]);
                    return response()->json(['message' => 'User signed in successfully', 'user' => $user, 'role' => 'user'], 200);
                }
            }
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function redirection(Request $request)
    {
        $loginId = $request->query('session_id'); // gets value from ?session_id=1
        $checkUser = Admin::find($loginId);

        if ($checkUser && $checkUser->name === 'Super Admin') {
            session(['admin_id' => $checkUser->id]);
            return redirect()->route('admin.index');
        } else {
            session(['user_id' => $checkUser->id]);
            return redirect()->route('user.index');
        }
    }
    public function change_status($id){
        $user = User::find($id);
        if ($user) {
            
           if ($user->status == 'active') {
                $user->status = 'inactive';
                $user->save();
                return redirect()->back()->with('success', 'User status successfully.');
           }else {
                $user->status = 'active';
                $user->save();
                return redirect()->back()->with('success', 'User status successfully.');
           }
        }

    }
}
