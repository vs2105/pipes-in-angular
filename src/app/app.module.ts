import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { FilesizePipe } from './shared/pipes/filesize.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPlayersPipe } from './shared/pipes/filter-players.pipe';




@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FilesizePipe,
    FilterPlayersPipe,

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

