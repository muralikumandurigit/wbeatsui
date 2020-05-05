import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(myform) {
//	console.log(myform.value);
    console.log(myform.value.username);
    console.log(myform.value.password);
  }

}
