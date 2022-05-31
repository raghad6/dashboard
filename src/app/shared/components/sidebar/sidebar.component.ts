import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/Company';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  role:any;
  company:any;
  showCom!:Company;

  constructor(private router: Router, apiService: ApiService) {
    let id:any = localStorage.getItem('Email');
    apiService.getComData(id).subscribe((data: Company[]) => {
      this.company=data[0];
      console.log(data);  
    })
   }

   async ngOnInit()  {
    this.role = await localStorage.getItem('role');
    if(this.role!=0){
      console.log(' in on initthis.role: ', this.role);
   this.goToPage('login');
    }
    // this.changeUni();
  }

  changeUni(comdata:Company){
    this.showCom=comdata;
    console.log(comdata,"djfj");
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
