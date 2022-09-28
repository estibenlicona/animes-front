import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/shared/interfaces/anime.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('model') model!: Anime;
  constructor() { }

  ngOnInit(): void {
  }

}
