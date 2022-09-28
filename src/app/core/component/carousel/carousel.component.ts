import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/shared/interfaces/anime.interface';
import { SearchService } from 'src/app/shared/services/search.service';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  animes$: Observable<Array<Anime>> = new Observable<Array<Anime>>();

  constructor(private _searchService: SearchService) {}

  ngOnInit(): void {
    this.animes$ = this._searchService.getAnimes;
  }

  trackAnimes(index: number, anime: Anime){
    return anime.id;
  }
}
