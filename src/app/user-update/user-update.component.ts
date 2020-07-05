import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user : User;
  id : number;
  message : any;

  constructor(private router : Router,
    private activatedRoute : ActivatedRoute,
    private userService : UserService) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.getUserDetail(this.id).subscribe(
      (data) => this.user = data);
  }

  updateUserInfo(){
    this.userService.updateUserInfo(this.id, this.user).subscribe(
      (data) => this.message = data);
    this.goToUserList();
  }

  onFormSubmit() {
    this.updateUserInfo();
  }

  goToUserList() {
    this.router.navigate(['users']);
  }

}
