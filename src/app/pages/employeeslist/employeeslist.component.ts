import { Employee } from './../../models/Employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.scss']
})
export class EmployeeslistComponent implements OnInit {

popup=false
name='angular';
employees:Employee[]=[];


  constructor(private router: Router, private apiService: ApiService) { 
    this.apiService.getEmployeeData().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
