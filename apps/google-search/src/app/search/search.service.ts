import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSuggestionsfor(query: string): Observable<any> {
    return this.http.get(environment.backend + query);
  }

  navigateTo(url: string) {
    window.location.href = url;
  }

}
