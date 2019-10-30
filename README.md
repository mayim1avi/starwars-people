a starwars people crud.

in order to use the crud, follow these steps:

1. download the project into a local directory.

2. create a new db in youre local server and name it starwars (you might need to chnge configurations in \starwars-people-master\laravel\.env and \starwars-people-master\laravel\config\database).

3. open command line and go to *local directory*>starwars-people-master>laravel and  type in "composer update --no-scripts  
"

4. type in the command line "php artisan migrate".

5. type in the command line "php artisan serve".

6. to populate the db tabels type in the command line "php artisan tinker" and "$controller = app()->make('App\Http\Controllers\PeopleController');
app()->call([$controller, 'populat'], []);" 

  or click on the link "http://127.0.0.1:8000/populat".

7. in the command line go to *local directory*>starwars-people-master>angular and type in "npm install --save-dev @angular-devkit/build-angular" and "ng serve".

8. open youre browser at url "http://localhost:4200/".
