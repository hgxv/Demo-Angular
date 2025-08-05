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
  marginLeft: string = '0'; // marge du texte (span)

  onClick() {
    console.log("Clic");

    this.isOff = !this.isOff;

    if (this.text == "oui") {
      this.text = "non";
      this.left = "2px";
      this.marginLeft = "46px";
    }
    else {
      this.text = "oui";
      this.left = "60px";
      this.marginLeft = "0";
    }

    console.log(this.isOff ? "0" : "1")
  }
}
