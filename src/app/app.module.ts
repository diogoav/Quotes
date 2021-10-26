import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteCardComponent } from './components/quote-card/quote-card.component';
import { PopQuoteComponent } from './components/pop-quote/pop-quote.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    QuoteComponent,
    QuoteCardComponent,
    PopQuoteComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
