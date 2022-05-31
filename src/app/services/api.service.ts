import { Employee } from './../models/Employee';
import { Trainee } from './../models/Trainee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Forms } from '../models/Forms';
import { Trainer } from '../models/Trainer';
import { User } from '../models/user';
import { Supervisor } from '../models/Supervisor';
import { Company } from '../models/Company';
import { User2 } from '../models/user2';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API = environment.api;
  private readonly headers = {};

  constructor(private httpClient: HttpClient) {}

  getForms(): Observable<Forms[]> {
    return this.httpClient.get<Forms[]>(this.API + 'appform');
  }

  getTrainerData(): Observable<Trainer[]> {
    return this.httpClient.get<Trainer[]>(this.API + 'trainer');
  }

  getTraineeData(): Observable<Trainee[]> {
    return this.httpClient.get<Trainee[]>(this.API + 'trainee');
  }

  getEmployeeData(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API + 'employee')   ;
  }

  getSupervisorData(): Observable<Supervisor[]> {
    return this.httpClient.get<Supervisor[]>(this.API + 'unitrainingsupervisor')   ;
  }

  postdata(ufr: Forms): Observable<any> {
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'postdatauserandtranee',

      ufr
      ,
      {
        headers
      }
    );
  }

  postEmployee(empl: Employee): Observable<any> {
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'trainer',

      empl
      ,
      {
        headers
      }
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API + 'user');
  }

  getComData(id:number): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API + 'company/' + id);
  }

  postLoginData(user2: User2): Observable<any> {
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'login',
         user2
      ,
      {
        headers
      }
    );
  }

  postForms(trainee: Trainee): Observable<any> {
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'trainee',
      {
         trainee,
      },
      {
        headers: headers,
      }
    );
  }

  postTrainer(employee: Employee): Observable<any> {
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'trainer', //??? which table 

      employee
      ,
      {
        headers
      }
    );
  }
}


