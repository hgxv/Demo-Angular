import { Component } from '@angular/core';
import { Student } from "../student";
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'student-student-form',
  standalone: false,
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})

export class StudentForm {

  constructor(
    private studentService: StudentService,
    private router: Router
  ){ }

  student: Student = {
    name: "",
    grade: ""
  }
  message: string = "";

  onSubmit() {
    this.studentService
    .postStudent(this.student)
    .subscribe(student => {
      console.log(student);
      this.message = "L'étudiant a bien été ajouté !";
    })
    console.log("submit");

    setTimeout(() => {
        this.router.navigate(['/students']);        
    }, 500);

  }
}
