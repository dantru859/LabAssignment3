import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  students: Array<object> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Daniel',
      lastName: 'Trujillo',
      Course: 'Programming'
    }
    this.students[1] = {
      id: 1,
      firstName: 'Tom',
      lastName: 'Brady',
      Course: 'Swimming'
    }
    this.students[2] = {
      id: 1,
      firstName: 'Mark',
      lastName: 'Zuc',
      Course: 'Business'
    }
    this.students[3] = {
      id: 1,
      firstName: 'Joe',
      lastName: 'Biden',
      Course: 'Politics'
    }
  }

  ngOnInit() {
  }

  addStudent() {
    const student: IStudent = {
      id: 1,
      firstName: 'Mike',
      lastName: 'Tyson',
      course: 'Boxing'
    };

    this.students.push()
  }

}
