# 📥 Template Mise à Jour Données

## Comment utiliser ce template

**Après chaque journée réelle (samedi):**

1. **Recevoir les données** de Claude
2. **Copier le JSON** complet ci-dessous
3. **Ouvrir le site** → Footer → "📥 Importer JSON"
4. **Coller le JSON**
5. **Cliquer "Importer"**
6. ✅ **Données à jour!**

---

## 📋 Étapes détaillées

### AVANT J4 (11-13 SEPT) - Après résultats J3

**Step 1**: Claude fourni analyse J3
```
Exactitude: 44.4%
Erreurs: PSG 1-2, Lens 0-1, Nice 1-1, Le Havre 1-2, Troyes 2-6
Patterns: Strasbourg explosive, Monaco dominant, buteurs à tracker
```

**Step 2**: Claude fourni base math V2
```
PPM, Power Ratings, Confiance mises à jour pour J4
```

**Step 3**: Claude fourni pronostics J4
```
9 matchs avec probabilités et confiance
```

**Step 4**: Tu copies le JSON fourni (voir exemple ci-dessous)

**Step 5**: Tu colles dans le site

---

## 🔄 Cycle hebdomadaire

```
SAMEDI: J réelle terminée
    ↓
DIMANCHE: Claude analyse + base math V2 + pronostics Jn+1
    ↓
LUNDI: Tu importes les données
    ↓
MARDI-MERCREDI: Consultation pronostics
    ↓
JEUDI: Ajustements avant matchs
    ↓
SAMEDI: Nouvelle journée → Boucle recommence
```

---

## 📦 Exemple Template JSON (COMPLET)

### À adapter chaque journée

