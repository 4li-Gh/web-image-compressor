import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import {FileDropComponent} from "./components/file-drop/file-drop.component";
import {ImageItemComponent} from "./components/image-item/image-item.component";

@NgModule({
  declarations: [
    AppComponent,
    FileDropComponent,
    ImageItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
