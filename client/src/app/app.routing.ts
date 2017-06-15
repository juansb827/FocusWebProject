import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { LoginComponent } from './authentication/login/login.component'; 
import { AuthGuard } from './authentication/authentication.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ] // so that the components in the companion module have access to Router declarables, such as RouterLink and RouterOutlet.
})
export class AppRoutingModule {}