import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {
email: string='';
password: string='';
  constructor(private dataService:AdminService) { }

  ngOnInit(): void {
  }
   sign:any;
  public signin (){
    this.dataService.signIn(this.email,this.password).subscribe((data: any)=>{
      this.sign = data;
    })
  }
}
