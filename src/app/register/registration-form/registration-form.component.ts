import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  email:any="";
  password:any="";
  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
   
   }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(): void {
    //console.log("ngAfterViewInIt works")
  }
  onSubmit(){
    this.router.navigate(
      ['/login'],
      { queryParams: { name:this.email,password:this.password} } 
    );
  }
}
