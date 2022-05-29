import { Trainee } from './../../models/Trainee';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-traineeslist',
  templateUrl: './traineeslist.component.html',
  styleUrls: ['./traineeslist.component.scss']
})
export class TraineeslistComponent implements OnInit {

  popup = false;
  popup1 = false;
  name = 'angular';
  trainees: Trainee[] = [];

  constructor(private router: Router, private apiService: ApiService) {
    this.apiService.getTraineeData().subscribe((data: Trainee[]) => {
      this.trainees = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
}
}
