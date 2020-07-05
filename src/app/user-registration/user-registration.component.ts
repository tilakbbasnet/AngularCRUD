import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

user: User = new User("","","","","");
message: any;
  constructor(private service: UserService) { }

  ngOnInit() {
  }

public addUser(){
 this.service.doRegistration(this.user).subscribe((data) => this.message=data);
}
}
