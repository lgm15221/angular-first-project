import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProviderService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/providers'; 

  getProviders() {
    return this.http.get<{ id: number; name: string; email: string }[]>(this.apiUrl);
  }
}
