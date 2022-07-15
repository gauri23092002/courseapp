import { Component, OnInit } from '@angular/core';
import { ViewserveService } from '../viewserve.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

constructor(private api:ViewserveService) { 
  api.viewServe().subscribe(
    (Response)=>{
      this.data=Response
    }
  )
}

ngOnInit(): void {
}
data:any=[
  
]


}