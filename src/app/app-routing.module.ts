import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AlwaysAuthGuardGuard } from './always-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  }, {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoModule',
    canActivate: [AlwaysAuthGuardGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AlwaysAuthGuardGuard],
})
export class AppRoutingModule {
}
