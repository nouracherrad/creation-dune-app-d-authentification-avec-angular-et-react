import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

  export class LoginComponent {
    username: string = '';
    password: string = '';
  
    constructor(private authService: AuthService) {}
  
    onSubmit() {
      if (this.authService.login(this.username, this.password)) {
        console.log('Connexion réussie');
      } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect');
      }
    }
  }
