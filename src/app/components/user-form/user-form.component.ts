import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  @Input() id?: number;
  @Output() formSubmitted = new EventEmitter();

  userForm: FormGroup = new FormGroup('');

  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log('id', this.id);
    if (this.id) {
      const user = this.userService.getUser(this.id);
      this.userForm = new FormGroup({
        name: new FormControl(user?.name),
        userName: new FormControl(user?.username),
        email: new FormControl(user?.email),
        street: new FormControl(user?.address?.street),
        city: new FormControl(user?.address?.city),
      });
    } else {
      this.userForm = new FormGroup({
        name: new FormControl(''),
        userName: new FormControl(''),
        email: new FormControl(''),
        street: new FormControl(''),
        city: new FormControl(''),
      });
    }
  }

  onSubmit() {
    const user: User = {
      id: 0,
      name: this.userForm.controls['name'].value,
      username: this.userForm.controls['userName'].value,
      email: this.userForm.controls['email'].value,
      address: {
        street: this.userForm.controls['street'].value,
        city: this.userForm.controls['city'].value,
      },
    };
    this.formSubmitted.emit(user);
  }
}
