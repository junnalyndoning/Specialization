import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersRequestComponent } from './suppliers-request/suppliers-request.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostSuppliesComponent } from './post-supplies/post-supplies.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {path: 'suppliersrequest', component: SuppliersRequestComponent},
  {path: 'admindashboard', component: AdminDashboardComponent},
  {path: 'postsupplies', component: PostSuppliesComponent},
  {path: 'orders', component: OrdersComponent},
  { path: '',   redirectTo: '/admindashboard', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [ AdminDashboardComponent, SuppliersRequestComponent, PostSuppliesComponent, OrdersComponent ]


