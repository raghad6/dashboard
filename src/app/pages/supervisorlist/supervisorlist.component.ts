import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supervisor } from 'src/app/models/Supervisor';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-supervisorlist',
  templateUrl: './supervisorlist.component.html',
  styleUrls: ['./supervisorlist.component.scss']
})
export class SupervisorlistComponent implements OnInit {
  popup = false;
  popup1 = false;
  name = 'angular';
  seupervisor: Supervisor[] = [];

  constructor(private router: Router, private apiService: ApiService) {
    this.apiService.getSupervisorData().subscribe((data: Supervisor[]) => {
      this.seupervisor = data;
      console.log(data);
    });
   }

  ngOnInit() {
  }
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
}
}
