import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar">
      <div class="container nav-container">
        <h1 class="logo text-gradient">Job Cambodia</h1>
        
        <!-- Hamburger Menu -->
        <button class="hamburger" (click)="toggleMenu()" [class.active]="isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Desktop Menu -->
        <div class="nav-links desktop-only">
          <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/jobs" routerLinkActive="active">Jobs</a>
          <a routerLink="/about">About</a>
          <a routerLink="/contact">Contact</a>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" [class.open]="isMenuOpen">
        <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
        <a routerLink="/jobs" routerLinkActive="active" (click)="closeMenu()">Jobs</a>
        <a routerLink="/about" (click)="closeMenu()">About</a>
        <a routerLink="/contact" (click)="closeMenu()">Contact</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: white;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 20px;
    }

    .logo {
      font-size: 2.4rem;
      font-weight: 900;
      margin: 0;
    }

    .nav-links {
      display: flex;
      gap: 3rem;
      font-weight: 600;
      font-size: 1.1rem;
    }

    .nav-links a {
      color: #334155;
      text-decoration: none;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #4361ee;
    }

    .nav-links a.active {
      color: #4361ee;
      font-weight: 700;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      z-index: 1001;
    }

    .hamburger span {
      width: 28px;
      height: 3px;
      background: #334155;
      border-radius: 3px;
      transition: all 0.3s;
    }

    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(8px, 8px);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }

    .mobile-menu {
      display: none;
      flex-direction: column;
      background: white;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      padding: 0;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .mobile-menu.open {
      max-height: 400px;
      padding: 20px 0;
    }

    .mobile-menu a {
      color: #334155;
      text-decoration: none;
      padding: 15px 30px;
      font-weight: 600;
      font-size: 1.1rem;
      transition: background 0.3s, color 0.3s;
      border-left: 3px solid transparent;
    }

    .mobile-menu a:hover {
      background: #f8fafc;
      color: #4361ee;
      border-left-color: #4361ee;
    }

    .mobile-menu a.active {
      color: #4361ee;
      font-weight: 700;
      background: #f1f5ff;
      border-left-color: #4361ee;
    }

    .desktop-only {
      display: flex;
    }

    /* Tablet */
    @media (max-width: 768px) {
      .logo {
        font-size: 2rem;
      }

      .nav-links {
        gap: 2rem;
        font-size: 1rem;
      }
    }

    /* Mobile */
    @media (max-width: 640px) {
      .logo {
        font-size: 1.8rem;
      }

      .desktop-only {
        display: none;
      }

      .hamburger {
        display: flex;
      }

      .mobile-menu {
        display: flex;
      }

      .nav-container {
        padding: 1.2rem 20px;
      }
    }
  `]
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}