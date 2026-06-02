import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink, MobileNavComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {
  greeting: string = '';
  ngOnInit(): void {
  this.setGreeting();
}
setGreeting(): void {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    this.greeting = 'Buenos días, Don Pedro 👋';
  } else if (hour >= 12 && hour < 18) {
    this.greeting = 'Buenas tardes, Don Pedro ☀️';
  } else {
    this.greeting = 'Buenas noches, Don Pedro 🌙';
  }
}
}
