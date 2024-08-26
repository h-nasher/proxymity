import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  public users: User[] = [];

  private data;

  constructor(private http: HttpClient) {
    this.data = this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((result) => (this.users = result));
  }

  getUser(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: User) {
    if (user.id === 0) {
      user.id = this.getNextId();
    }
    this.users.push(user);
  }

  editUser(user: User) {
    const index = this.users.findIndex((x) => x.id === user.id);
    this.users[index] = user;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  private getNextId(): number {
    return Math.max(...this.users.map((user) => user.id)) + 1;
  }

  ngOnDestroy() {
    this.data.unsubscribe();
  }
}
