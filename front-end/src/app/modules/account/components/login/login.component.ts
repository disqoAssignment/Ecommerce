import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {HttpService} from '../../../../services/http.service';
import {Component, OnInit} from '@angular/core';
import {CustomCookieService} from "../../../../services/custom-cookie.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private http: HttpService,
              private  router:Router,
              private cookieService:CustomCookieService) {

  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {


      this.http.post({
        url: "/login",
        body: this.loginForm.value, headers:new HttpHeaders( {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      }).subscribe(response=>{
        if(response.jwt){
        this.cookieService.setCookie('jwt', response.jwt);
          this.router.navigate(["/"]);
        }
        console.log('cookie jwt '+this.cookieService.getCookie('jwt'));

      });
    }
  }
}
