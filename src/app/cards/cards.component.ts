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
  name: string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getCards()
      .subscribe(response => {
        const sortCards = Object.values(response)[0]

        sortCards.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }

          return 0;
        })

        this.cards = sortCards;
      });
  }

  Search() {
    if (this.name != "") {
      this.cards = this.cards.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    } else if (this.name == "") {
      this.ngOnInit();
    }
  }
}
