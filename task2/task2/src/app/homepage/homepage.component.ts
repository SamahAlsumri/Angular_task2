import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  details:string ='Details';
  studentName:string ='';

  onStudentNameChange(event:Event):void{
    this.studentName = (event.target as HTMLInputElement).value;
  }

}




