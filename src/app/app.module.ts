import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { LikeComponent } from './like/like.component';
import { DisklikeComponent } from './disklike/disklike.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteListComponent,
    DateCountPipe,
    QuoteFormComponent,
    LikeComponent,
    DisklikeComponent
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
