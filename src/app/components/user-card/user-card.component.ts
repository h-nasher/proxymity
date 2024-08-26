import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input({ required: true }) user!: User;

  constructor(private userService: UserService) {}

  deleteUser() {
    this.userService.deleteUser(this.user.id);
  }
}
