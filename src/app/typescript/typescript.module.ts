import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TypeScriptComponent } from './typescript.component';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule, HomeModule
  ],
  providers: [],
  bootstrap: [TypeScriptComponent]
})
export class AppModule { }

