import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./core/auth/components/login/login.component";
import { RegisterComponent } from "./core/auth/components/register/register.component";
import { AuthGuard } from "./core/auth/_guard/auth.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'pages'
              },
              {
                path: 'login',
                component: LoginComponent
              },
              {
                path: 'register',
                component: RegisterComponent
              },
              {
                path: 'pages',
                loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
                canActivate: [AuthGuard]
              }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}