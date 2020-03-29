import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-student-admission',
  templateUrl: './student-admission.component.html',
  styleUrls: ['./student-admission.component.css']
})
export class StudentAdmissionComponent implements OnInit {
  
  today = new FormControl(new Date());
  constructor() { }

  ngOnInit(): void {
  }

}
