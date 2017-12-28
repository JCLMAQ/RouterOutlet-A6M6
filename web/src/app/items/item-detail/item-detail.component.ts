import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService, Item } from '../shared';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  currentItem: Item;

  constructor(
  	private route: ActivatedRoute,
    private service: ItemsService
  	) { }

  ngOnInit() {
	this.route.params.subscribe((params: {id: string}) => {
     this.currentItem = this.service.getItemByID(params.id);
      console.log('currentItem '+ params.id + ' '+ this.currentItem);
	});
  }

}
