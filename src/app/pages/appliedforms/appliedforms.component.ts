import { Trainee } from './../../models/Trainee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Forms } from 'src/app/models/Forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-appliedforms',
  templateUrl: './appliedforms.component.html',
  styleUrls: ['./appliedforms.component.scss'],
})
export class AppliedformsComponent implements OnInit {
  panelOpenState = false;
  role: any;
  popup = false;
  popup2 = false;
  name = 'angular';
  form: Forms[];
  trainee: Trainee[];

  async ngOnInit()  {
    this.role = await localStorage.getItem('role');
  //   if(this.role!=0){
  //     console.log(' in on initthis.role: ', this.role);

  //  this.goToPage('login');
  //   }
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getForms().subscribe((data: Forms[]) => {
      this.form = data;
      console.log(data);
    });
  }
  sendastraneeanduser(fr: Forms){
    // fr.RoleID=1;
    this.apiService.postdata(fr).subscribe((data: any) => {
      console.log(data);
    });
  }
  addForms(trainee: Trainee) {
    this.apiService.postForms(trainee).subscribe((res) => {
      console.log(res);
    });
  }

  }

