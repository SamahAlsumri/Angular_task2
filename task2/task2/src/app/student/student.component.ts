import { Component, OnInit } from '@angular/core';

interface Student {
  Name: string;
  Email: string;
  Marks: number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent{
Marks: number=0;

  students: any[] = [
    { Name: 'sara alsumari', Email: 'sara alsumari@gmail.com', Marks: 90 },
    { Name: 'Mariya alhatmi', Email: 'Mariya alhatmi@gmail.com', Marks: 55 },
    { Name: 'Manar almamari', Email: 'Manar almamari@gmail.com', Marks: 67 },
    { Name: 'Marwa alfarsi', Email: 'Marwa alfarsi@gmail.com', Marks: 22 },
    { Name: 'Maysa alharthi', Email: 'Maysa alharthi@gmail.com', Marks: 77 },
    { Name: 'Aysha Alblooshi', Email: 'Aysha Alblooshi@gmail.com', Marks: 80 },
    { Name: 'sumaiya alkhatri', Email: 'sumaiya alkhatri@gmail.com', Marks: 41 },
    { Name: 'Afnan alwardi', Email: 'Afnan alwardi@gmail.com', Marks: 97 },
    { Name: 'Nada alhatmi', Email: 'Nada alhatmi@gmail.com', Marks: 40 },
    { Name: 'Shaima almamri', Email: 'Shaima almamri@gmail.com', Marks: 90 },
  ];

  

  getMarkColor(Marks: number): string{
return Marks < 50 ? 'red-text': 'green-text';
  }

  getPassFailStatus(Marks: number): string{
    return Marks > 50 ? 'PASS' : 'FAIL';
  }

  getRowStyles(student: Student): any {
    return {
      'background-color': student.Marks < 50 ? 'rgb(255, 0, 0,0.5)' : 'rgb(51, 204, 51,0.5)'
    };
  }

}


