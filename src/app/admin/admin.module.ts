import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing-module';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ExperiencesListComponent } from './experiences-list/experiences-list.component';
import { ExperienceEditorComponent } from './experience-editor/experience-editor.component';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [
    AdminMainComponent,
    AuthComponent,
    ExperiencesListComponent,
    ExperienceEditorComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    StyleClassModule,
    MenuModule,
    RippleModule,
    ButtonModule,
    DividerModule,
    ImageModule,
  ]
})
export class AdminModule { }
