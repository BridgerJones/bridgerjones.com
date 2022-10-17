import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, take } from 'rxjs';
import { Experience } from 'src/classes/Experience';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  experiences: Observable<any>;

  constructor(private firestore: AngularFirestore) {
    this.experiences = this.firestore.collection('experiences').valueChanges();
  }

  ngOnInit(): void {}

  openEmail() {
    window.open('mailto:bridgerjones15+bridgerjones.com@gmail.com', '_self');
  }


}
