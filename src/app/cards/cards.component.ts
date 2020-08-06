import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Card } from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: Card[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getCards()
    .subscribe(response => {
      this.cards = Object.values(response)[0];
    });
  }

}
