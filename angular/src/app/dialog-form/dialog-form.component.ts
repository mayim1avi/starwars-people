import { Component, OnInit, Optional, Inject } from '@angular/core';

import { Validators, FormBuilder  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PeopleService } from '../services/people.service';
import { PeopleItem } from '../interfaces/people-item';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {

	peopleForm = this.fb.group({});
	action:string;
	local_data:any;
	server_action:string;
  
    constructor(
      public dialogRef: MatDialogRef<DialogFormComponent>,
      private fb: FormBuilder, 
      private peopleService: PeopleService,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: PeopleItem) {
      
      this.local_data = {...data};
      this.action = this.local_data.action;
      this.server_action = this.local_data.server_action;
    }
  

  
  	ngOnInit() {      
  		this.resetForm();
  	}
  	

	resetForm(){
		this.peopleForm = this.fb.group({
			id: [this.data.id],
		    name: [this.data.name,  Validators.required],
		    height: [this.data.height,  Validators.required],
		    mass: [this.data.mass],
		    hair_color: [this.data.hair_color],
		    skin_color: [this.data.skin_color],
		    eye_color: [this.data.eye_color],
		    birth_year: [this.data.birth_year],
		    gender: [this.data.gender],
		  });	
	}



  save(){
    this.peopleService.addPeople(this.peopleForm.value, this.action.toLowerCase(), this.server_action).subscribe(res => {
        this.dialogRef.close({event:this.action,data:this.local_data});    
     });    
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
