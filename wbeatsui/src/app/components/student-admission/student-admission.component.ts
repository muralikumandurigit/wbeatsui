import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

export interface Gender {
  code: string,
  description: string
}

@Component({
  selector: 'app-student-admission',
  templateUrl: './student-admission.component.html',
  styleUrls: ['./student-admission.component.css']
})
export class StudentAdmissionComponent implements OnInit {
  
  gender : Gender[] = [
      {code: 'M', description: 'Male'},
      {code: 'F', description: 'Female'}
  ];
  
  today = new FormControl(new Date());
  constructor() { }

  ngOnInit(): void {
  }

}