```json
{
  "journee": 4,
  "lastUpdate": "11/09/2026",
  "ligue1": {
    "teams": {
      "Monaco": {
        "ppm": 3.00,
        "pts": 12,
        "j": 4,
        "g": 4,
        "n": 0,
        "p": 0,
        "gf": 8,
        "ga": 2,
        "off_power": 1.00,
        "def_power": 3.50,
        "conf": 8.7
      },
      "Paris FC": {
        "ppm": 2.50,
        "pts": 10,
        "j": 4,
        "g": 3,
        "n": 1,
        "p": 0,
        "gf": 7,
        "ga": 2,
        "off_power": 0.88,
        "def_power": 3.00,
        "conf": 8.2
      },
      "Lyon": {
        "ppm": 2.50,
        "pts": 10,
        "j": 4,
        "g": 3,
        "n": 1,
        "p": 0,
        "gf": 8,
        "ga": 3,
        "off_power": 1.00,
        "def_power": 2.67,
        "conf": 8.0
      },
      "Lille": {
        "ppm": 2.50,
        "pts": 10,
        "j": 4,
        "g": 3,
        "n": 1,
        "p": 0,
        "gf": 7,
        "ga": 2,
        "off_power": 0.88,
        "def_power": 3.00,
        "conf": 7.6
      },
      "Rennes": {
        "ppm": 2.25,
        "pts": 9,
        "j": 4,
        "g": 3,
        "n": 0,
        "p": 1,
        "gf": 9,
        "ga": 6,
        "off_power": 1.13,
        "def_power": 1.67,
        "conf": 7.0
      },
      "Strasbourg": {
        "ppm": 2.00,
        "pts": 8,
        "j": 4,
        "g": 2,
        "n": 2,
        "p": 0,
        "gf": 10,
        "ga": 8,
        "off_power": 1.25,
        "def_power": 1.25,
        "conf": 6.5
      },
      "Brest": {
        "ppm": 1.75,
        "pts": 7,
        "j": 4,
        "g": 2,
        "n": 1,
        "p": 1,
        "gf": 8,
        "ga": 6,
        "off_power": 1.00,
        "def_power": 1.67,
        "conf": 6.0
      },
      "Lorient": {
        "ppm": 1.50,
        "pts": 6,
        "j": 4,
        "g": 2,
        "n": 0,
        "p": 2,
        "gf": 4,
        "ga": 4,
        "off_power": 0.50,
        "def_power": 2.00,
        "conf": 5.8
      },
      "Troyes": {
        "ppm": 1.25,
        "pts": 5,
        "j": 4,
        "g": 1,
        "n": 2,
        "p": 1,
        "gf": 5,
        "ga": 8,
        "off_power": 0.63,
        "def_power": 1.25,
        "conf": 4.5
      },
      "Marseille": {
        "ppm": 1.25,
        "pts": 5,
        "j": 4,
        "g": 1,
        "n": 2,
        "p": 1,
        "gf": 7,
        "ga": 6,
        "off_power": 0.88,
        "def_power": 1.67,
        "conf": 5.0
      },
      "Lens": {
        "ppm": 1.00,
        "pts": 4,
        "j": 4,
        "g": 1,
        "n": 1,
        "p": 2,
        "gf": 6,
        "ga": 6,
        "off_power": 0.75,
        "def_power": 1.67,
        "conf": 4.7
      },
      "Angers": {
        "ppm": 0.75,
        "pts": 3,
        "j": 4,
        "g": 1,
        "n": 0,
        "p": 3,
        "gf": 4,
        "ga": 7,
        "off_power": 0.50,
        "def_power": 1.43,
        "conf": 4.0
      },
      "PSG": {
        "ppm": 0.75,
        "pts": 3,
        "j": 4,
        "g": 0,
        "n": 3,
        "p": 1,
        "gf": 6,
        "ga": 8,
        "off_power": 0.75,
        "def_power": 1.25,
        "conf": 3.8
      },
      "Le Mans": {
        "ppm": 0.75,
        "pts": 3,
        "j": 4,
        "g": 0,
        "n": 3,
        "p": 1,
        "gf": 5,
        "ga": 7,
        "off_power": 0.63,
        "def_power": 1.43,
        "conf": 3.5
      },
      "Nice": {
        "ppm": 0.75,
        "pts": 3,
        "j": 4,
        "g": 0,
        "n": 3,
        "p": 1,
        "gf": 2,
        "ga": 5,
        "off_power": 0.25,
        "def_power": 2.00,
        "conf": 3.3
      },
      "Le Havre": {
        "ppm": 0.50,
        "pts": 2,
        "j": 4,
        "g": 0,
        "n": 2,
        "p": 2,
        "gf": 2,
        "ga": 5,
        "off_power": 0.25,
        "def_power": 2.00,
        "conf": 3.0
      },
      "Toulouse": {
        "ppm": 0.50,
        "pts": 2,
        "j": 4,
        "g": 0,
        "n": 2,
        "p": 2,
        "gf": 2,
        "ga": 6,
        "off_power": 0.25,
        "def_power": 1.67,
        "conf": 2.7
      },
      "Auxerre": {
        "ppm": 0.00,
        "pts": 0,
        "j": 4,
        "g": 0,
        "n": 0,
        "p": 4,
        "gf": 4,
        "ga": 14,
        "off_power": 0.50,
        "def_power": 0.67,
        "conf": 1.5
      }
    },
    "exactitude": [
      { "journee": "J1", "score": "66.7%", "conf": "4.4/10" },
      { "journee": "J2", "score": "11.1%", "conf": "4.4/10" },
      { "journee": "J3", "score": "44.4%", "conf": "5.6/10" },
      { "journee": "J4", "score": "55.0%", "conf": "5.1/10" }
    ],
    "pronostics_j5": [
      {
        "match": "Monaco vs Strasbourg",
        "p1": 60,
        "pn": 20,
        "p2": 20,
        "prono": "1",
        "score": "2-0",
        "conf": 6.5
      },
      {
        "match": "Paris FC vs Rennes",
        "p1": 45,
        "pn": 25,
        "p2": 30,
        "prono": "X",
        "score": "1-1",
        "conf": 5.0
      },
      {
        "match": "Lyon vs Lens",
        "p1": 70,
        "pn": 15,
        "p2": 15,
        "prono": "1",
        "score": "2-0",
        "conf": 6.2
      }
    ]
  },
  "ldc": {
    "note": "À venir avec pronostics Champions League",
    "groupes": [],
    "pronostics": []
  }
}
```

---

## 🔍 Que changer à chaque mise à jour

### Obligatoire:
- `journee`: Numéro J (3 → 4 → 5...)
- `lastUpdate`: Date actuelle (JJ/MM/YYYY)

### Teams (À jour après chaque J):
- `ppm`: PPM recalculé
- `pts`, `j`, `g`, `n`, `p`: Statistiques mises à jour
- `gf`, `ga`: Buts marqués/encaissés totaux
- `off_power`, `def_power`: Recalculés
- `conf`: Nouvelle confiance

### Exactitude (À ajouter):
- Ajouter ligne `{ "journee": "J4", "score": "XX%", "conf": "X.X/10" }`

### Pronostics (Renommer):
- `pronostics_j4` → `pronostics_j5` (quand vient J5)
- Ajouter tous les matchs
- Mettre probabilités, pronostic, score, confiance

---

## ✅ Vérifier avant import

1. **JSON valide?** Tester sur https://jsonlint.com/
2. **Tous les teams?** 18 équipes obligatoirement
3. **Champs requis?** ppm, pts, j, g, n, p, gf, ga, off_power, def_power, conf
4. **Matchups J5?** 9 matchs complets

---

## 💾 Sauvegarde

Après chaque import réussi:
- Cliquer "📤 Exporter" (Footer)
- Sauvegarder le fichier JSON
- Backup chaque J = sécurité!

---

✨ **Système prêt! Tu peux mettre à jour chaque J sans modification!**
