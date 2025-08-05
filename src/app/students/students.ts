import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Student = {
  name: string,
  grade: number,
}


@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})

export class Students {
  students: Student[] = [
    {
      name: "Axel",
      grade: 16,
    },
    {
      name: "Maxime",
      grade: 15,
    },
    {
      name: "Kévin",
      grade: 4,
    }
  ]

  style1: any = {
    color: 'green',
    fontSize: '38pt',
  }

  style2: any = {
    color: 'green',
    fontSize: '40pt',
    fontWeight: 'bold',
    textDecoration: 'underline',
  }

  class1: any = {
    winner: true,
    loser: false,
  }

  constructor() {

    setTimeout(() => {
      this.style1.color = "orange";
    }, 5000)

  }
}
