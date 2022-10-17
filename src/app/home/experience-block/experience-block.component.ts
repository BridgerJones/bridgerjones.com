import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/classes/Experience';

@Component({
  selector: 'app-experience-block',
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss']
})
export class ExperienceBlockComponent implements OnInit {

  // contains the experience object passed in from the parent component
  @Input() experience : Experience | undefined;

  // controls the display of the experience block
  @Input() imageLeft : boolean = true;

  // index of experience block
  @Input() index : number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  convertFireDateToDate(date : any) : Date {
    return new Date(date.seconds * 1000);
  }

}
