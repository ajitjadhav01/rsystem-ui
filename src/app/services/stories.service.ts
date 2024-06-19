import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  //We can store it in enviornment file to access it.
  //As this application is small hence declaring here
  baseUrl: string = 'https://localhost:7188';

  constructor(private httpClient: HttpClient) {}

  //Used to retrieves all top stories from api
  getAllTopStories(): Observable<Story[]> {
    return this.httpClient.get<Story[]>(`${this.baseUrl}/Stories`);
  }
}
