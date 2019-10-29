import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PeopleDataSource } from './people-datasource';
import { PeopleItem } from '../interfaces/people-item';

import { MatDialog } from '@angular/material';

import { PeopleService } from '../services/people.service';

import { DialogFormComponent } from '../dialog-form/dialog-form.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<PepoleItem>;
  dataSource: PeopleDataSource;

  constructor(private peopleService: PeopleService, private dialog: MatDialog) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender', 'action'];

  ngOnInit() {
    // this.dataSource = new PeopleDataSource();
  }

  
  reload(){
    this.peopleService.getPeople()
      .subscribe(res => {
        this.dataSource = new PeopleDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;

     });
  
  }

  ngAfterViewInit() {
    this.reload();
  }

  openDialog(action,obj, server_action) {
    obj.action = action;
    obj.server_action = server_action;    
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '350px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event != 'Cancel')
         this.reload();
    });
  }


}
