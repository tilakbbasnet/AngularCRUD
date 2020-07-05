import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : User;
  message : any;
  
  constructor(private userService: UserService,
    private router : Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
  this.userService.getAllUsers().subscribe((data) => this.users=data);
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(
      (data) => {this.message = data, this.loadUsers()});
  }

  userDetail(id : number) {
    this.router.navigate(['userdetail',id]);
  }

  updateUser(id : number) {
    this.router.navigate(['updateuser',id]);
  }

}
