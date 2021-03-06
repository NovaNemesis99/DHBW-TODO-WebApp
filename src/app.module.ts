import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromTodoReducers from './app/store/todo.reducer';
import { TaskEffects, TasklistEffects } from './app/store/todo.effects'

import { AppComponent } from './app/components/app-component/app.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { NavigationComponent } from './app/components/navigation/navigation.component';
import { TasklistComponent } from './app/components/tasklist/tasklist.component';
import { MainComponent } from './app/components/main/main.component';
import { TaskComponent } from './app/components/task/task.component';
import { TaskEditComponent } from './app/components/task-edit/task-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { TasklistDetailComponent } from './app/components/tasklist-detail/tasklist-detail.component';
import { AddTaskComponent } from './app/components/add-task/add-task.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    TasklistComponent,
    TaskComponent,
    TaskEditComponent,
    MainComponent,
    TasklistDetailComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot({
      task: fromTodoReducers.TaskReducer, tasklist: fromTodoReducers.TasklistReducer
    }),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([TaskEffects, TasklistEffects])
  ],
  entryComponents: [AddTaskComponent],
  providers: [{
    provide: MAT_DATE_LOCALE, useValue: 'de-DE'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
