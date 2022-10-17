import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AuthComponent } from './auth/auth.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/sudo']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['/sudo/admin']);

const routes: Routes = [
  {path: '', component: AuthComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInToItems}},
  {path: 'admin', component: AdminMainComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
