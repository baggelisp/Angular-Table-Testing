import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEntry } from './home.component';
import * as randomWords from 'random-words';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  data$: BehaviorSubject<IEntry[]>;

  constructor() {
    this.data$ = new BehaviorSubject([]);
  }

  generateData() {
    let data: IEntry[] = [];
    for (let i = 0; i < 10000; i++) {
      data.push({
        name: randomWords({exactly: 3, join: ' '}),
        description: randomWords({exactly: 100, join: ' '}),
        status: ['new', 'submitted', 'failed'][Math.floor(Math.random() * 3)]
      });
    }
    this.data$.next(data)
  }
}
