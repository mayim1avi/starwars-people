import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PeopleDataSource } from '../people/people-datasource';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

	url: string = 'http://127.0.0.1:8000';

  	constructor(private http: HttpClient) { }


  	getPeople(){
  		return this.http.get(this.url + '/get-all');
  	}

  	addPeople(peopleForm: any, title: string, serverAction: string ) {				
		let body = new HttpParams({
  			fromObject : peopleForm
		});
		
		return this.http.get(this.url + '/people/' + serverAction, {params: body}/*, this.ParseHeaders*/);		
	}




}
