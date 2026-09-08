# 🎯 Analytics Foot Pro v2.0

Site professionnel de pronostics football - Ligue 1 & Champions League

## 🚀 Nouveautés v2.0

### ✨ Interface Modernisée
- **Sidebar navigation** avec 8 sections
- **Dashboard** vue d'ensemble avec métriques
- **Graphiques Chart.js** interactifs
- **Design premium** avec gradients et animations

### 📊 Nouvelles Fonctionnalités

1. **Dashboard** - Vue d'ensemble avec KPIs clés
2. **Sélecteur de Journée** - Navigate entre toutes les J passées/futures
3. **Historique Complet** - Tous les pronostics + résultats réels
4. **Recherche par Équipe** - Analyse détaillée de chaque équipe
5. **Analytics Avancés** - 3 graphiques (Exactitude, Distribution, Confiance vs Réel)
6. **Apprentissage** - Timeline visuelle des leçons + formulaire ajout
7. **Saisie Résultats Réels** - Compare prédit vs réel automatiquement
8. **Import/Export JSON** - Facile mise à jour

## 📁 Structure

```
analytics-foot-v2/
├── index.html      → Structure du site
├── style.css       → Design moderne (gradients, animations)
├── data.js         → Données structurées (L1 + LDC + Leçons)
├── app.js          → Logique complète
└── README.md       → Ce fichier
```

## 🎨 Sections du Site

### 1. 📊 Dashboard
- 4 métriques principales (Exactitude, Meilleure J, Total, Confiance)
- 2 graphiques (Évolution + Distribution)
- Accès rapide vers L1, LDC, Apprentissage

### 2. 🇫🇷 Ligue 1
- Sélecteur de journée (J1 → J34)
- Stats de la journée (Date, matchs, confiance, exactitude)
- Cartes pronostics avec justifications
- Classement dynamique avec forme (V/N/P)
- Base mathématique (PPM, Power, Confiance)

### 3. 🏆 Champions League
- Sélecteur journée LDC
- Pronostics groupés par jour (Mar/Mer/Jeu)
- Table équipes avec drapeaux et championnats

### 4. 📚 Historique
- Toutes les journées passées
- Comparaison Prédit vs Réel (✅/❌)
- Filtrage L1 ou LDC

### 5. 🔍 Recherche Équipes
- Recherche instantanée
- Fiche complète par équipe:
  - Stats (PPM, points, buts)
  - Historique pronostics
  - Exactitude par équipe

### 6. 📈 Analytics
- Graphique exactitude par journée
- Distribution des résultats
- Comparaison Confiance vs Exactitude

### 7. 🧠 Apprentissage
- Timeline visuelle des leçons
- KPIs objectifs (Court/Moyen/Long terme)
- **Formulaire d'ajout de leçon** (persistant!)

### 8. ⚙️ Paramètres
- Import JSON (mise à jour données)
- Export JSON (backup)
- Saisie résultats réels
- Réinitialiser

## 🔄 Workflow Hebdomadaire

```
SAMEDI: Journée réelle
  ↓
DIMANCHE: Claude analyse + nouveaux pronos (JSON)
  ↓
LUNDI: 
  1. Ouvrir Paramètres → Saisir Résultats Réels (pour J précédente)
  2. Ouvrir Paramètres → Importer JSON (nouveaux pronos)
  ↓
MARDI-JEUDI: Consulter Dashboard + Pronostics
  ↓
Boucle continue
```

## 💾 Persistance des Données

- **localStorage** - Tes données restent entre sessions
- **Export JSON** - Backup à télécharger chaque semaine
- **Import JSON** - Restaurer un backup ou charger nouvelle J

## 🚀 Déploiement Vercel

1. Push les fichiers sur GitHub (analytics-foot)
2. Vercel redéploie automatiquement
3. Site en ligne: https://analytics-foot.vercel.app

## 🎯 Prochaines Améliorations

- [ ] Machine Learning pour auto-ajustement formules
- [ ] Notifications push avant matchs
- [ ] Export PDF pronostics
- [ ] Mode sombre
- [ ] Statistiques par championnat national
- [ ] Prédiction buteurs

---

**Version 2.0** - Refonte complète
Créé le: 08/09/2026
