import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent {
  @Input() id(id?: number) {}

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  editUser(user: User) {
    this.userService.editUser(user);
  }
}
