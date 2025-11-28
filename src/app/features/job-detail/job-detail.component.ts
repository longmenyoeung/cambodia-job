import { Component, OnInit } from '@angular/core';
import { JobService } from '../../core/services/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../core/models/job.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="job-detail-section">
      <div class="container">
        <button class="back-button" (click)="router.navigate(['/jobs'])">
          ← Back to Jobs
        </button>
        <div *ngIf="job" class="card job-card">
          <div class="job-header">
            <div>
              <h1 class="job-title">{{ job.title }}</h1>
              <p class="company-name">{{ job.company }}</p>
              <p class="job-meta">
                📍 {{ job.location }} • 💼 {{ job.jobType }} • 🕐 {{ job.postedAt }}
              </p>
            </div>
            <button class="btn-bookmark" title="Save Job">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
              </svg>
            </button>
          </div>

          <div class="salary-badge">
            <span class="salary-label">Salary Range</span>
            <span class="salary-amount">{{ job.salary }}</span>
          </div>
          
          <div class="content-section">
            <h2 class="section-heading">📋 Job Description</h2>
            <p class="description">{{ job.description }}</p>
          </div>
          
          <div class="content-section">
            <h2 class="section-heading">✅ Requirements</h2>
            <ul class="requirements-list">
              <li *ngFor="let req of job.requirements">{{ req }}</li>
            </ul>
          </div>

          <div class="content-section">
            <h2 class="section-heading">🎯 Key Responsibilities</h2>
            <ul class="requirements-list">
              <li>Collaborate with cross-functional teams</li>
              <li>Deliver high-quality results on time</li>
              <li>Contribute to team goals and initiatives</li>
            </ul>
          </div>
          
          <div class="apply-section">
            <button class="btn btn-success btn-apply" (click)="openModal()">
              Apply Now →
            </button>
            <p class="apply-note">Join our team and make an impact!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Modal -->
    <div class="modal-overlay" *ngIf="showModal" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="modal-close" (click)="closeModal()">×</button>
        
        <div class="modal-header">
          <h2>Apply for {{ job?.title }}</h2>
          <p>{{ job?.company }}</p>
        </div>

        <form class="application-form" (ngSubmit)="submitApplication()" #appForm="ngForm">
          <div class="form-group">
            <label>Full Name *</label>
            <input 
              type="text" 
              [(ngModel)]="application.fullName" 
              name="fullName"
              placeholder="John Doe"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label>Email Address *</label>
            <input 
              type="email" 
              [(ngModel)]="application.email" 
              name="email"
              placeholder="john@example.com"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label>Phone Number *</label>
            <input 
              type="tel" 
              [(ngModel)]="application.phone" 
              name="phone"
              placeholder="+855 12 345 6789"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label>Resume/CV *</label>
            <div class="file-upload">
              <input 
                type="file" 
                (change)="onFileSelect($event)"
                accept=".pdf,.doc,.docx"
                id="resume"
                required
              />
              <label for="resume" class="file-label">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                </svg>
                {{ fileName || 'Upload your resume (PDF, DOC)' }}
              </label>
            </div>
          </div>

          <div class="form-group">
            <label>Cover Letter</label>
            <textarea 
              [(ngModel)]="application.coverLetter" 
              name="coverLetter"
              placeholder="Tell us why you're a great fit for this role..."
              rows="5"
              class="form-input"
            ></textarea>
          </div>

          <div class="form-group">
            <label>LinkedIn Profile (Optional)</label>
            <input 
              type="url" 
              [(ngModel)]="application.linkedin" 
              name="linkedin"
              placeholder="https://linkedin.com/in/yourprofile"
              class="form-input"
            />
          </div>

          <div class="form-actions">
            <button type="button" class="btn-secondary" (click)="closeModal()">
              Cancel
            </button>
            <button 
              type="submit" 
              class="btn-primary"
              [disabled]="!appForm.valid || isSubmitting"
            >
              {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Success Message -->
    <div class="success-toast" *ngIf="showSuccess">
      <div class="success-content">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        <div>
          <h4>Application Submitted!</h4>
          <p>We'll review your application and get back to you soon.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .job-detail-section {
      padding: 80px 20px;
      background: #f8fafc;
      min-height: calc(100vh - 200px);
    }

    .back-button {
      margin-bottom: 2rem;
      color: #4361ee;
      font-weight: 600;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      padding: 8px 0;
      transition: opacity 0.3s;
    }

    .back-button:hover {
      opacity: 0.7;
    }

    .job-card {
      max-width: 900px;
      margin: 0 auto;
      padding: 2.5rem;
    }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
      gap: 1rem;
    }

    .job-title {
      font-size: clamp(1.8rem, 4vw, 3rem);
      font-weight: 800;
      margin-bottom: 0.5rem;
      line-height: 1.2;
      color: #1e293b;
    }

    .company-name {
      font-size: clamp(1.2rem, 2.5vw, 1.8rem);
      color: #4361ee;
      font-weight: 700;
      margin-bottom: 0.8rem;
    }

    .job-meta {
      font-size: clamp(0.95rem, 1.5vw, 1.2rem);
      color: #64748b;
      line-height: 1.5;
    }

    .btn-bookmark {
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s;
      color: #64748b;
      flex-shrink: 0;
    }

    .btn-bookmark:hover {
      background: #4361ee;
      border-color: #4361ee;
      color: white;
      transform: scale(1.05);
    }

    .salary-badge {
      background: linear-gradient(135deg, #06d6a0 0%, #05b589 100%);
      color: white;
      padding: 1.5rem 2rem;
      border-radius: 16px;
      margin-bottom: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .salary-label {
      font-size: 0.9rem;
      opacity: 0.9;
      font-weight: 500;
    }

    .salary-amount {
      font-size: clamp(1.5rem, 3vw, 2.2rem);
      font-weight: 800;
    }

    .content-section {
      margin-bottom: 2.5rem;
    }

    .section-heading {
      font-size: clamp(1.3rem, 2vw, 1.8rem);
      margin-bottom: 1rem;
      font-weight: 700;
      color: #1e293b;
    }

    .description {
      font-size: clamp(1rem, 1.2vw, 1.15rem);
      line-height: 1.8;
      color: #475569;
    }

    .requirements-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .requirements-list li {
      font-size: clamp(1rem, 1.2vw, 1.1rem);
      line-height: 1.8;
      color: #475569;
      margin-bottom: 0.8rem;
      padding-left: 1.5rem;
      position: relative;
    }

    .requirements-list li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #06d6a0;
      font-weight: bold;
    }

    .apply-section {
      text-align: center;
      margin-top: 3rem;
      padding: 2rem;
      background: #f8fafc;
      border-radius: 16px;
    }

    .btn-apply {
      font-size: clamp(1.1rem, 1.5vw, 1.4rem);
      padding: 18px 50px;
      margin-bottom: 1rem;
      box-shadow: 0 10px 30px rgba(6, 214, 160, 0.3);
    }

    .btn-apply:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(6, 214, 160, 0.4);
    }

    .apply-note {
      color: #64748b;
      font-size: 0.95rem;
      margin: 0;
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 20px;
      animation: fadeIn 0.3s;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-content {
      background: white;
      border-radius: 24px;
      width: 100%;
      max-width: 600px;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      animation: slideUp 0.3s;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    }

    @keyframes slideUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: #f1f5f9;
      border: none;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      color: #64748b;
      z-index: 1;
    }

    .modal-close:hover {
      background: #e2e8f0;
      transform: rotate(90deg);
    }

    .modal-header {
      padding: 2.5rem 2.5rem 1.5rem;
      border-bottom: 1px solid #e2e8f0;
    }

    .modal-header h2 {
      font-size: 1.8rem;
      font-weight: 800;
      color: #1e293b;
      margin: 0 0 0.5rem 0;
      padding-right: 40px;
    }

    .modal-header p {
      color: #4361ee;
      font-weight: 600;
      margin: 0;
    }

    .application-form {
      padding: 2rem 2.5rem 2.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }

    .form-input {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 1rem;
      transition: all 0.3s;
      font-family: inherit;
    }

    .form-input:focus {
      outline: none;
      border-color: #4361ee;
      box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
    }

    textarea.form-input {
      resize: vertical;
      min-height: 100px;
    }

    .file-upload {
      position: relative;
    }

    .file-upload input[type="file"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    .file-label {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 12px 16px;
      border: 2px dashed #cbd5e1;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s;
      color: #64748b;
      background: #f8fafc;
    }

    .file-label:hover {
      border-color: #4361ee;
      background: #f1f5ff;
      color: #4361ee;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid #e2e8f0;
    }

    .btn-secondary {
      flex: 1;
      padding: 14px 24px;
      background: #f1f5f9;
      color: #475569;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 1rem;
    }

    .btn-secondary:hover {
      background: #e2e8f0;
    }

    .btn-primary {
      flex: 1;
      padding: 14px 24px;
      background: linear-gradient(135deg, #4361ee 0%, #3f37c9 100%);
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 1rem;
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(67, 97, 238, 0.3);
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Success Toast */
    .success-toast {
      position: fixed;
      top: 100px;
      right: 20px;
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
      z-index: 10000;
      animation: slideInRight 0.4s;
      border-left: 4px solid #06d6a0;
    }

    @keyframes slideInRight {
      from { transform: translateX(400px); }
      to { transform: translateX(0); }
    }

    .success-content {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .success-content svg {
      color: #06d6a0;
      flex-shrink: 0;
    }

    .success-content h4 {
      margin: 0 0 0.25rem 0;
      font-size: 1rem;
      font-weight: 700;
      color: #1e293b;
    }

    .success-content p {
      margin: 0;
      font-size: 0.9rem;
      color: #64748b;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .job-card {
        padding: 2rem;
      }

      .modal-header,
      .application-form {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      .form-actions {
        flex-direction: column;
      }
    }

    @media (max-width: 480px) {
      .job-detail-section {
        padding: 50px 15px;
      }

      .job-card {
        padding: 1.5rem;
      }

      .job-header {
        flex-direction: column;
      }

      .btn-bookmark {
        align-self: flex-start;
      }

      .salary-badge {
        padding: 1.2rem 1.5rem;
      }

      .btn-apply {
        width: 100%;
      }

      .modal-content {
        border-radius: 16px;
      }

      .success-toast {
        left: 20px;
        right: 20px;
      }
    }
  `]
})
export class JobDetailComponent implements OnInit {
  job?: Job;
  showModal = false;
  showSuccess = false;
  isSubmitting = false;
  fileName = '';

  application = {
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    linkedin: '',
    resume: null
  };

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getById(id).subscribe(job => this.job = job);
  }

  openModal() {
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    document.body.style.overflow = 'auto';
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.application.resume = file;
    }
  }

  submitApplication() {
    this.isSubmitting = true;
    
    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.closeModal();
      this.showSuccess = true;
      
      // Reset form
      this.application = {
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        linkedin: '',
        resume: null
      };
      this.fileName = '';

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccess = false;
      }, 5000);
    }, 2000);
  }
}