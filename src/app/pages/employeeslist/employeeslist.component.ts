import { Employee } from './../../models/Employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Trainer } from 'src/app/models/Trainer';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.scss']
})
export class EmployeeslistComponent implements OnInit {

popup=false
name='angular';
employee:Employee[]=[];
trainer: Trainer[];



  constructor(private router: Router, private apiService: ApiService) { 
    this.apiService.getEmployeeData().subscribe((data: Employee[]) => {
      this.employee = data;
      console.log(data);
    });

    
  }

  sendastraneeanduser(em: Employee){
    // fr.RoleID=1;
    this.apiService.postEmployee(em).subscribe((data: any) => {
      console.log(data);
    });
  }
  
  addTrainer(employee: Employee) {
    this.apiService.postTrainer(employee).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit() {
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
