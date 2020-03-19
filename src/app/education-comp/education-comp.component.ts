import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-comp',
  templateUrl: './education-comp.component.html',
  styleUrls: ['./education-comp.component.css']
})
export class EducationCompComponent implements OnInit {
  title:string = 'Education';
  schools:any[] = [
    {
      name: 'PEP',
      degree: 'High School Diploma',
      year: '2013-2015'
    },
    {
      name: 'MAX',
      degree: 'Cert cert',
      year: '2020-2020'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
