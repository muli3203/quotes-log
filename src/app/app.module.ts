import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteListComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
