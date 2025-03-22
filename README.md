
# TP : Application d'Authentification avec Angular et React.js

Ce TP consiste à développer une application web permettant la gestion de l'authentification des utilisateurs. L'application doit implémenter les fonctionnalités suivantes :

- **Inscription (Signup)**
- **Connexion (Login)**
- **Déconnexion (Logout)**
- **Protection des routes**
- **Redirection vers la page de connexion si l'utilisateur n'est pas authentifié**

Le projet est développé à la fois en **Angular** et en **React.js** pour comparer l'implémentation des mêmes fonctionnalités dans ces deux technologies.

---

## Fonctionnalités

### Fonctionnalités Principales
1. **Inscription (Signup)** :
   - Permet à un utilisateur de créer un nouveau compte.
   - Les informations de l'utilisateur sont stockées dans une base de données simulée avec JSON Server.

2. **Connexion (Login)** :
   - Permet à un utilisateur de se connecter avec son email et son mot de passe.
   - Si les informations sont valides, l'utilisateur est redirigé vers la page d'accueil.

3. **Déconnexion (Logout)** :
   - Permet à l'utilisateur de se déconnecter.
   - Après la déconnexion, l'utilisateur ne peut plus accéder aux pages protégées.

4. **Protection des Routes** :
   - Les pages protégées (comme la page d'accueil) ne sont accessibles que si l'utilisateur est authentifié.
   - Si l'utilisateur n'est pas authentifié, il est redirigé vers la page de connexion.

5. **Gestion de Session** :
   - La session de l'utilisateur est gérée via le stockage local (`localStorage`).
   - Après la déconnexion, les informations de session sont supprimées.

---

## Technologies Utilisées

- **Frontend** :
  - Angular
  - React.js
- **Backend** :
  - JSON Server (pour simuler une API REST)
- **Autres Outils** :
  - Node.js
  - npm (Node Package Manager)

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- **Node.js** (version 16 ou supérieure)
- **npm** (inclus avec Node.js)
- **Angular CLI** (pour Angular)
- **Create React App** (pour React)
- **JSON Server** (pour simuler une API REST)

---

## Installation

### 1. Cloner le Dépôt

Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/votre-utilisateur/tp-authentification-angular-react.git
cd tp-authentification-angular-react
```

### 2. Installer les Dépendances

#### Pour Angular :
```bash
cd angular-app
npm install
```

#### Pour React :
```bash
cd react-app
npm install
```

#### Pour JSON Server :
```bash
cd json-server
npm install
```

---

## Configuration

### JSON Server
1. Placez votre fichier `db.json` dans le dossier `json-server`.
2. Démarrez JSON Server :
   ```bash
   cd json-server
   npx json-server --watch db.json --routes routes.json
   ```
   - L'API sera disponible à l'adresse `http://localhost:5000`.

### Angular
1. Configurez l'URL de l'API dans le fichier `environment.ts` :
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:5000'
   };
   ```

### React
1. Configurez l'URL de l'API dans le fichier `src/api.js` :
   ```javascript
   const API_URL = "http://localhost:5000";
   ```

---

## Exécution

### Angular
1. Naviguez dans le dossier Angular :
   ```bash
   cd angular-app
   ```
2. Démarrez l'application :
   ```bash
   ng serve
   ```
   - L'application sera disponible à l'adresse `http://localhost:4200`.

### React
1. Naviguez dans le dossier React :
   ```bash
   cd react-app
   ```
2. Démarrez l'application :
   ```bash
   npm start
   ```
   - L'application sera disponible à l'adresse `http://localhost:3000`.

---

## Structure du Projet

### Angular
```
angular-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── dashboard/
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   ├── guards/
│   │   │   ├── auth.guard.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts
├── angular.json
├── package.json
```

### React
```
react-app/
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   ├── services/
│   │   ├── api.js
│   ├── App.jsx
│   ├── index.js
├── package.json
```

### JSON Server
```
json-server/
├── db.json
├── routes.json
├── package.json
```

---

## Fonctionnalités Techniques

### Angular
- **Services** : `AuthService` pour gérer l'authentification.
- **Guards** : `AuthGuard` pour protéger les routes.
- **Routing** : Configuration des routes dans `app-routing.module.ts`.

### React
- **Hooks** : Utilisation de `useState` et `useEffect` pour gérer l'état et les effets.
- **React Router** : Gestion des routes avec `react-router-dom`.
- **Context API** : Gestion de l'état global de l'utilisateur.

---

## Visualisation pour angular

![image](https://github.com/user-attachments/assets/9d2a1e06-7cbd-4068-ba6c-9daa129c1cb9)
![image](https://github.com/user-attachments/assets/b4a1ba87-eaa0-451f-9a99-059b16f4e003)
![image](https://github.com/user-attachments/assets/ae721e76-f38b-4218-bdbe-774ee6974148)

## Visualisation pour react
![image](https://github.com/user-attachments/assets/f1d2cf45-d769-45cb-b24f-8a32eb7b33ef)
![image](https://github.com/user-attachments/assets/f8790b07-7ad0-4177-a97b-e3d9ab8d2109)
![image](https://github.com/user-attachments/assets/6bb2e0a7-f895-4005-b818-f411852d9777)

---

## Remarques

- Ce projet est conçu à des fins éducatives pour comparer Angular et React.
- JSON Server est utilisé pour simuler une API REST. Pour une application en production, utilisez un backend réel.
