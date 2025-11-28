import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../core/services/job.service';
import { JobCardComponent } from '../../shared/components/job-card/job-card.component';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { Job } from '../../core/models/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, JobCardComponent, SearchBarComponent],
  template: `
    <section class="job-list-section">
      <div class="container">
        <h1 class="page-title text-gradient">
          All Jobs in Cambodia
        </h1>
        <p class="job-count">
          {{ filteredJobs.length }} jobs available
        </p>

        <app-search-bar (onSearch)="filter($event)" class="search-wrapper" />

        <div class="job-grid" *ngIf="filteredJobs.length > 0; else noJobs">
          <div *ngFor="let job of filteredJobs; let i = index" 
                class="fade-in-up" 
               [style.animation-delay.ms]="i * 100">
            <app-job-card [job]="job" (click)="router.navigate(['/job', job.id])" />
          </div>
        </div>

        <ng-template #noJobs>
          <div class="no-jobs">
            <h3>No jobs found matching your search.</h3>
            <p>Try different keywords or clear the search.</p>
          </div>
        </ng-template>
      </div>
    </section>
  `,
  styles: [`
    .job-list-section {
      padding: 80px 20px;
      background: #f8fafc;
      min-height: calc(100vh - 200px);
    }

    .page-title {
      text-align: center;
      font-size: clamp(2rem, 5vw, 3.8rem);
      font-weight: 900;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .job-count {
      text-align: center;
      font-size: clamp(1rem, 1.5vw, 1.4rem);
      color: #64748b;
      margin-bottom: 3rem;
    }

    .search-wrapper {
      max-width: 700px;
      margin: 0 auto 4rem;
      display: block;
      padding: 0 10px;
    }

    .job-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }

    .no-jobs {
      text-align: center;
      padding: 80px 20px;
      color: #64748b;
    }

    .no-jobs h3 {
      font-size: clamp(1.3rem, 2vw, 1.8rem);
      margin-bottom: 1rem;
      color: #475569;
    }

    .no-jobs p {
      font-size: clamp(1rem, 1.2vw, 1.2rem);
      margin-top: 1rem;
    }

    /* Tablet */
    @media (max-width: 768px) {
      .job-list-section {
        padding: 60px 20px;
      }

      .job-count {
        margin-bottom: 2.5rem;
      }

      .search-wrapper {
        margin-bottom: 3rem;
      }

      .job-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
      }

      .no-jobs {
        padding: 60px 20px;
      }
    }

    /* Mobile */
    @media (max-width: 480px) {
      .job-list-section {
        padding: 50px 15px;
      }

      .job-count {
        margin-bottom: 2rem;
      }

      .search-wrapper {
        margin-bottom: 2.5rem;
      }

      .job-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .no-jobs {
        padding: 50px 15px;
      }
    }
  `]
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  filteredJobs: Job[] = [];

  constructor(private jobService: JobService, public router: Router) {}

  ngOnInit(): void {
    this.jobService.getAll().subscribe(data => {
      this.jobs = data;
      this.filteredJobs = data;
    });
  }

  filter(term: string): void {
    const search = term.trim().toLowerCase();
    if (!search) {
      this.filteredJobs = this.jobs;
      return;
    }
    this.filteredJobs = this.jobs.filter(job =>
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.location.toLowerCase().includes(search) ||
      job.category.toLowerCase().includes(search)
    );
  }
}