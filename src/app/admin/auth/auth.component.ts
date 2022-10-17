import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (
      this.loginForm.valid &&
      this.loginForm.value.email &&
      this.loginForm.value.password
    ) {
      this.auth
        .signInWithEmailAndPassword(
          this.loginForm.value.email,
          this.loginForm.value.password
        )
        .then(
          (user) => {
            if (user) {
              this.router.navigate(['/sudo/admin']);
            }
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }
}
