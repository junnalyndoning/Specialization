import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SuppliersRequestComponent } from './suppliers-request/suppliers-request.component';
import { OrdersComponent } from './orders/orders.component';
import { PostSuppliesComponent } from './post-supplies/post-supplies.component';
import { SalesComponent } from './sales/sales.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AdminDashboardComponent,
    SuppliersRequestComponent,
    OrdersComponent,
    PostSuppliesComponent,
    SalesComponent,
    LogoutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
