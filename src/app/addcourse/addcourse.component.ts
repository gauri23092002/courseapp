import { Component, OnInit } from '@angular/core';
import { ViewserveService } from '../viewserve.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
course={
  courseTitle:"",
  courseDescription:"",
  courseDate:"",
  courseVenue:"",
  courseDuration:""

}
  constructor(private service:ViewserveService) { }

  ngOnInit(): void {
  }
addCourse(){
  this.service.addCourse(this.course)
  .subscribe((data)=>{
  console.log(this.course)

})
alert("Success");
}
}