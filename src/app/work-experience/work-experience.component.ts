import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  title:string = 'Work Experience';
  workExperiences:any[] = [
    {
      company: 'Chick-fil-A',
      time: '2013-2016'
    },
    {
      company: 'Target',
      time: '2017-2017'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
