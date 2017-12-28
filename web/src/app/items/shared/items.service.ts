import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Item } from './';

@Injectable()
export class ItemsService {
	
  private items: Item[] = [
    {id: 21, name: 'Todd Motto'},
    {id: 31, name: 'Gleb Bahmutov'},
    {id: 41, name: 'Jeff Whelpley'},
    {id: 5, name: 'Pascal Precht'},
    {id: 6, name: 'Victor Savkin'},
    {id: 1, name: 'Luke Ruebbelke'},
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  getItemByID(id) {
  	console.log('Item '+ id + ' selected');
    return this.items.find(item => item.id === Number(id));
  }
}
