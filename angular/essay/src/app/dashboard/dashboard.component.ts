import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-dashboard',
  imports: [],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {
  // États des cases à cocher
  dashboardChecked: boolean = false;
  productsChecked: boolean = true; // Par défaut, "Products" est coché
  uploadChecked: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  // Méthode pour déconnecter l'utilisateur
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  isSidebarCollapsed = false; // État de la sidebar (réduite ou non)

  // Fonction pour basculer la sidebar
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  // Méthode pour gérer les changements des cases à cocher
  onCheckboxChange(event: any, type: string) {
    switch (type) {
      case 'dashboard':
        this.dashboardChecked = event.target.checked;
        break;
      case 'products':
        this.productsChecked = event.target.checked;
        break;
      case 'upload':
        this.uploadChecked = event.target.checked;
        break;
    }
    console.log(`État des cases : Dashboard=${this.dashboardChecked}, Products=${this.productsChecked}, Upload=${this.uploadChecked}`);
  }
}