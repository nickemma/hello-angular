import { Component, Input } from '@angular/core';
import { User } from '../data';

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
  <div>
    <h2>{{user.title}}</h2>
    <img src="{{user.image}}" alt="{{user.image}}" />
    <p>{{ user.description }}</p>
    <p>{{ user.price }} {{ user.category }}</p>
  </div>
   
  `,
  styles: ``,
})
export class UserInfoComponent {
  @Input({
    required: true
  }) user!: User
}
