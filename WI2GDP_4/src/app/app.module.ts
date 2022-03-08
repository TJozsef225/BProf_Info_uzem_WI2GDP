import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotersComponent } from './voters/voters.component';
import { JokeListComponent } from './joke-list/joke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VotersComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
