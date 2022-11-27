import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { sectionsComponents } from './sections';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    sectionsComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
