import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  
  data?: any[];
  id?:any;

  constructor(public dataS: DataService) { }

  ngOnInit() {

    this.getPosts();
  }

  getPosts() {
    this.dataS.getPosts().subscribe(
      (data: any) => {this.data = data; console.log(data)}
    )
  }

  
 



}
