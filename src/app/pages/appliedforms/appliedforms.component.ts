import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Forms } from "src/app/models/Forms";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-appliedforms",
  templateUrl: "./appliedforms.component.html",
  styleUrls: ["./appliedforms.component.scss"],
})
export class AppliedformsComponent implements OnInit {
  panelOpenState = false;
  popup = false;
  popup2 = false;
  name = "angular";
  form: Forms[];

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getForms().subscribe((data: Forms[]) => {
      this.form = data;
      console.log(data);
    });
  }

  ngOnInit() {

  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
