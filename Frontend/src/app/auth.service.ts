import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/ticketMaster';

  private username: string | null = null;

  constructor(private http: HttpClient) { }

  // signUp
  SignUp(user: any) {
    console.log(`Connecting to Server ${user}`)
    return this.http.post<any>(`${this.apiUrl}/signup`, user);

  }


  login(email: any, password: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);

          this.setUsername(email);
        }
      })
    )
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Add a method to set the username
  setUsername(email: string) {
    this.username = email;
  }

  // Add a method to get the username
  getUsername() {
    return this.username;
  }
}
