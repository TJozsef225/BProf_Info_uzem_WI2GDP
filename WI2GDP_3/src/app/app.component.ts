import { Component, Input } from '@angular/core';
import { Student, students} from './students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  school = "MSZC Kandó Kálmán Szakközépiskola"
  description = "Infosok képzése magas szinten.";
  students = students;
  newStudent!: Student;
  title: any;
  isFormVisible = false;

  

  constructor() {
    this.createStudent();
  }

  createStudent() {
    this.newStudent = {
      id: 0,
      name: '',
      age: 0,
      momName: '',
      isSNI: false
    };
  }

  deleteStudent(students: Student) {
    const index = this.students.indexOf(students);
    if(index > -1) 
    {
      this.students.splice(index, 1);
    }
  }

  showForm() {
    this.isFormVisible =true;
  }

  saveStudents() {
    this.students.push(this.newStudent);
    this.createStudent();
    this.isFormVisible = false;
  }
}
