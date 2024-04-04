import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreasuresListComponent } from './treasures-list/treasures-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TreasuresListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
