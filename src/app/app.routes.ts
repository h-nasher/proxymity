import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-user', component: UserAddComponent },
  { path: 'edit-user/:id', component: UserEditComponent },
];
