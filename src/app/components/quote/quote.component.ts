import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  @Input() posts?: any[];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.getPosts();
    
  }

  getPosts() {
    this.data.getPosts().subscribe((data: any) => (this.posts = data));
  }
}
