import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_DONE } from './reducers/todo.reducer';

import { Wakanda } from '../wakanda.service';
import {AlligatorTodo} from './reducers/alligatorTodo.model';

@Component({
  selector: 'alligatorreducer',
  providers: [Wakanda],
  templateUrl: './alligatorreducer.component.html',
  styles: [
    `.done { text-decoration: line-through; color: salmon; }`
    ]
})

export class AlligatorreducerComponent implements OnInit {
  todos$: Observable<any>;
  todo: string;
  // Add by JCM
  private todos: AlligatorTodo[]=[];
  
  editing = false;
  indexToEdit: number | null;

  constructor(private store: Store<any>, public wakanda: Wakanda) {}

  ngOnInit() {
    this.todos$ = this.store.select('todoReducer');
  }

  addTodo(value) {
    this.store.dispatch({ type: ADD_TODO, payload: { value, done: false } });
    this.todo = '';
  }
  deleteTodo(index) {
    this.store.dispatch({ type: DELETE_TODO, payload: { index } });
  }

  editTodo(todo, index) {
    this.editing = true;
    this.todo = todo.value;
    this.indexToEdit = index;
  }

  cancelEdit() {
    this.editing = false;
    this.todo = '';
    this.indexToEdit = null;
  }

  updateTodo(updatedTodo) {
    this.store.dispatch({ type: UPDATE_TODO, payload: { index: this.indexToEdit, newValue: updatedTodo } });
    this.todo = '';
    this.indexToEdit = null;
    this.editing = false;
  }

  toggleDone(todo, index) {
    this.store.dispatch({ type: TOGGLE_DONE, payload: { index, done: todo.done } });
  }

  
}