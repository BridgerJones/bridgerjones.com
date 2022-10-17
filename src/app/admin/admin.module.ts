import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing-module';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';



@NgModule({
  declarations: [
    AdminMainComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CheckboxModule,
    StyleClassModule
  ]
})
export class AdminModule { }
