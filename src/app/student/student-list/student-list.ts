import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'student-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})

export class StudentList implements OnInit {

  students: Student[] = []
  averageVisibility = false

  constructor(private studentService: StudentService) {

/*     fetch('http://localhost:3000/students')
      .then(res => res.json())
      .then(students => console.log(students)); */

  }

  ngOnInit(): void {
    this.studentService
      .getStudents()
      .subscribe((students: Student[]) => this.students = students);
  }

}
