import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CourseByTeachersComponent } from "./components/course-by-teachers/course-by-teachers.component";
import { CourseDetailComponent } from "./components/course-detail/course-detail.component";

const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',        
        component: CourseByTeachersComponent
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