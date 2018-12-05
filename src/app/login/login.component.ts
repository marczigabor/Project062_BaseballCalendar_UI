import { Component, OnInit } from '@angular/core';
import { BaseballService } from '../shared/services/baseball.service';
import { LoginModel } from '../shared/model/LoginModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errors: string;  
  loginModel: LoginModel;

  constructor(
    private baseballService: BaseballService,
    private router: Router   
  ) {
    this.loginModel = new LoginModel();
   }

  ngOnInit() {
  }

  login({ value, valid }: { value: LoginModel, valid: boolean }) : any{

    console.log(value);
    if (valid) {

      this.baseballService.login(value.userName, value.password)
        .subscribe( () => {
            this.router.navigate(['/books']);                         
        },
        //error
        (errors) => { this.errors = errors }, //error handling
        // completed
        () => {}  
      );
    }
  }
}
