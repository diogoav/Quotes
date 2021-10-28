import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss']
})
export class QuoteCardComponent implements OnInit {
  
  @Input() posts?: any[];

  constructor(){ }

  ngOnInit() {

   
  }

  

}
