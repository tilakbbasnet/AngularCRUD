import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user : User;
  id : number;

  constructor( private userService : UserService,
    private router :  Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.getUserDetail(this.id).subscribe(
      (data) => this.user = data);
  }

   listUsers() {
     this.router.navigate(['users']);
   }

}
