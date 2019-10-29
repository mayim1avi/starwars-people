<?php

namespace App\Http\Controllers;

use App\People;
use App\User;
use Illuminate\Http\Request;

class PeopleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $model = new People();
        $model->name = $request->name;
        $model->height = $request->height;
        $model->mass = $request->mass;
        $model->hair_color = $request->hair_color;
        $model->skin_color = $request->skin_color;
        $model->eye_color = $request->eye_color;
        $model->birth_year = $request->birth_year;
        $model->gender = $request->gender;

        header('Access-Control-Allow-Origin: *');
        return json_encode($model->save());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\People  $people
     * @return \Illuminate\Http\Response
     */
    public function show(People $people)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\People  $people
     * @return \Illuminate\Http\Response
     */
    public function edit(People $people)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\People  $people
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, People $people)
    {
        $model = $people::find($request->id);        
        $model->name = $request->name;
        $model->height = $request->height;
        $model->mass = $request->mass;
        $model->hair_color = $request->hair_color;
        $model->skin_color = $request->skin_color;
        $model->eye_color = $request->eye_color;
        $model->birth_year = $request->birth_year;
        $model->gender = $request->gender;

        header('Access-Control-Allow-Origin: *');
        return json_encode($model->save());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\People  $people
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        header('Access-Control-Allow-Origin: *');
        return json_encode(People::find($id)->delete());
    }

    public function populat(){


        $model = new User();
        $model->name = 'admin';
        $model->password = 'admin';        
        $model->role = 'admin';
        $model->save();


        $model = new User();
        $model->name = 'user';
        $model->password = 'user';        
        $model->role = 'user';
        $model->save();


        $ch = curl_init(); 
        $url = "http://swapi.co/api/people?page=1";
        
        while ($url) {
                    
            // set url 
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
            
            $output = curl_exec($ch); 
            $people = json_decode($output);

            foreach ($people->results as $row) {
                $model = new People();

                foreach ($row as $key => $value) {
                    $model->$key = is_array($value) ? serialize($value) : $value;
                }
                
                if(!$model->save()){
                    var_dump($model->errors);die;
                }
            }

            $url = $people->next;
        }

        echo 'Population Completed';
    }

    public function getAll(){
        header('Access-Control-Allow-Origin: *');

        return json_encode(People::get());
    }
}
