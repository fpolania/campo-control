import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink, MobileNavComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent implements OnInit {
  authService = inject(AuthService);
  currentUser: any = null;
  greeting: string = '';
  ngOnInit(): void {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.authService.currentUser.subscribe({
      next: async (user) => {
        this.currentUser = user;
        this.setGreeting(this.currentUser?.name);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  setGreeting(name: string): void {
    const nameFis = name.split(' ')[0];
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      this.greeting = `Buenos días, Don ${nameFis} 👋`;
    } else if (hour >= 12 && hour < 18) {
      this.greeting = `Buenas tardes, Don ${nameFis} ☀️`;
    } else {
      this.greeting = `Buenas noches, Don ${nameFis} 🌙`;
    }
  }
  logout() {
    this.authService.logout();
  }
}
