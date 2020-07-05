import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
{path:"", redirectTo:"user",pathMatch:"full"},
{path:"register", component:UserRegistrationComponent},
{path:"users", component: UserListComponent},
{path:"updateuser/:id", component:UserUpdateComponent},
{path:"userdetail/:id", component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
