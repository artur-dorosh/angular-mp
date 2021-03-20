import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
  exports: [LoginComponent]
})
export class AuthModule { }
