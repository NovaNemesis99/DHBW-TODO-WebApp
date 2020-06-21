import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromTodoReducers from './app/store/todo.reducer';
import { TasklistEffects } from './app/store/todo.effects'

import { AppComponent } from './app/components/app-component/app.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { NavigationComponent } from './app/components/navigation/navigation.component';
import { TasklistComponent } from './app/components/tasklist/tasklist.component';
import { MainComponent } from './app/components/main/main.component';
import { TaskComponent } from './app/components/task/task.component';
import { TaskEditComponent } from './app/components/task-edit/task-edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    TasklistComponent,
    TaskComponent,
    TaskEditComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({
      tasklist: fromTodoReducers.TasklistReducer
    }),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([TasklistEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
