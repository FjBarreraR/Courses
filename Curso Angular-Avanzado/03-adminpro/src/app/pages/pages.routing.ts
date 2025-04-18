import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from '../auth/register/register.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes: Routes = [
    { path: 'dashboard', component:PagesComponent,
        children: [
          {path: '', component: DashboardComponent},
          {path: 'register', component: RegisterComponent},
          {path: 'grafica1', component: Grafica1Component},
        ]
      },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
