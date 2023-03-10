import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './model/role';
import { User } from './model/user';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bookstore';


  currentUser :User = new User();
  constructor(private authenticationService: AuthenticationService,private router:Router){
    this.authenticationService.currentUser.subscribe(data =>{
      this.currentUser= data;
    });
  }

  isAdmin(){
    return this.currentUser?.roles ===Role.ADMIN;
  }

  logOut(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
