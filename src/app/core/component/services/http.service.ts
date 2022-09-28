import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?: HttpHeaders;
  params?: HttpParams;
}
@Injectable()
export class HttpService {
  opts!: Options;

  constructor(protected http: HttpClient) {

    this.opts = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  }

  public doGet<T>(serviceUrl: string): Observable<T> {
    return this.http.get<T>(serviceUrl, this.opts);
  }
}

