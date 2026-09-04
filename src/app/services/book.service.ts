import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BookService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/books';

  getBooks() {
    return this.http.get<{ id: number; title: string; author: string }[]>(this.apiUrl);
  }
}
