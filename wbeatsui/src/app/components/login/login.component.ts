import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  login(myform) {
//	console.log(myform.value);
    console.log(myform.value.username);
    console.log(myform.value.password);

    const formData = new FormData();
    formData.set("uid", myform.value.username);
    formData.append("passwd", myform.value.password);

    var response = this.dataService.sendPostRequest(environment.loginurl, {uid : myform.value.username,
      passwd : myform.value.password});
    console.log("MURALI: post response = <"+response+">");
  }

}
