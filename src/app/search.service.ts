import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url:any ;
  searchResults = new Subject();

  constructor(private http: HttpClient) { }

  getResult(searchTerm:number): Observable<any>{
    return this.url = this.http.get(`https://jsonplaceholder.typicode.com/posts/${searchTerm}`)
  }
  
  // aqui junto os resultados
  passResults(results:any):void {
    this.searchResults.next(results);
  }
  // aqui envio os resultados para quem utilizar o serviço
  getPassedResults(){
    return this.searchResults.asObservable();
  }

}
