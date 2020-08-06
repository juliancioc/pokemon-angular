import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.pokemontcg.io/v1/cards';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  getCards() {
    return this.http.get(this.apiUrl);
  }

  getCard(id: number): Observable<Card> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Card>(url).pipe(
      catchError(this.handleError<Card>(`getCard id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
