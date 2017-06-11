import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 

const appRoutes: Routes = [
    
    { path: 'login', component: LoginComponent },    

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ] // so that the components in the companion module have access to Router declarables, such as RouterLink and RouterOutlet.
})
export class AppRoutingModule {}