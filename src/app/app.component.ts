import { DataService } from './data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  bg: string = 'https://source.unsplash.com/random/1920x1080';

  dateTime?: Date;

  constructor(public router: Router) {}


  ngOnInit() {
    this.dateTime = new Date();
  }

  async changeBg() {
   const result = await fetch('https://source.unsplash.com/random/1920x1080', {
    method:'HEAD'
    })

    

    this.bg = result.url;
  }
}
