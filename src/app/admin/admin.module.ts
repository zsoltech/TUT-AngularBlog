import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminAuthGuard } from './admin.authguard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: 'users',
        component: UserComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    UserComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AdminAuthGuard
  ]
})
export class AdminModule { }
