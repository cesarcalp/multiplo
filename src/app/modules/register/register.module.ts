import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterChoicePageComponent } from './pages/register-choice-page/register-choice-page.component';
import { RegisterJuridicaPageComponent } from './pages/register-juridica-page/register-juridica-page.component';
import { RegisterNaturalPageComponent } from './pages/register-natural-page/register-natural-page.component';
import { RegisterSelectPageComponent } from './pages/register-select-page/register-select-page.component';
import { ValidaEmailPageComponent } from './pages/valida-email-page/valida-email-page.component';



@NgModule({
  declarations: [
    RegisterChoicePageComponent,
    RegisterJuridicaPageComponent,
    RegisterNaturalPageComponent,
    RegisterSelectPageComponent,
    ValidaEmailPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
