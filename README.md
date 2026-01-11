# Portfolio Personnel - Thème Irlande & Nature 🇮🇪🌿

Ce projet est un portfolio "One-Page" moderne, élégant et entièrement responsive. Il a été conçu avec HTML5, Tailwind CSS (via CDN) et GSAP pour les animations.

## 🎨 Thème Visuel
- **Couleurs** : Vert forêt, Or antique, Pierre grise, Brume.
- **Ambiance** : Naturelle, sophistiquée, inspiration équestre subtile.
- **Police** : *Playfair Display* (Titres) & *Inter* (Texte).

## 📁 Structure des fichiers
- `index.html` : Le contenu principal et la structure.
- `script.js` : Les animations (GSAP) et intéractions.
- `style.css` : Personnalisation de la scrollbar et ajustements fins.

## 🛠 Comment modifier le contenu ?

1.  **Textes & Liens** : Ouvrez `index.html` avec n'importe quel éditeur de texte (VS Code, Notepad++, etc.). Cherchez les textes "Placeholder" (ex: "Nom Prénom") et remplacez-les par les vôtres.
2.  **Images** : Les images actuelles proviennent d'Unsplash (banque d'images libre). Pour mettre vos propres images :
    *   Créez un dossier `assets/` ou `img/` à la racine.
    *   Déposez vos images dedans (ex: `profil.jpg`).
    *   Dans le HTML, changez `src="https://..."` par `src="assets/profil.jpg"`.
3.  **Couleurs** : Les couleurs principales sont définies dans la configuration Tailwind en haut du fichier `index.html` (section `<script> tailwind.config = ...`).

## 🚀 Déploiement sur GitHub Pages (Gratuit)

Voici la méthode la plus simple pour mettre ce site en ligne :

1.  **Créer un compte GitHub** (si vous n'en avez pas).
2.  **Créer un nouveau Repository** :
    *   Nommez-le `portfolio` (ou `votre-pseudo.github.io` pour qu'il soit à la racine).
    *   Cochez "Public".
    *   Ne pas ajouter de README ou .gitignore pour l'instant.
3.  **Mettre les fichiers sur GitHub** :
    *   Sur la page de votre nouveau repository, cliquez sur "uploading an existing file".
    *   Glissez-déposez les fichiers `index.html`, `script.js` et `style.css`.
    *   Cliquez sur "Commit changes".
4.  **Activer GitHub Pages** :
    *   Allez dans l'onglet **Settings** du repository.
    *   Dans le menu de gauche, cliquez sur **Pages**.
    *   Sous "Build and deployment" > "Branch", sélectionnez `main` (ou `master`) et dossier `/ (root)`.
    *   Cliquez sur **Save**.

Attendez quelques minutes, et votre site sera accessible à l'adresse indiquée (ex: `https://votre-pseudo.github.io/portfolio`).

---
*Développé avec ❤️ par votre Assistant IA.*
