import { Component, Input, OnInit, inject } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'student-student-card',
  standalone: false,
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})

export class StudentCard implements OnInit {

    constructor(private studentService: StudentService) {}

    private route = inject(ActivatedRoute);
    id: string = "0";
    isShowLink: boolean = false;

    @Input()
    student: Student | null = null;

    @Input()
    averageVisibility: boolean = false;


    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            this.studentService
                .getStudent(this.id)
                .subscribe(student => this.student = student)
            
        })
    }

}
