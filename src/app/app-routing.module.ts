import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./courses/courses.module').then((module) => module.CoursesModule),
  }, {
    path: 'authorization',
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
  }, {
    path: 'error-page/404',
    loadChildren: () => import('./shared/shared.module').then((module) => module.SharedModule)
  }, {
    path: '**',
    redirectTo: '/error-page/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
