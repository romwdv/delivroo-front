# 🛵 Delivroo — Clone Frontend React

> Application de commande de repas en ligne réalisée dans le cadre d'une formation chez **Le Reacteur**.

---

## 📋 Présentation

Ce projet est un clone simplifié de Deliveroo construit avec React. Il consomme une API REST déployée séparément et permet à l'utilisateur de consulter le menu d'un restaurant.

- **Afficher** les informations du restaurant (nom, description, photo)
- **Parcourir** les catégories et les plats du menu
- **Visualiser** le prix et la popularité de chaque plat
- **Panier** — gestion en cours de développement

🔗 **Demo** : [https://delivroum.netlify.app/](https://delivroum.netlify.app/)

---

## 🛠️ Technologies utilisées

| Technologie | Usage                                     |
| ----------- | ----------------------------------------- |
| React 19    | Framework UI, composants fonctionnels     |
| useState    | Gestion de l'état local (panier, données) |
| useEffect   | Chargement des données au montage         |
| Axios       | Requêtes HTTP vers l'API backend          |
| React Icons | Icônes (étoile populaire, etc.)           |
| Vite        | Bundler et serveur de développement       |
| CSS3        | Mise en page responsive                   |

---

## 🗂️ Structure du projet

```
📁 delivroofront/
├── 📁 src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── 📁 Components/
│       ├── Header.jsx
│       └── Content.jsx
├── 📁 public/
│   ├── favicon.svg
│   └── icons.svg
└── package.json
```

---

## ⚙️ Fonctionnalités

### Affichage restaurant

- Récupération des données via `useEffect` + `axios` au montage du composant
- Affichage du nom, de la description et de la photo du restaurant
- Affichage des catégories et plats avec description, prix et badge « Populaire »

### Architecture des composants

| Composant     | Rôle                                                  |
| ------------- | ----------------------------------------------------- |
| `App.jsx`     | Composant racine, fetch des données, gestion du state |
| `Header.jsx`  | Logo Deliveroo + infos du restaurant                  |
| `Content.jsx` | Menu par catégories + zone panier                     |

### Responsive

L'interface s'adapte aux petits écrans (mobile, tablette) grâce à des media queries CSS.

---

## 🔜 À venir

- [ ] Ajout de produits au panier
- [ ] Suppression de produits du panier
- [ ] Calcul du total et validation de commande

---

## 🔗 Backend

L'API est hébergée sur un dépôt séparé et déployée sur **Northflank**.

| Ressource          | Lien                                                                             |
| ------------------ | -------------------------------------------------------------------------------- |
| Repo backend       | [github.com/romwdv/delivroo-backend](https://github.com/romwdv/delivroo-backend) |
| Endpoint principal | `GET /data` → restaurant + catégories + plats                                    |

---

## 🚀 Lancer le projet en local

```bash
# Cloner le dépôt
git clone https://github.com/romwdv/delivroofront.git

# Installer les dépendances
cd delivroofront
yarn install

# Lancer le projet
yarn dev
```

> ⚠️ Le backend doit être accessible pour que les données s'affichent. En local, vérifiez que l'URL de l'API dans `App.jsx` pointe vers le bon endpoint.

---

## 👤 Auteur

Exercice réalisé par **Romain** dans le cadre de la formation **[Le Reacteur](https://www.lereacteur.io/)**.
