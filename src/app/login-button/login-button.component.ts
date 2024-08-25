import { Component } from '@angular/core';
import { state, style } from '@angular/animations';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.css',
  animations: [state, style],
})
export class LoginButtonComponent {
  state(
    'running',
    style
  );
}
