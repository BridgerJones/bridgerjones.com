import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.scss']
})
export class ExperiencesListComponent implements OnInit {

  experiences: Observable<any>;

  constructor(private firestore: AngularFirestore) {
    this.experiences = this.firestore.collection('experiences').valueChanges();
  }

  ngOnInit(): void {
  }

}
