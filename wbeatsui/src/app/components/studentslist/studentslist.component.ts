import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {

  students = [];

  displayedColumns: string[] = ['student_id', 'first_name', 'middle_name', 'last_name',
                                'dob', 'father_name', 'mother_name', 'guardian_name', 
                                'start_date', 'end_date', 'status_code', 'comments'];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest(environment.studentslisturl).subscribe((data : any[]) => {
 //     console.log(data);
      this.students = data;
    });
  }

}
