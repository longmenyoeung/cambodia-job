import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({ providedIn: 'root' })
export class JobService {
  private url = 'assets/data/jobs.json'; 
  constructor(private http: HttpClient) {}

  getAll(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url);
  }

  getById(id: number): Observable<Job | undefined> {
    return this.http.get<Job[]>(this.url).pipe(
      map(jobs => jobs.find(j => j.id === id))
    );
  }
}