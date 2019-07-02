import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/services/auth.service';
import { MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { User } from '@/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {
    id: -1,
    firstName: "", lastName: "", email: "", password: ""
  }
  loginNow: boolean

  private errMess: string = null;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    if (this.authService.signUp(this.user, this.loginNow)) {
      this.dialogRef.close();
    } else {
      console.log("registeration failed!")
      this.errMess = `user details exists`
    }
  }

}
