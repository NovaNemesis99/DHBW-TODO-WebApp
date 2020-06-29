import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './app/components/main/main.component';
import { TasklistComponent } from './app/components/tasklist/tasklist.component';
import { TaskComponent } from './app/components/task/task.component';
import { TasklistDetailComponent } from './app/components/tasklist-detail/tasklist-detail.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'tasklist', component: TasklistComponent },
  { path: 'task', component: TaskComponent },
  { path: 'specificTasklist', component: TasklistDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
