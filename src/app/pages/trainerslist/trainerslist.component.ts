import { Trainer } from './../../models/Trainer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trainerslist',
  templateUrl: './trainerslist.component.html',
  styleUrls: ['./trainerslist.component.scss']
})
export class TrainerslistComponent implements OnInit {

  trainers: Trainer[]=[];
  ProfilePic: any;
  popup = false;


  constructor(private apiService: ApiService, private router: Router, private sanitizer: DomSanitizer) { 

  }



//   convert(Picture){
//     const reader = new FileReader();
// reader.onload = (e) => this.ProfilePic = e.target.result;
// reader.readAsDataURL(new Blob([Picture]));
//   }
  ngOnInit() {
    this.apiService.getTrainerData().subscribe((data: Trainer[]) => {
      this.trainers = data;
      // let objectURL = 'data:image/png;base64,' + data[0].ProfilePic.data;
      // this.ProfilePic = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      // console.log(data);
      // console.log(objectURL);
      // console.log( this.ProfilePic);
      // this.ProfilePic = this.toBase64(data[0].ProfilePic.data);
      // this.ProfilePic =  Buffer.from(data[0].ProfilePic.data).toString("base64")
      //  this.ProfilePic = btoa(String.fromCharCode(...new Uint8Array(data[0].ProfilePic.data)));
      this.ProfilePic = btoa([].reduce.call(new Uint8Array(data[0].ProfilePic.data),function(p,c){return p+String.fromCharCode(c)},''))
      console.log(this.ProfilePic);
    });
  }

  // Tostring(dataimg):void{
  //   this.ProfilePic =  Buffer.from(dataimg).toString("base64")
  // }
  
  toBase64(arr) {
    
    console.log(btoa);
    // arr = new Uint8Array(arr) 
    return btoa(
       arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }
}


