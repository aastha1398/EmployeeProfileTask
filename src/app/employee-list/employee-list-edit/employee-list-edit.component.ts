import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Input} from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component(
{
  selector: 'app-employee-list-edit',
  templateUrl: './employee-list-edit.component.html',
  styleUrls: ['./employee-list-edit.component.css']
})
export class EmployeeListEditComponent implements OnInit
{

  abcd='';
  employees;
  empName: string;
  empContact: number;
  empEmail:string;
  employeePost= {};
  id;
  reverse=false;
  params = "";

  @Input() name: string
  
constructor(private httpClient: HttpClient,private routes: ActivatedRoute){}
ngOnInit()
{
  this.httpClient.get("http://localhost:3000/Employees").subscribe
  (data =>{
    console.log(data);
    this.employees = data;    
  })
}
 /**
  *  @param id: Delete entry with particular id
  */
  deleteEmp(id)
  {
  this.httpClient.delete(`http://localhost:3000/Employees/${id}`).subscribe();
  console.log(this.id);
  }

  /**
   * To sort entry according to the employee name
   */

  sortUp()
  {
    this.params="empName";
    this.reverse=!this.reverse;
  }

  
}
