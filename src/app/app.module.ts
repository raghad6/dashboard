import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { AppliedformsComponent } from './pages/appliedforms/appliedforms.component';
import { EmployeeslistComponent } from './pages/employeeslist/employeeslist.component';
import { TrainerslistComponent } from './pages/trainerslist/trainerslist.component';
import { TraineeslistComponent } from './pages/traineeslist/traineeslist.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages//login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AppliedformsComponent,
    EmployeeslistComponent,
    TrainerslistComponent,
    TraineeslistComponent,
    CertificateComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
