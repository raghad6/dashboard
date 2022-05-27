import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email:any;
  Password:any;
  role:any=1;
  alertEmail: boolean=false;
  alertPass: boolean=false;
  alertUser: boolean=false;
  Users: User[] = [];
  Title = 'Log In';
  login = new FormControl('vali');

  loginForm = new FormGroup({
    email: new FormControl(''),
    Password: new FormControl(''),
  });
  formBuilder: any;

  constructor(private router: Router, formBuilder: FormBuilder, private apiService: ApiService) {
    // dataService.getUserFromServer().subscribe(
    //   (data: User[] )=> {
    //     this.Users = data;
    //     console.log(data);
    //   }
    // )
  }

  ngOnInit(): void {
    localStorage.setItem('role', this.role);
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
    });
  }

  get valida() {
    return this.loginForm.controls;
  }

  log(){
    console.log('email: ', this.email);
    console.log('Password: ', this.Password);

  }

  async appLogin(){
    console.log('email: ', this.email);
    console.log('Password: ', this.Password);

    if(this.email.includes('@')  && this.email.length>=11 && ( /[a-zA-Z]/.test(this.Password)) && ( /[0-9]/.test(this.Password))){
      this.alertEmail=false;
      this.alertPass=false; 


     console.log("this is valid ");
  // post req login

  this.apiService.postLoginData(new User(0,'',this.Password,this.email, this.role)).subscribe((s:any)=>{
    console.log(s);
    this.role=s['Role'];

    if(s['Role']){

      localStorage.setItem('role', this.role);

      if(this.role==1 || this.role==0 ){
      this.goToPage('Trainer-profile');
      }
      else if(this.role==2 || this.role==0){
        this.goToPage('Trainee-profile');
      }
      else if(this.role==3 || this.role==0){
        this.goToPage('Uni-profile');
      }
    
    }else{
      this.alertUser=true;
      console.log("this is not  valid user");
    }
  
  });


  // localStorage.setItem('role', this.role);

  // if(this.role==1 || this.role==0 ){
  // this.goToPage('Trainer-profile');
  // }
  // else if(this.role==2 || this.role==0){
  //   this.goToPage('Trainee-profile');
  // }
  // else if(this.role==3 || this.role==0){
  //   this.goToPage('Uni-profile');
  // }


    }else if(!this.email.includes('@') )
    {
      this.alertEmail=true;
      console.log("this is not  valid email");
    }
    else 
    {
      this.alertPass=true;
      console.log("this is not  valid password");
    }

  }
  // containsNumber(str:String) {
  //   return /\d/.test(str);
  // }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }
  }
}