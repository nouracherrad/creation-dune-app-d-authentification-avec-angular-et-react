import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Récupérer les utilisateurs existants depuis localStorage
    const users = JSON.parse(localStorage.getItem('users') ||' []');

    // Vérifier si l'utilisateur existe déjà
    const userExists = users.some((user: any) => user.name === this.name);
    if (userExists) {
      alert('Cet utilisateur existe déjà !');
      return;
    }

    // Ajouter le nouvel utilisateur
    users.push({ name: this.name, password: this.password });

    // Mettre à jour localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Rediriger vers la page de connexion
    this.router.navigate(['/login']);
    alert('Inscription réussie ! Veuillez vous connecter.');
  }
}