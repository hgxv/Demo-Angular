import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleBtn } from './toggle-btn/toggle-btn';
import { QuoteComponent } from './quote/quote';
import { CityChoiceComponent } from './city-choice-component/city-choice-component';



@NgModule({
  declarations: [
    ToggleBtn, QuoteComponent, CityChoiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleBtn, QuoteComponent, CityChoiceComponent
  ]
})
export class ExosModule { }
