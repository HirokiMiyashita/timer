<?php
namespace App\Http\Controllers;

use App\Models\WUser;
use Illuminate\Http\Request;

class WUserController extends Controller{
    
    public function store(Request $request)
    {
        $user = new WUser;
        $user->name = $request->name;
        $user->studies_time = $request->studies_time;
        $user->category = $request->category;
        $user->save();

        return $user;
    }

    public function guest_store(Request $request)
    {
        $user = new WUser;
        $user->name = $request->name;
        $user->studies_time = $request->studies_time;
        $user->category = $request->category;
        $user->save();

        return $user;
    }
}