import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Brand Section -->
          <div class="footer-section brand-section">
            <h2 class="footer-logo text-gradient">Job Cambodia</h2>
            <p class="footer-tagline">
              Connecting talent with opportunity across Cambodia
            </p>
            <div class="social-links">
              <a href="#" class="social-icon" aria-label="Facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="LinkedIn">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Telegram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Twitter">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-section">
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/jobs">Browse Jobs</a></li>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <!-- For Job Seekers -->
          <div class="footer-section">
            <h3 class="footer-heading">For Job Seekers</h3>
            <ul class="footer-links">
              <li><a href="#">Create Profile</a></li>
              <li><a href="#">Upload Resume</a></li>
              <li><a href="#">Career Advice</a></li>
              <li><a href="#">Salary Guide</a></li>
            </ul>
          </div>

          <!-- For Employers -->
          <div class="footer-section">
            <h3 class="footer-heading">For Employers</h3>
            <ul class="footer-links">
              <li><a href="#">Post a Job</a></li>
              <li><a href="#">Pricing Plans</a></li>
              <li><a href="#">Recruitment Tips</a></li>
              <li><a href="#">Employer Login</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <p class="copyright">© 2025 Job Cambodia. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span class="separator">•</span>
            <a href="#">Terms of Service</a>
            <span class="separator">•</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #1e293b;
      color: white;
      padding: 60px 20px 30px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .brand-section {
      max-width: 350px;
    }

    .footer-logo {
      font-size: 2.5rem;
      font-weight: 900;
      margin-bottom: 1rem;
    }

    .footer-tagline {
      font-size: 1.1rem;
      opacity: 0.8;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-icon {
      width: 44px;
      height: 44px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      background: #4361ee;
      transform: translateY(-3px);
    }

    .footer-section {
      display: flex;
      flex-direction: column;
    }

    .footer-heading {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: #fbbf24;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.8rem;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-size: 1rem;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .footer-links a:hover {
      color: #fbbf24;
      transform: translateX(5px);
    }

    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .copyright {
      margin: 0;
      opacity: 0.7;
      font-size: 0.95rem;
    }

    .footer-bottom-links {
      display: flex;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .footer-bottom-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.3s;
    }

    .footer-bottom-links a:hover {
      color: #fbbf24;
    }

    .separator {
      opacity: 0.5;
    }

    /* Tablet */
    @media (max-width: 968px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
      }

      .brand-section {
        grid-column: 1 / -1;
        max-width: 100%;
      }
    }

    /* Mobile */
    @media (max-width: 640px) {
      .footer {
        padding: 40px 15px 20px;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .brand-section {
        text-align: center;
        max-width: 100%;
      }

      .footer-logo {
        font-size: 2rem;
      }

      .footer-tagline {
        font-size: 1rem;
      }

      .social-links {
        justify-content: center;
      }

      .social-icon {
        width: 40px;
        height: 40px;
      }

      .footer-section {
        text-align: center;
      }

      .footer-heading {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      .footer-links a:hover {
        transform: none;
      }

      .footer-bottom {
        flex-direction: column;
        text-align: center;
        padding-top: 1.5rem;
        gap: 1rem;
      }

      .footer-bottom-links {
        justify-content: center;
        font-size: 0.9rem;
      }
    }

    /* Extra small phones */
    @media (max-width: 360px) {
      .footer-logo {
        font-size: 1.8rem;
      }

      .social-links {
        gap: 0.7rem;
      }

      .social-icon {
        width: 38px;
        height: 38px;
      }

      .footer-heading {
        font-size: 1.1rem;
      }
    }
  `]
})
export class FooterComponent {}