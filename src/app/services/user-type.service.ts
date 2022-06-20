import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {
  //  these service to allow the user make refresh and keep his type
  userType: string = 'SiteEngineers';
  setUserType(user: string) {
    this.userType = user;
    localStorage.setItem('usertype', this.userType);
  }

  getUserType() :string{
    return localStorage.getItem('usertype')||'SiteEngineers';
  }
}
