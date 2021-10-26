import { SearchService } from 'src/app/search.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
   
  results: any[]=[];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getPassedResults().subscribe(
      (response: any) => {
        this.results = response.result;
        console.log('result', this.results );
      },
      (error: any) =>  {
        console.log('error', error);
      }
    )
  }



}
