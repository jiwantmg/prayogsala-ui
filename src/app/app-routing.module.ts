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
                redirectTo: 'course'
              },
              {
                path: 'login',
                component: LoginComponent                
              },
              {
                path: 'register',
                component: RegisterComponent,
                data: {
                  isPublic: true
                }
              },
              {
                path: 'course',
                loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
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