import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
//import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';

import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';
import { BioComponent } from './speakers/bio/bio.component';
import {SpeakersService} from './speakers/shared/speakers.service';

import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import {ItemsService} from './items/shared/items.service';

import { TodosComponent } from './todos/todos.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodoDetailComponent } from './todos/todo-detail/todo-detail.component';
import {TodosService} from './todos/shared/todos.service';

import { AlligatorreducerComponent } from './alligatorreducer/alligatorreducer.component';
import { todoReducer } from './alligatorreducer/reducers/todo.reducer';

import { TableComponent } from './table/table.component';
import { TablewithpaginationComponent } from './tablewithpagination/tablewithpagination.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpeakersComponent, SpeakersListComponent, BioComponent,
    ItemsComponent, ItemsListComponent, ItemDetailComponent, 
    TodosComponent, TodosListComponent, TodoDetailComponent, 
    AlligatorreducerComponent, 
    TableComponent, 
    TablewithpaginationComponent, 
    MyFormComponent, 
    DialogDemoComponent, 
    MyDialogComponent, 
    TooltipDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    StoreModule.forRoot({ todoReducer }),
  ],
  providers: [SpeakersService, ItemsService, TodosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
