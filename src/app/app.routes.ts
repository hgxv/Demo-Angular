import { Routes } from '@angular/router';
import { StudentList } from './student/student-list/student-list';
import { StudentForm } from './student/student-form/student-form';
import { App } from './app';
import { StudentCard } from './student/student-card/student-card';


export const routes: Routes = [
    {
        path: 'students',
        component: StudentList
    },
    {
        path: 'student/add',
        component: StudentForm
    },
    {
        path: "student/:id",
        component: StudentCard
    },
    {
        path: "student/del/:id",
        component: StudentCard
    },
];

