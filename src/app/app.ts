import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ExosModule } from './exos/exos-module';
import { Students } from './students/students';
import { StudentModule } from "./student/student-module";


@Component({
  selector: 'app-root',
  imports: [
    CounterComponent,
    ExosModule,
    Students,
    StudentModule,
    RouterOutlet,
    RouterLink
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  saucisse: string = "Saucisse";
  isGood: boolean = true;
  fruits: string[] = ['pomme', 'banane', 'kiwi'];
}
