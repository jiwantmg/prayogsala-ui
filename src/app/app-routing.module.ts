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
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
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
                path: 'category',
                loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
              },
              {
                path: 'pages',
                loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
                canActivate: [AuthGuard]               
              },
              {
                path: 'search',
                loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
              }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}