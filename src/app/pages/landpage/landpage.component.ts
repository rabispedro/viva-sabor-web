import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-landpage',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './landpage.component.html',
  styleUrl: './landpage.component.css'
})
export class LandpageComponent {
  title: string = "Viva Sabor";
}
