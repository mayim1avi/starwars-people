<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/populat', 'PeopleController@populat');
Route::get('/get-all', 'PeopleController@getAll');

// Route::resource('Pepole', 'PeopleController');
Route::get('people/store', 'PeopleController@store');
Route::get('people/update', 'PeopleController@update');
Route::get('people/delete/{id}', 'PeopleController@destroy');
