import { Component } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css',
})
export class UserAddComponent {
  constructor(private userService: UserService, private router: Router) {}

  addUser(user: User) {
    this.userService.addUser(user);
    this.router.navigate(['/dashboard']);
  }
}
