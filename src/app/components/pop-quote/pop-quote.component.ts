
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-pop-quote',
  templateUrl: './pop-quote.component.html',
  styleUrls: ['./pop-quote.component.scss']
})
export class PopQuoteComponent implements OnInit {
  
  id:any;
  data: any;

  constructor(private route:ActivatedRoute, private dataS: DataService) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.getOne();
  }

  getOne() {
    this.dataS.getOne(this.id).subscribe((data: any) => {this.data = data; console.log(data)})
  }

  
  

}
