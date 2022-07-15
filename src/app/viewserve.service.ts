import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { ViewCourseComponent } from './view-course/view-course.component';

@Injectable({
  providedIn: 'root'
})
export class ViewserveService {

  constructor(private http:HttpClient) { }
    viewServe=()=>
    {
      return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses");
    }
    addCourse=(course:any)=>
    {
      return this.http.post<any>("https://mylinkurcodesapp.herokuapp.com/addcourse",course);
    }
}
