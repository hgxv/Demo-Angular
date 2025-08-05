import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleBtn } from './toggle-btn/toggle-btn';
import { QuoteComponent } from './quote/quote';



@NgModule({
  declarations: [
    ToggleBtn, QuoteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleBtn, QuoteComponent
  ]
})
export class ExosModule { }
