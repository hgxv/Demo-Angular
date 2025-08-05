import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { QuoteComponent } from './exos/quote/quote';
import { ExosModule } from './exos/exos-module';
import { Students } from './students/students';


@Component({
  selector: 'app-root',
  imports: [CounterComponent, ExosModule, Students],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  saucisse: string = "Saucisse";
  isGood: boolean = true;
  fruits: string[] = ['pomme', 'banane', 'kiwi'];
}
