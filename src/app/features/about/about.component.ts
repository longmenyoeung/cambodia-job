import { Component } from '@angular/core';

// About Page Component
@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="container">
        <div class="content-card">
          <h1 class="page-title text-gradient">About Job Cambodia</h1>
          <p class="page-subtitle">Leading job portal in Cambodia since 2025</p>
          
          <div class="content-grid">
            <div class="feature-box">
              <div class="icon-circle">🎯</div>
              <h3>Our Mission</h3>
              <p>Connecting talented individuals with leading companies across Cambodia, making job search simple and effective.</p>
            </div>
            
            <div class="feature-box">
              <div class="icon-circle">💼</div>
              <h3>12,847+ Jobs</h3>
              <p>Access thousands of opportunities from top employers including Smart, Wing, ABA Bank, and Cellcard.</p>
            </div>
            
            <div class="feature-box">
              <div class="icon-circle">🚀</div>
              <h3>Fast & Easy</h3>
              <p>Search, apply, and land your dream job with our intuitive platform designed for Cambodian job seekers.</p>
            </div>
          </div>

          <div class="stats-section">
            <div class="stat-item">
              <h2>500+</h2>
              <p>Companies</p>
            </div>
            <div class="stat-item">
              <h2>12K+</h2>
              <p>Active Jobs</p>
            </div>
            <div class="stat-item">
              <h2>50K+</h2>
              <p>Job Seekers</p>
            </div>
            <div class="stat-item">
              <h2>95%</h2>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-section {
      padding: 80px 20px;
      background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
      min-height: calc(100vh - 200px);
    }

    .content-card {
      background: white;
      border-radius: 24px;
      padding: 4rem;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
      max-width: 1100px;
      margin: 0 auto;
    }

    .page-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      margin-bottom: 1rem;
      text-align: center;
    }

    .page-subtitle {
      font-size: clamp(1.1rem, 2vw, 1.5rem);
      color: #64748b;
      text-align: center;
      margin-bottom: 3rem;
    }

    .content-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .feature-box {
      text-align: center;
      padding: 2rem;
      border-radius: 16px;
      background: #f8fafc;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .feature-box:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(67, 97, 238, 0.15);
    }

    .icon-circle {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #4361ee 0%, #3f37c9 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      margin: 0 auto 1.5rem;
    }

    .feature-box h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #1e293b;
    }

    .feature-box p {
      font-size: 1rem;
      line-height: 1.6;
      color: #64748b;
    }

    .stats-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem;
      padding: 2rem;
      background: linear-gradient(135deg, #4361ee 0%, #3f37c9 100%);
      border-radius: 16px;
      color: white;
    }

    .stat-item {
      text-align: center;
    }

    .stat-item h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 900;
      margin-bottom: 0.5rem;
    }

    .stat-item p {
      font-size: 1rem;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .content-card {
        padding: 2.5rem 2rem;
      }

      .content-grid {
        gap: 1.5rem;
      }

      .stats-section {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .page-section {
        padding: 50px 15px;
      }

      .content-card {
        padding: 2rem 1.5rem;
        border-radius: 16px;
      }

      .content-grid {
        grid-template-columns: 1fr;
      }

      .icon-circle {
        width: 70px;
        height: 70px;
        font-size: 2rem;
      }
    }
  `]
})
export class AboutComponent {}

// Contact Page Component
@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="container">
        <div class="content-card">
          <h1 class="page-title text-gradient">Get In Touch</h1>
          <p class="page-subtitle">We'd love to hear from you. Reach out to us anytime!</p>
          
          <div class="contact-grid">
            <div class="contact-box">
              <div class="icon-circle">📧</div>
              <h3>Email Us</h3>
              <a href="mailto:hello@jobcambodia.com" class="contact-link">{{'hello@jobcambodia.com'}}</a>
              <p>We'll respond within 24 hours</p>
            </div>
            
            <div class="contact-box">
              <div class="icon-circle">📱</div>
              <h3>Call Us</h3>
              <a href="tel:+855123456789" class="contact-link">+855 12 345 6789</a>
              <p>Mon-Fri, 8AM-6PM ICT</p>
            </div>
            
            <div class="contact-box">
              <div class="icon-circle">📍</div>
              <h3>Visit Us</h3>
              <p class="contact-link">Phnom Penh, Cambodia</p>
              <p>Street 240, Sangkat Chaktomuk</p>
            </div>
          </div>

          <div class="cta-section">
            <h2>Have a question?</h2>
            <p>Check our FAQ or send us a message directly</p>
            <button class="btn-large">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-section {
      padding: 80px 20px;
      background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
      min-height: calc(100vh - 200px);
    }

    .content-card {
      background: white;
      border-radius: 24px;
      padding: 4rem;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
      max-width: 1000px;
      margin: 0 auto;
    }

    .page-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      margin-bottom: 1rem;
      text-align: center;
    }

    .page-subtitle {
      font-size: clamp(1.1rem, 2vw, 1.5rem);
      color: #64748b;
      text-align: center;
      margin-bottom: 3rem;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .contact-box {
      text-align: center;
      padding: 2.5rem 2rem;
      border-radius: 16px;
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      transition: all 0.3s;
    }

    .contact-box:hover {
      transform: translateY(-5px);
      border-color: #4361ee;
      box-shadow: 0 10px 30px rgba(67, 97, 238, 0.15);
    }

    .icon-circle {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #4361ee 0%, #3f37c9 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      margin: 0 auto 1.5rem;
    }

    .contact-box h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #1e293b;
    }

    .contact-link {
      display: block;
      font-size: 1.1rem;
      font-weight: 600;
      color: #4361ee;
      margin-bottom: 0.5rem;
      text-decoration: none;
      transition: color 0.3s;
    }

    .contact-link:hover {
      color: #3f37c9;
    }

    .contact-box p {
      font-size: 0.95rem;
      color: #64748b;
      margin: 0;
    }

    .cta-section {
      text-align: center;
      padding: 3rem 2rem;
      background: linear-gradient(135deg, #4361ee 0%, #3f37c9 100%);
      border-radius: 16px;
      color: white;
    }

    .cta-section h2 {
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      font-weight: 800;
      margin-bottom: 1rem;
    }

    .cta-section p {
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      margin-bottom: 2rem;
      opacity: 0.95;
    }

    .btn-large {
      background: white;
      color: #4361ee;
      border: none;
      padding: 16px 40px;
      font-size: 1.1rem;
      font-weight: 700;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-large:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
      .content-card {
        padding: 2.5rem 2rem;
      }

      .contact-grid {
        gap: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .page-section {
        padding: 50px 15px;
      }

      .content-card {
        padding: 2rem 1.5rem;
        border-radius: 16px;
      }

      .contact-grid {
        grid-template-columns: 1fr;
      }

      .icon-circle {
        width: 70px;
        height: 70px;
        font-size: 2rem;
      }

      .cta-section {
        padding: 2rem 1.5rem;
      }

      .btn-large {
        width: 100%;
      }
    }
  `]
})
export class ContactComponent {}

