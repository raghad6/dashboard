import { VERSION } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  name = 'Angular ' + VERSION.major;
  
  printPage() {
    window.print();
  }
  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '');
    link.setAttribute('download', `certificate.jpg`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
}