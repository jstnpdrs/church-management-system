<?php

namespace App\Http\Controllers;

use App\Models\Confirmation;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ConfirmationController extends Controller
{
    public function index()
    {
        return Inertia::render('Confirmation',[
            'confirmations'=>Confirmation::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('ConfirmationCreate');
    }

    public function store(Request $request)
    {
        Confirmation::create($request->all());
        // return inertia('Confirmation',[
        //     'confirmations'=>Confirmation::all()
        // ]);
        return Redirect::route('confirmation.index');
    }

    public function show($id)
    {
        return Inertia::render('ConfirmationShow',[
            'confirmation'=>Confirmation::where('id',$id)->first()
        ]);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        Confirmation::find($id)->update($request->all());
        return Redirect::route('confirmation.index');
    }

    public function destroy($id)
    {
        Confirmation::find($id)->delete();
        return Redirect::route('confirmation.index');
    }
}
