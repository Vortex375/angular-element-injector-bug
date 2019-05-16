import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Example1Directive } from './example1.directive';
import { Example2Directive } from './example2.directive';

@NgModule({
  declarations: [
    AppComponent,
    Example1Directive,
    Example2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
