import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  constructor(
    private router:Router
  ) { } 

  ngOnInit(): void {
  }
  goTORegister(){
    this.router.navigate(
      ['/register']);
  }
  goToLogin(){
    this.router.navigate(['./login']);
  }
}
