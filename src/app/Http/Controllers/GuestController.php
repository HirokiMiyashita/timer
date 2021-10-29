<?php
namespace App\Http\Controllers;

use App\Models\Guest;
use Illuminate\Http\Request;

class GuestController extends Controller{

    public function guest_store(Request $request)
    {
        $user = new Guest;
        $user->name = $request->name;
        $user->studies_time = $request->studies_time;
        $user->category = $request->category;
        $user->save();

        return $user;
    }

    public function show(Guest $guest)
    {
        return Guest::get();
    }
}