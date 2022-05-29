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
employees:Employee[]=[];
trainer: Trainer[];



  constructor(private router: Router, private apiService: ApiService) { 
    this.apiService.getEmployeeData().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(data);
    });
  }

  // addTrainer(trainer: Trainer) {
  //   this.apiService.postForms(trainer).subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  ngOnInit() {
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
