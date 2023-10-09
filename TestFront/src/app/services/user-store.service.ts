import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private name$ = new BehaviorSubject<string>('');
  private isAdmin$ = new BehaviorSubject<string>('');


  constructor() { }

  // for name
  public getNameFromStore(){
    return this.name$.asObservable();
  }
  public setNameFromStore(name: string){
    this.name$.next(name)
  }

  // for isAdmin
  public getIsAdminFromStore(){
    return this.isAdmin$.asObservable();
  }
  public setIsAdminFromStore(isAdmin: string){
    this.isAdmin$.next(isAdmin)
  }
}
