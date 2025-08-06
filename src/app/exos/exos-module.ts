import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleBtn } from './toggle-btn/toggle-btn';
import { QuoteComponent } from './quote/quote';
import { CityChoiceComponent } from './city-choice-component/city-choice-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassGen } from './pass-gen/pass-gen';


@NgModule({
  declarations: [
    ToggleBtn, QuoteComponent, CityChoiceComponent, PassGen
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ToggleBtn, QuoteComponent, CityChoiceComponent, PassGen
  ]
})
export class ExosModule { }
