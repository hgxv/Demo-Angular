import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentForm } from './student-form/student-form';
import { StudentList } from './student-list/student-list';
import { StudentCard } from './student-card/student-card';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentForm,
    StudentList,
    StudentCard,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StudentCard,
    StudentList,
    StudentForm
  ]
})
export class StudentModule { }
