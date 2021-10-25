import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteCardComponent } from './components/quote-card/quote-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    QuoteComponent,
    QuoteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
