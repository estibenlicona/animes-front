import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpService } from "src/app/core/component/services/http.service";
import { environment } from "src/environments/environment";
import { Anime } from "../interfaces/anime.interface";
import { QueryResult } from "../interfaces/query.interface";

@Injectable({
  providedIn: 'root'
})
export class SearchService extends HttpService {

  public animes$: BehaviorSubject<Array<Anime>> = new BehaviorSubject<Array<Anime>>([]);

  constructor(protected override http: HttpClient) { super(http); }

  public Search(q: string) : Observable<QueryResult> {
    const endPoint = `${environment.endpoint}/api/anime?query=${q}`;
    return this.doGet(endPoint);
  }

  set setAnimes(animes: Array<Anime>){
    this.animes$.next(animes);
  }

  get getAnimes() : Observable<Array<Anime>> {
    return this.animes$.asObservable();
  }


}
