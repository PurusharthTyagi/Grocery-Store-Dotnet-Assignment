import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  private userPayload:any;

  constructor(private http: HttpClient) { 
    this.userPayload = this.loadCurrentUser();
  }

  baseServerUrl = "https://localhost:7044";

  jwtHelperService = new JwtHelperService();

  registerUser(user: Array<any>) {
    return this.http.post(this.baseServerUrl + "/api/User/CreateUser", {
      Name: user[0],
      Email: user[1],
      Mobile: user[2],
      Pwd: user[3]
    }, { responseType: 'text' });
  };

  loginUser(loginInfo: Array<any>) {
    return this.http.post(this.baseServerUrl + "/api/User/LoginUser",
      {
        Email: loginInfo[0],
        Pwd: loginInfo[1]
      }, {
      responseType: 'text',
    });
  };

  setToken(token: string) {
    localStorage.setItem("access_token", token);
    // this.loadCurrentUser()
  };

  loadCurrentUser() {
    const token = localStorage.getItem("access_token");
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;
    // const data = userInfo ? {
    //   id: userInfo.id,
    //   name: userInfo.name,
    //   email: userInfo.email,
    //   mobile: userInfo.mobile,
    //   isAdmin : userInfo.isAdmin,
    //   memberSince: userInfo.memberSince
    // } : null;

    // this.currentUser.next(data);
    return userInfo;
  }

  getNameFromToken(){
    if(this.userPayload){
      return this.userPayload.name;
    }
  }

  getIsAdminFromToken(){
    if(this.userPayload){
      return this.userPayload.isAdmin;
    }
  }




}
