import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCourseComponent } from './view-course/view-course.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
const routes: Routes = [{path:"",component:ViewCourseComponent},
{path:"addcourse",component:AddcourseComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
