import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/classes/Experience';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  experience : Experience;
  experiences : Experience[] = [];

  constructor() { 
    this.experience = new Experience(
      'Google',
      'Software Engineer',
      new Date('2019-05-01'),
      new Date('2020-08-01'),
      'Worked on the Google Cloud Platform team',
      'Mountain View, CA',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
      [
        'Worked on the Google Cloud Platform team',
        'Worked on the Google Cloud Platform team',
        'Worked on the Google Cloud Platform team',
      ]);

      this.experiences.push(this.experience);

  }

  ngOnInit(): void {
  }


  openEmail() {
    window.open('mailto:bridgerjones15+bridgerjones.com@gmail.com', '_self');
  }

}
