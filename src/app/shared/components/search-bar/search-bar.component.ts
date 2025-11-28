import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  template: `
    <div class="search-container">
      <input 
        #input
        (keyup.enter)="onSearch.emit(input.value.trim())"
        placeholder="Search job title, company, skills..."
        class="search-input"
      />
      <button 
        (click)="onSearch.emit(input.value.trim())"
        class="btn btn-primary search-button">
        <span class="search-text-full">Search Jobs</span>
        <span class="search-text-short">Search</span>
      </button>
    </div>
  `,
  styles: [`
    .search-container {
      display: flex;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 15px 40px rgba(0,0,0,0.15);
      width: 100%;
    }

    .search-input {
      flex: 1;
      padding: 22px 28px;
      border: none;
      font-size: 1.2rem;
      outline: none;
      min-width: 0; /* Prevents input from overflowing */
    }

    .search-input::placeholder {
      color: #94a3b8;
    }

    .search-button {
      border-radius: 0;
      padding: 0 50px;
      font-size: 1.1rem;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .search-text-short {
      display: none;
    }

    .search-text-full {
      display: inline;
    }

    /* Tablet */
    @media (max-width: 768px) {
      .search-input {
        padding: 18px 24px;
        font-size: 1.1rem;
      }

      .search-button {
        padding: 0 35px;
        font-size: 1rem;
      }
    }

    /* Mobile */
    @media (max-width: 480px) {
      .search-container {
        border-radius: 12px;
      }

      .search-input {
        padding: 16px 20px;
        font-size: 1rem;
      }

      .search-input::placeholder {
        font-size: 0.95rem;
      }

      .search-button {
        padding: 0 24px;
        font-size: 0.95rem;
      }

      /* Show shorter text on very small screens */
      .search-text-full {
        display: none;
      }

      .search-text-short {
        display: inline;
      }
    }

    /* Extra small phones */
    @media (max-width: 360px) {
      .search-input {
        padding: 14px 16px;
        font-size: 0.95rem;
      }

      .search-button {
        padding: 0 20px;
      }
    }
  `]
})
export class SearchBarComponent {
  @Output() onSearch = new EventEmitter<string>();
}