import { Component } from '@angular/core';

@Component({
  selector: 'exo-toggle-btn',
  standalone: false,
  templateUrl: './toggle-btn.html',
  styleUrl: './toggle-btn.css'
})

export class ToggleBtn {
  text: 'oui' | 'non' = 'oui';
  isOff: boolean = false;
  left: string = "60px";

  onClick() {
    console.log("Clic");
    if (this.text == "oui") {
      this.text = "non";
      this.left = "2px";
    }
    else {
      this.text = "oui";
      this.left = "60px";
    }
  }
}
