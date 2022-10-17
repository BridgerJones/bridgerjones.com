import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HomeRoutingModule } from './home-routing-module';
import { RippleModule } from 'primeng/ripple'
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StyleClassModule,
    ButtonModule,
  ]
})
export class HomeModule { }
