import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'student-student-card',
  standalone: false,
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})

export class StudentCard {
  @Input()
  student: Student | null = null;

  @Input()
  averageVisibility: boolean = false;
}
