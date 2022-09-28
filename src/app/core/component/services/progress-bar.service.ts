import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  public show$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  set setShowProgressBar(show: boolean){
    this.show$.next(show);
  }

  get getShowProgressBar() : Observable<boolean> {
    return this.show$.asObservable();
  }


}
