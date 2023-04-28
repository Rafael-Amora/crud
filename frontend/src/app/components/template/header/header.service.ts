import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-date-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _HeaderData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get HeaderData(): HeaderData {
    return this._HeaderData.value
  }
  

  set HeaderData(headerData: HeaderData) {
    this._HeaderData.next(headerData)
  }

}
