import { Employee } from './../models/Employee';
import { Trainee } from './../models/Trainee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Forms } from '../models/Forms';
import { Trainer } from '../models/Trainer';
import { User } from '../models/user';
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

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API + 'user');
  }

  postLoginData(user: User): Observable<any> {
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'login',
      
         user
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
}
