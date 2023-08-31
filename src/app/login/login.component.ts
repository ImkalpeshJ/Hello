import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  incorrect: string = ''
  constructor(private service: HttpService, private router: Router) { }
  isshow:boolean=true
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-0-9-]+(\\.[A-za-z-0-9]+)*(\\.[A-Za-z]{2,})$"

  ngOnInit(): void {
    document.body.className = 'bg_background';

  }
  onshow(){
    this.isshow=!this.isshow
  }
  onSubmit(form: NgForm) {

    let obj = {
      emailId: form.value.email,
      password: form.value.password
    }


    this.service.login(obj)
      .subscribe((response: any) => {
        console.log(response)


        if (response.msg=== 'validuser') {                                                           
          sessionStorage.setItem(
            "name", response.user.name)
          this.router.navigate(['./home'])
        } else {
          this.incorrect = response.msg;
        }
      })
  }

}
