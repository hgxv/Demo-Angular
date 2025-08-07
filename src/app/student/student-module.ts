import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentForm } from './student-form/student-form';
import { StudentList } from './student-list/student-list';
import { StudentCard } from './student-card/student-card';
import { FormsModule } from '@angular/forms';
import { Message } from './message/message';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from '../app.routes';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    StudentForm,
    StudentList,
    StudentCard,
    Message,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  exports: [
    StudentCard,
    StudentList,
    StudentForm
  ],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class StudentModule { }
