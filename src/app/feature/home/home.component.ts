import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/shared/services/search.service';
export type EditorType = 'query';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  query: FormControl = new FormControl();
  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(){
    if(this.query.value.length > 0){
      this._searchService.Search(this.query.value).subscribe(resp => {
        if(resp.animes.length > 0) this._searchService.setAnimes = resp.animes;
      });
    }
  }

}
