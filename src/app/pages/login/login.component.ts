import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any;
  Password: any;
  role: any;
  alertEmail = false;
  alertPass = false;
  alertUser = false;
  Users: User[] = [];
  Title = 'Log In';


  constructor(private router: Router, private apiService: ApiService) {
    // dataService.getUserFromServer().subscribe(
    //   (data: User[] )=> {
    //     this.Users = data;
    //     console.log(data);
    //   }
    // )
  }

  ngOnInit(): void {
    localStorage.setItem('role', this.role);

  }


  // log() {
  //   console.log('email: ', this.email);
  //   console.log('Password: ', this.Password);

  // }

  async appLogin() {
    console.log('email: ', this.email);
    console.log('Password: ', this.Password);

    if (this.email.includes('@') && this.email.length >= 11 && (/[a-zA-Z]/.test(this.Password)) && (/[0-9]/.test(this.Password))) {
      // this.alertEmail=false;
      // this.alertPass=false;
      // this.goToPage('');


      console.log('this is valid ');
      // post req login

      this.apiService.postLoginData(new User(0, '', this.Password, this.email)).subscribe((s: any) => {
        console.log(s);
        this.role = s['Role'];

        if (s['Role']!=undefined) {
          console.log('kkkkk');

          localStorage.setItem('role', this.role);
          console.log('0');

          if (this.role == 0) {
            console.log('1');
            this.goToPage('appliedforms');
            console.log('2');

          }

        } else {
          // this.alertUser=true;
          console.log('this is not  valid user');
        }

      });

    } else if (!this.email.includes('@')) {
      // this.alertEmail=true;
      console.log('this is not  valid email');
    } else {
      // this.alertPass=true;
      console.log('this is not  valid password');
    }

  }
  // containsNumber(str:String) {
  //   return /\d/.test(str);
  // }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  // submit() {
  //   // if (this.loginForm.invalid) {
  //   //   return;
  //   // }
  // }
}