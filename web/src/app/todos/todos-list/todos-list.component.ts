import { Component, OnInit } from '@angular/core';import { Router }  from '@angular/router';import { TodosService, Todo } from '../shared';import { Wakanda } from '../../wakanda.service';@Component({  selector: 'app-todos-list',  providers: [Wakanda, TodosService],  templateUrl: './todos-list.component.html',  styleUrls: ['./todos-list.component.css']})export class TodosListComponent implements OnInit {	private todos: Todo[] = []; ////	private todos = []; //	newTodoText: string ="";	  constructor(  	private router: Router, 	private todosService: TodosService, 	public wakanda:Wakanda  	) { }  ngOnInit() {   this.todos = this.todosService.getTodos();  }  showTodo(id) {       this.router.navigate(['/todos', {outlets: {'todoDetail': [id]}}]);  }    newTodo() {  	this.todosService.newTodo(this.newTodoText);  	this.newTodoText = ""; //clear the input   }  deleteTodo(id){  	this.todosService.deleteTodo(id);   // this.todos=this.todosService.buildTodos();  }}