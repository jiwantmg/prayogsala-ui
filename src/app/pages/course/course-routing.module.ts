import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CourseByUserComponent } from "./components/course-by-users/course-by-user.component";
import { CourseDetailComponent } from "./components/course-detail/course-detail.component";

const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',        
        component: CourseByUserComponent
    },
    {
        path: ":id",
        component: CourseDetailComponent        
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class CourseRoutingModule
{

}