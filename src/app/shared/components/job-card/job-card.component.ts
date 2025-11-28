import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Job } from '../../../core/models/job.model';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card" style="cursor: pointer; margin-top:20px;" (click)="click.emit()">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
        <h3 style="font-size: 1.7rem; font-weight: 700; line-height: 1.3;">{{ job.title }}</h3>
        <span style="background: #ecfdf5; color: #059669; padding: 10px 18px; border-radius: 30px; font-weight: 700; font-size: 0.9rem;">
          {{ job.jobType }}
        </span>
      </div>
      <p style="font-size: 1.5rem; font-weight: 700; color: #4361ee; margin: 1rem 0;">{{ job.company }}</p>
      <p style="color: #64748b; font-size: 1.1rem; margin-bottom: 1.5rem;">
        {{ job.location }} • {{ job.postedAt }}
      </p>
      <p style="font-size: 1.6rem; font-weight: 800; color: #06d6a0;">{{ job.salary }}</p>
      <div style="text-align: right; margin-top: 2rem;">
        <button class="btn btn-primary">View Details →</button>
      </div>
    </div>
  `
})
export class JobCardComponent {
  @Input() job!: Job;
  @Output() click = new EventEmitter<void>();
}