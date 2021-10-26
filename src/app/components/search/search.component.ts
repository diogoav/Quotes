import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  data?: any;
  id?: any;

  searchTerm: any ;

  constructor(public searchService : SearchService ) {}

  ngOnInit() {
    this.id = '';
   
  }

 

 

  searchWeb():void {
    if(this.searchTerm === '') return;

    this.searchService.getResult(this.searchTerm).subscribe((data:any) => {
      this.data = data;
      console.log('data', data);
      console.log(this.data);
    },
    (error: any) =>  {
      console.log('error', error);
    } )
    console.log('Search Term', this.searchTerm);
  }

}
