import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../data.service';
import { Card } from '../card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card: Object;
  attacks: Array<string>;
  resistances: Array<string>;
  weaknesses: Array<string>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getCard(id)
      .subscribe(data => {
        this.card = Object.values(data)[0];
        this.attacks = Object.values(data)[0].attacks
        this.resistances = Object.values(data)[0].resistances
        this.weaknesses = Object.values(data)[0].weaknesses

      });
  }
}
