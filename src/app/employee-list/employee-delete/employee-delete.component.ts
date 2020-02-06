import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {


  constructor(private httpClient: HttpClient ,private routes: ActivatedRoute) { }

    id:number;
    ngOnInit() {
    
    }
    
}