import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openEmail() {
    window.open('mailto:bridgerjones15+bridgerjones.com@gmail.com', '_self');
  }

}
