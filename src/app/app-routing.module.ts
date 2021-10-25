import { QuoteComponent } from './components/quote/quote.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopQuoteComponent } from './components/pop-quote/pop-quote.component';

const routes: Routes = [
  {path: 'quote', component: QuoteComponent },
  {path: 'quote/popQuote', component: PopQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
