import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [

  {
    path: "home", component: HomeComponent,
  },
  
  {
    path: "", component: HomeComponent,
  },
  {
    path: "details", component: DetailsComponent,
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
