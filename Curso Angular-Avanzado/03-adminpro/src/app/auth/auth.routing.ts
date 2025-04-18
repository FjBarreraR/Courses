import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProgressComponent } from '../pages/progress/progress.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {path: 'progress', component: ProgressComponent},
      {path: 'login', component: LoginComponent},

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
export class AuthRoutingModule {}
