import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddempComponent } from './addemp/addemp.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: "", redirectTo: "/login", pathMatch: 'full'
  },

  {
    path: "login", component: LoginComponent
  },
  {
    path: "home", loadChildren: () => import("./dashboard/dashboard.module")
      .then(m => m.DashboardModule)
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: "details/:id", component: DetailsComponent
  },
  {
    path: "addemp", component: AddempComponent,
  },
  {
    path: "", component: LoginComponent
  },

  {
    path: '**', component: NotfoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
