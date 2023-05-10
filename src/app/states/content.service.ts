import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private content$ = new BehaviorSubject<any>({});
  selectedContent$ = this.content$.asObservable();


  constructor() { }

  setContent(content: any) {
    this.content$.next(content);
  }
}
