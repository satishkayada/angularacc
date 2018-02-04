
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* My Component */
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountsComponent } from './accounts/accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: AccountDetailComponent },
  { path: 'Accounts', component:AccountsComponent  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
