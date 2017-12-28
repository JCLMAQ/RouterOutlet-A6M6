import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { ItemsService, Item } from '../shared';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
	items: Item[] = [];
  constructor(
  	private router: Router,
 	private service: ItemsService
  	) { }

  ngOnInit() {
    this.items = this.service.getItems();
  }

  showItem(id) {
    this.router.navigate(['/items', {outlets: {'itemDetail': [id]}}]);
  }
}
