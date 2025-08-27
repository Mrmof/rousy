<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\HeroModel;

class HeroController extends Controller
{
    public function addHeroPage(Request $request) {
        $rules = [
            'heroImage' => 'required|image|mimes:jpeg,png,jpg,gif|max:10048'
        ];
        $message = [
            'heroImage.required' => 'Please upload a hero image.',
            'heroImage.image' => 'The hero image must be an image file.',
            'heroImage.mimes' => 'The hero image must be a file of type: jpeg, png, jpg, gif.',
            'heroImage.max' => 'The hero image must not be greater than 8MB.'
        ];
        $validator = Validator::make($request->all(), $rules, $message);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }else {
            $imageUniqueName = date('YmdHis') . '_' . $request->file('heroImage')->getClientOriginalName();
               
            $saveImage = HeroModel::create([
                'image_name' => $imageUniqueName,
                'image_path' => $request->file('heroImage')->store('hero_images', 'public'),
                'image_size' => $request->file('heroImage')->getSize()
            ]);
            if ($saveImage) {
                 move_uploaded_file($request->file('heroImage')->getRealPath(), public_path('heropages/' . $imageUniqueName));
                return redirect()->route('admin.hero')->with('success', 'Hero image added successfully.');
            }else {
                return redirect()->route('admin.hero')->with('error', 'Failed to add hero image.');
            }

            
        }

        
    }
    public function deleteHeroImage($id) {
        $heroImage = HeroModel::find($id);
        if ($heroImage) {
            $imagePath = public_path('storage/' . $heroImage->image_path);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
            $heroImage->delete();
            return redirect()->route('admin.hero')->with('success', 'Hero image deleted successfully.');
        }else {
            return redirect()->route('admin.hero')->with('error', 'Hero image not found.');
        }
    }
    
}
