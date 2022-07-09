import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  name: string='';
  email: string='';
  password: string='';
  password_confirmation: string='';
  image: string='';

  constructor(private dataService:AdminService,private router:Router) { }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
      console.log(this.image);
    }
  }

  // const formData = new FormData();
  //   formData.append('categoryimage', this.categoryimage);
  //   formData.append('categoryname', this.categoryname);
  //   this.category.addCategory(formData).subscribe((data) => {
  //     console.log(data);
  //     if (data) alert('failed');
  //     else alert('succes');
  //   });

  ngOnInit(): void {
  }
   sign:any;
  public signup (){
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('password_confirmation', this.password_confirmation);
    formData.append('image', this.image);
    this.dataService.signUp(formData).subscribe((data) => {
      if (data.err) alert('failed');
      else alert('succes');
      console.log(data);
      this.router.navigate(['admin-dashboard']);
    });
  }

}
