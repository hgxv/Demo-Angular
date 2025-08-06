import { Component } from '@angular/core';
import { PassGenService } from '../pass-gen.service';
import { Password } from '../pass';


@Component({
  selector: 'app-pass-gen',
  standalone: false,
  templateUrl: './pass-gen.html',
  styleUrl: './pass-gen.css'
})
export class PassGen {

  constructor(private passGenService: PassGenService) { }

  password: Password = {password: ""};
  isNumber: boolean = false;
  isSpecialChar: boolean = false;
  numberChar: number = 6;
  isGenerated: boolean = false;
  baseChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  numbers: string = "0123456789";
  specialChars: string = "&é#{}[]()-è_çà@$!%";
  selection: string = "";
  message = "";

  createPass() {
    this.password.password = "";
    this.selection = this.baseChars;
    if (this.isNumber) { this.selection += this.numbers; }
    if (this.isSpecialChar) { this.selection += this.specialChars; }
    console.log(this.selection);
    for (let i = 0; i < this.numberChar; i++) {
      this.password.password += this.selection.charAt(Math.floor(Math.random() * this.selection.length));
    }
    this.isGenerated = true;
  }

  savePassword() {
    this.passGenService
      .savePassword(this.password)
      .subscribe(password => {
        console.log(password);
        this.message = "Le mot de passe a bien été sauvegardé !";
      })
  }
}
