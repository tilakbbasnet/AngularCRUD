import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private baseUrl = 'http://localhost:8080/users';
  constructor(private http:HttpClient) { }

public doRegistration(user){
return this.http.post(`${this.baseUrl}/register`,user,{responseType:'text' as 'json'});
}

public getAllUsers() {
  return this.http.get(`${this.baseUrl}`);
}

public deleteUser(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' as 'json'});
}

public getUserDetail(id : number) {
  return this.http.get(`${this.baseUrl}/${id}`);
}

public updateUserInfo(id : number, user : User) {
  return this.http.put(`${this.baseUrl}/${id}`, user, {responseType: 'text' as 'json'});
}
}
