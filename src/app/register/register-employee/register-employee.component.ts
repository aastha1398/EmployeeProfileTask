import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit
{
  employee: any;
  Id: number;

  ngOnInit() {
     /**
     * To update available entries
    */   
    this.Id= this.routes.snapshot.params['id'];
    this.httpClient.get(`http://localhost:3000/Employees/${this.Id}`).subscribe(data=>
    {
      console.log(data);
      this.employee = data;
      console.log(this.employee);
      this.profileForm.setValue(
        {
          empName:this.employee.empName,
          empEmail:this.employee.empEmail, 
          empContact:this.employee.empContact,
          empDepartment: this.employee.empDepartment,
          gender: this.employee.gender,
          hireDate: this.employee.hireDate,
          perEmp: this.employee.perEmp,
          empCity: this.employee.empCity
        }
    )}
)}
  profileForm : FormGroup;
  submitted = false;
/**
 * 
 * @param fb : formbulider object
 * @param httpClient : HttpClient 
 * @param routes 
 */
  constructor(private fb: FormBuilder,private httpClient: HttpClient,private routes: ActivatedRoute) { 
    this.profileForm = this.fb.group({
      empName: ['',Validators.required],
      empEmail: ['',[Validators.required,Validators.email]],
      empContact: ['',[Validators.required,Validators.maxLength(10)]],
      empDepartment:['', Validators.required],
      gender:[''],
      empCity:[''],
      hireDate:[''],
      perEmp:[''],
    });
}
  get f()
  {
    return this.profileForm.controls;
  }
  OnSubmit()
  {
    //submitted value gets true
    this.submitted = true;
    //If condition checks whether it already exist or not
    if(this.Id)
    {
      //if it exist then it will update
      this.httpClient.put(`http://localhost:3000/Employees/${this.Id}`,this.profileForm.value).subscribe()
    }   
    else
    {
      //else post new entries
      this.httpClient.post('http://localhost:3000/Employees/', this.profileForm.value).subscribe()
    }    
  }
}