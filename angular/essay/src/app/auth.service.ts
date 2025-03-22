import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import users from './users.json';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(name: string, password: string): boolean {
    // Récupérer les utilisateurs depuis localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Vérifier les informations d'identification
    const user = users.find((u: any) => u.name === name && u.password === password);
    if (user) {
      this.isAuthenticated = true;
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}