import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersRequestComponent } from './suppliers-request/suppliers-request.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostSuppliesComponent } from './post-supplies/post-supplies.component';
import { OrdersComponent } from './orders/orders.component';
import { SalesComponent } from './sales/sales.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: 'suppliersrequest', component: SuppliersRequestComponent},
  {path: 'admindashboard', component: AdminDashboardComponent},
  {path: 'postsupplies', component: PostSuppliesComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'logout', component: LogoutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
