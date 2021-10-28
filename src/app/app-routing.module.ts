import { HomeComponent } from './components/home/home.component';
import { QuoteComponent } from './components/quote/quote.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopQuoteComponent } from './components/pop-quote/pop-quote.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'quote', component: QuoteComponent },
  {path: 'quote/popQuote/:id', component: PopQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
