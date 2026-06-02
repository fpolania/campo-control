import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink, MobileNavComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {}
