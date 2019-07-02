import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '@/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { email: '', password: '', remember: false };
  errMess: string;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    if (this.authService.logIn(this.user)) {
      this.dialogRef.close();
    } else {
      console.log("login failed!")
      this.errMess = `incorrect username/password`
    }
  }
  
  registerUser(){
    this.dialogRef.close({register: true});
  }
}
