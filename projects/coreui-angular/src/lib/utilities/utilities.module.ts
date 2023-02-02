import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgColorDirective } from './bg-color.directive';
import { BorderDirective } from './border.directive';
import { RoundedDirective } from './rounded.directive';
import { TextColorDirective } from './text-color.directive';
import { AlignDirective } from './align.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BgColorDirective,
    BorderDirective,
    RoundedDirective,
    TextColorDirective,
    AlignDirective
  ],
  exports: [
    BgColorDirective,
    BorderDirective,
    RoundedDirective,
    TextColorDirective,
    AlignDirective
  ]
})
export class UtilitiesModule { }
