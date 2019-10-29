a starwars people crud.

in order to use the crud, follow these steps:

1. download the project into a local directory.

2. create a new db in youre local server and name it starwars (you might need to chnge configurations in \starwars-people-master\laravel\.env and \starwars-people-master\laravel\config\database).

3. open command line and go to *local directory*>starwars-people-master>laravel and  type in "php artisan migrate".

4. type in the command line "php artisan serve".

5. to populate the db tabels type in the command line "php artisan tinker
$controller = app()->make('App\Http\Controllers\PeopleController');
app()->call([$controller, 'populat'], []);" 

  or click on th link "http://127.0.0.1:8000/populat".

6. in the command line go to *local directory*>starwars-people-master>angular and type in "ng serve".

7. open youre browser at url "http://localhost:4200/".

