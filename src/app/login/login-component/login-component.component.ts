import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  email: any;
  pwd: any;
  container:any={};
  constructor( private activatedRoute:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    if( this.activatedRoute){
     this.email =  this.activatedRoute.snapshot.queryParams['name']
     this.pwd =  this.activatedRoute.snapshot.queryParams['password']
    } 
    this.getDataFromServer();
  }
  getDataFromServer(){
      this.http.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8').subscribe((res)=>{
          if(res){
              this.container.listData = res;
          }
      },(err)=>{
        //TODO
      })
  }

}