// Terms Page Component
@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="container">
        <div class="content-card">
          <h1 class="page-title text-gradient">Terms & Conditions</h1>
          <p class="page-subtitle">Last updated: January 2025</p>
          
          <div class="terms-content">
            <div class="terms-section">
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using Job Cambodia, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </div>

            <div class="terms-section">
              <h2>2. Use of Service</h2>
              <p>Our platform provides job listings and career resources. Users must provide accurate information and use the service lawfully.</p>
            </div>

            <div class="terms-section">
              <h2>3. User Responsibilities</h2>
              <ul>
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Not misuse or abuse the platform</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>

            <div class="terms-section">
              <h2>4. Privacy & Data</h2>
              <p>We are committed to protecting your privacy. Please review our Privacy Policy to understand how we collect and use your information.</p>
            </div>

            <div class="terms-section">
              <h2>5. Limitation of Liability</h2>
              <p>Job Cambodia is not liable for any indirect, incidental, or consequential damages arising from the use of our service.</p>
            </div>

            <div class="terms-section">
              <h2>6. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.</p>
            </div>
          </div>

          <div class="contact-footer">
            <p>Questions about our terms? <a href="/contact">Contact us</a></p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-section {
      padding: 80px 20px;
      background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
      min-height: calc(100vh - 200px);
    }

    .content-card {
      background: white;
      border-radius: 24px;
      padding: 4rem;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
      max-width: 900px;
      margin: 0 auto;
    }

    .page-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      margin-bottom: 1rem;
      text-align: center;
    }

    .page-subtitle {
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      color: #64748b;
      text-align: center;
      margin-bottom: 3rem;
    }

    .terms-content {
      text-align: left;
    }

    .terms-section {
      margin-bottom: 2.5rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #e2e8f0;
    }

    .terms-section:last-child {
      border-bottom: none;
    }

    .terms-section h2 {
      font-size: clamp(1.3rem, 2vw, 1.8rem);
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .terms-section p {
      font-size: clamp(1rem, 1.2vw, 1.1rem);
      line-height: 1.8;
      color: #475569;
      margin: 0;
    }

    .terms-section ul {
      margin: 1rem 0 0 1.5rem;
      padding: 0;
    }

    .terms-section li {
      font-size: clamp(1rem, 1.2vw, 1.1rem);
      line-height: 1.8;
      color: #475569;
      margin-bottom: 0.5rem;
    }

    .contact-footer {
      text-align: center;
      padding: 2rem;
      background: #f8fafc;
      border-radius: 12px;
      margin-top: 2rem;
    }

    .contact-footer p {
      font-size: 1.1rem;
      color: #475569;
      margin: 0;
    }

    .contact-footer a {
      color: #4361ee;
      font-weight: 600;
      text-decoration: none;
      transition: color 0.3s;
    }

    .contact-footer a:hover {
      color: #3f37c9;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .content-card {
        padding: 2.5rem 2rem;
      }

      .terms-section {
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .page-section {
        padding: 50px 15px;
      }

      .content-card {
        padding: 2rem 1.5rem;
        border-radius: 16px;
      }

      .terms-section ul {
        margin-left: 1rem;
      }
    }
  `]
})
export class TermsComponent {}