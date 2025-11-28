import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../core/services/job.service';
import { JobCardComponent } from '../../shared/components/job-card/job-card.component';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { Job } from '../../core/models/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, JobCardComponent, SearchBarComponent],
  template: `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <div class="container">
        <div class="hero-badge">🇰🇭 #1 Job Portal in Cambodia</div>
        <h1 class="hero-title">
          Find Your Dream Job in <span class="highlight">Cambodia</span>
        </h1>
        <p class="hero-subtitle">
          {{ totalJobs | number }}+ active jobs from top companies like Smart, Wing, ABA Bank, Cellcard and more.
        </p>
        <app-search-bar (onSearch)="search($event)" class="search-wrapper" />
        
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">Companies</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">{{ totalJobs | number }}+</span>
            <span class="stat-label">Active Jobs</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">50K+</span>
            <span class="stat-label">Job Seekers</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Companies Section -->
    <section class="companies-section">
      <div class="container">
        <p class="companies-title">Trusted by leading companies</p>
        <div class="companies-slider">
          <div class="company-logo">Smart Axiata</div>
          <div class="company-logo">Wing Bank</div>
          <div class="company-logo">ABA Bank</div>
          <div class="company-logo">Cellcard</div>
          <div class="company-logo">ACLEDA Bank</div>
          <div class="company-logo">Metfone</div>
        </div>
      </div>
    </section>

    <!-- Job Categories Section -->
    <section class="categories-section">
      <div class="container">
        <h2 class="section-title">Browse by Category</h2>
        <p class="section-subtitle">Find jobs in your field of expertise</p>
        
        <div class="categories-grid">
          <div class="category-card" *ngFor="let category of categories" (click)="searchByCategory(category.name)">
            <div class="category-icon">{{ category.icon }}</div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.count }} jobs</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Jobs -->
    <section class="featured-section">
      <div class="container">
        <div class="section-header">
          <div>
            <h2 class="section-title text-gradient">Featured Jobs</h2>
            <p class="section-subtitle">Hand-picked opportunities just for you</p>
          </div>
          <button class="btn-outline" (click)="router.navigate(['/jobs'])">
            View All
          </button>
        </div>

        <div class="job-grid">
          <div *ngFor="let job of jobs; let i = index" 
                class="fade-in-up" 
               [style.animation-delay.ms]="i * 150">
            <app-job-card [job]="job" (click)="goToJob(job.id)" />
          </div>
        </div>

        <div class="view-all-wrapper">
          <button class="btn btn-primary btn-large"
                  (click)="router.navigate(['/jobs'])">
            View All {{ totalJobs | number }} Jobs →
          </button>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">Why Choose Job Cambodia?</h2>
        <p class="section-subtitle">The best platform for your career journey</p>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Smart Matching</h3>
            <p>Our AI-powered system matches you with the perfect opportunities</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Quick Apply</h3>
            <p>Apply to multiple jobs in seconds with your saved profile</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔔</div>
            <h3>Job Alerts</h3>
            <p>Get notified instantly when new jobs match your criteria</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💼</div>
            <h3>Career Resources</h3>
            <p>Access guides, tips, and tools to advance your career</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Find Your Dream Job?</h2>
          <p>Join thousands of job seekers who found their perfect role through Job Cambodia</p>
          <div class="cta-buttons">
            <button class="btn btn-success btn-large" (click)="router.navigate(['/jobs'])">
              Browse Jobs
            </button>
            <button class="btn btn-light btn-large">
              Upload Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, #4361ee 0%, #3f37c9 100%);
      color: white;
      padding: 140px 20px 100px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero-bg-shapes {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      opacity: 0.1;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      background: white;
    }

    .shape-1 {
      width: 300px;
      height: 300px;
      top: -100px;
      right: -50px;
      animation: float 8s ease-in-out infinite;
    }

    .shape-2 {
      width: 200px;
      height: 200px;
      bottom: -80px;
      left: 10%;
      animation: float 6s ease-in-out infinite reverse;
    }

    .shape-3 {
      width: 150px;
      height: 150px;
      top: 50%;
      left: -50px;
      animation: float 7s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    .hero-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      padding: 8px 20px;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .hero-title {
      font-size: clamp(2rem, 5vw, 5rem);
      font-weight: 900;
      margin-bottom: 1.5rem;
      line-height: 1.1;
      padding: 0 10px;
      position: relative;
      z-index: 1;
    }

    .highlight {
      color: #fbbf24;
      position: relative;
    }

    .hero-subtitle {
      font-size: clamp(1rem, 2vw, 1.4rem);
      margin-bottom: 3rem;
      opacity: 0.95;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 20px;
      position: relative;
      z-index: 1;
    }

    .search-wrapper {
      max-width: 750px;
      margin: 0 auto 3rem;
      padding: 0 20px;
      display: block;
      position: relative;
      z-index: 1;
    }

    .hero-stats {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 3rem;
      position: relative;
      z-index: 1;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
    }

    .stat-number {
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      font-weight: 900;
    }

    .stat-label {
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: rgba(255, 255, 255, 0.3);
    }

    /* Companies Section */
    .companies-section {
      padding: 50px 20px;
      background: white;
      border-bottom: 1px solid #e2e8f0;
    }

    .companies-title {
      text-align: center;
      color: #64748b;
      font-size: 0.95rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
    }

    .companies-slider {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      flex-wrap: wrap;
    }

    .company-logo {
      font-size: 1.1rem;
      font-weight: 700;
      color: #475569;
      opacity: 0.7;
      transition: opacity 0.3s;
    }

    .company-logo:hover {
      opacity: 1;
    }

    /* Categories Section */
    .categories-section {
      padding: 80px 20px;
      background: white;
    }

    .section-title {
      text-align: center;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      margin-bottom: 0.5rem;
      color: #1e293b;
    }

    .section-subtitle {
      text-align: center;
      color: #64748b;
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .category-card {
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      padding: 2rem 1.5rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;
    }

    .category-card:hover {
      transform: translateY(-5px);
      border-color: #4361ee;
      box-shadow: 0 10px 30px rgba(67, 97, 238, 0.15);
      background: white;
    }

    .category-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .category-card h3 {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: #1e293b;
    }

    .category-card p {
      color: #64748b;
      font-size: 0.95rem;
      margin: 0;
    }

    /* Featured Section */
    .featured-section {
      padding: 80px 20px;
      background: #f8fafc;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .btn-outline {
      background: transparent;
      border: 2px solid #4361ee;
      color: #4361ee;
      padding: 12px 24px;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-outline:hover {
      background: #4361ee;
      color: white;
    }

    .job-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .view-all-wrapper {
      text-align: center;
      margin-top: 4rem;
    }

    .btn-large {
      font-size: clamp(1rem, 1.5vw, 1.4rem);
      padding: 18px 45px;
      border-radius: 16px;
    }

    /* Features Section */
    .features-section {
      padding: 80px 20px;
      background: white;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
    }

    .feature-icon {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
    }

    .feature-card h3 {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #1e293b;
    }

    .feature-card p {
      color: #64748b;
      line-height: 1.6;
    }

    /* CTA Section */
    .cta-section {
      padding: 80px 20px;
      background: linear-gradient(135deg, #4361ee 0%, #3f37c9 100%);
      color: white;
    }

    .cta-content {
      text-align: center;
      max-width: 700px;
      margin: 0 auto;
    }

    .cta-content h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 900;
      margin-bottom: 1rem;
    }

    .cta-content p {
      font-size: clamp(1rem, 1.5vw, 1.3rem);
      opacity: 0.95;
      margin-bottom: 2.5rem;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-light {
      background: white;
      color: #4361ee;
      border: 2px solid white;
    }

    .btn-light:hover {
      background: transparent;
      color: white;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-section {
        padding: 100px 20px 80px;
      }

      .hero-stats {
        gap: 1.5rem;
      }

      .stat-divider {
        display: none;
      }

      .companies-slider {
        gap: 2rem;
      }

      .categories-section,
      .featured-section,
      .features-section,
      .cta-section {
        padding: 60px 20px;
      }

      .section-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .job-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
      }

      .cta-buttons {
        flex-direction: column;
      }

      .btn-large {
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 80px 15px 60px;
      }

      .hero-badge {
        font-size: 0.8rem;
        padding: 6px 16px;
      }

      .hero-subtitle {
        margin-bottom: 2rem;
      }

      .search-wrapper {
        margin-bottom: 2rem;
      }

      .companies-slider {
        gap: 1.5rem;
      }

      .company-logo {
        font-size: 0.95rem;
      }

      .categories-grid {
        grid-template-columns: 1fr;
      }

      .job-grid {
        grid-template-columns: 1fr;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }
    }

    /* Animations */
    .fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  jobs: Job[] = [];
  totalJobs = 0;

  categories = [
    { name: 'Technology', icon: '💻', count: 1250 },
    { name: 'Finance', icon: '💰', count: 890 },
    { name: 'Marketing', icon: '📢', count: 750 },
    { name: 'Sales', icon: '🤝', count: 680 },
    { name: 'Healthcare', icon: '⚕️', count: 540 },
    { name: 'Education', icon: '📚', count: 420 }
  ];

  constructor(private jobService: JobService, public router: Router) {}

  ngOnInit(): void {
    this.jobService.getAll().subscribe(data => {
      this.totalJobs = data.length;
      this.jobs = data.slice(0, 6);
    });
  }

  search(term: string): void {
    this.router.navigate(['/jobs'], { queryParams: { q: term } });
  }

  searchByCategory(category: string): void {
    this.router.navigate(['/jobs'], { queryParams: { q: category } });
  }

  goToJob(id: number): void {
    this.router.navigate(['/job', id]);
  }
}