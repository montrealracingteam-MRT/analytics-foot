// ===== DONNÉES PAR DÉFAUT =====
const defaultData = {
    journee: 4,
    lastUpdate: "31/08/2026",
    ligue1: {
        teams: {
            "Monaco": { ppm: 3.00, pts: 9, j: 3, g: 3, n: 0, p: 0, gf: 5, ga: 1, off_power: 0.83, def_power: 4.62, conf: 8.5 },
            "Paris FC": { ppm: 2.33, pts: 7, j: 3, g: 2, n: 1, p: 0, gf: 6, ga: 2, off_power: 1.00, def_power: 2.61, conf: 8.0 },
            "Lyon": { ppm: 2.33, pts: 7, j: 3, g: 2, n: 1, p: 0, gf: 6, ga: 2, off_power: 1.00, def_power: 2.61, conf: 7.9 },
            "Lille": { ppm: 2.33, pts: 7, j: 3, g: 2, n: 1, p: 0, gf: 5, ga: 2, off_power: 0.83, def_power: 2.61, conf: 7.5 },
            "Rennes": { ppm: 2.33, pts: 7, j: 3, g: 2, n: 1, p: 0, gf: 7, ga: 5, off_power: 1.17, def_power: 1.13, conf: 6.8 },
            "Strasbourg": { ppm: 2.00, pts: 6, j: 3, g: 2, n: 0, p: 1, gf: 8, ga: 7, off_power: 1.33, def_power: 0.82, conf: 6.1 },
            "Brest": { ppm: 1.67, pts: 5, j: 3, g: 1, n: 2, p: 0, gf: 6, ga: 5, off_power: 1.00, def_power: 1.13, conf: 5.7 },
            "Lorient": { ppm: 1.33, pts: 4, j: 3, g: 1, n: 1, p: 1, gf: 2, ga: 2, off_power: 0.33, def_power: 2.61, conf: 5.5 },
            "Troyes": { ppm: 1.33, pts: 4, j: 3, g: 1, n: 1, p: 1, gf: 4, ga: 7, off_power: 0.67, def_power: 0.82, conf: 4.3 },
            "Marseille": { ppm: 1.00, pts: 3, j: 3, g: 1, n: 0, p: 2, gf: 6, ga: 5, off_power: 1.00, def_power: 1.13, conf: 4.7 },
            "Lens": { ppm: 1.00, pts: 3, j: 3, g: 1, n: 0, p: 2, gf: 6, ga: 5, off_power: 1.00, def_power: 1.13, conf: 4.6 },
            "Angers": { ppm: 1.00, pts: 3, j: 3, g: 1, n: 0, p: 2, gf: 4, ga: 5, off_power: 0.67, def_power: 1.13, conf: 4.0 },
            "PSG": { ppm: 0.67, pts: 2, j: 3, g: 0, n: 2, p: 1, gf: 5, ga: 6, off_power: 0.83, def_power: 0.95, conf: 3.6 },
            "Le Mans": { ppm: 0.67, pts: 2, j: 3, g: 0, n: 2, p: 1, gf: 5, ga: 6, off_power: 0.83, def_power: 0.95, conf: 3.4 },
            "Nice": { ppm: 0.67, pts: 2, j: 3, g: 0, n: 2, p: 1, gf: 1, ga: 4, off_power: 0.17, def_power: 1.40, conf: 3.1 },
            "Le Havre": { ppm: 0.33, pts: 1, j: 3, g: 0, n: 1, p: 2, gf: 2, ga: 4, off_power: 0.33, def_power: 1.40, conf: 2.8 },
            "Toulouse": { ppm: 0.33, pts: 1, j: 3, g: 0, n: 1, p: 2, gf: 2, ga: 5, off_power: 0.33, def_power: 1.13, conf: 2.4 },
            "Auxerre": { ppm: 0.00, pts: 0, j: 3, g: 0, n: 0, p: 3, gf: 4, ga: 11, off_power: 0.67, def_power: 0.53, conf: 1.6 }
        },
        exactitude: [
            { journee: "J1", score: "66.7%", conf: "4.4/10", apprentissage: "Basique, données partielles (3/9)" },
            { journee: "J2", score: "11.1%", conf: "4.4/10", apprentissage: "Momentum trop simple = pire exactitude" },
            { journee: "J3", score: "44.4%", conf: "5.6/10", apprentissage: "Correction patterns (Strasbourg, PSG) = amélioration" },
            { journee: "J4", score: "~50-55% (esp.)", conf: "6.2/10", apprentissage: "argmax(%) strict + max 7% surprise justifiée" }
        ],
        lecons_apprises_full: [
            { journee: "J1", erreur: "Données partielles (3 matchs seulement)", apprentissage: "66.7% = lucky, pas vraie méthodologie" },
            { journee: "J2", erreur: "Momentum trop simpliste. Sur-estimation nuls (38% vs 22% réel)", apprentissage: "11.1% = PIRE exactitude. Besoin refonte." },
            { journee: "J3", erreur: "Strasbourg 2-6 goleada (incompréhensible). PSG toujours mal (0V-2N-1P)", apprentissage: "44.4% = correction J2. 5 indices math créés. Strasbourg 8 buts = meilleure attaque." },
            { journee: "J4", erreur: "Strasbourg X malgré Monaco 43% > 29%. Illogique statistiquement!", apprentissage: "CORRECTION: argmax(%) strict. Auxerre/PSG = patterns = baisse confiance. Max 7% surprise." }
        ],
        pronostics_j4: [
            { match: "Rennes vs Marseille", p1: 74, pn: 10, p2: 16, prono: "1", score: "2-1", conf: 7.2, justif: "Rennes 74% favori (domicile + PPM 2.33). Marseille en crise (PPM 1.00)." },
            { match: "Strasbourg vs Monaco", p1: 29, pn: 28, p2: 43, prono: "2", score: "1-2", conf: 7.1, justif: "Monaco 43% > Strasbourg 29%. Def Monaco 4.62 (meilleure ligue). Leader confirmé." },
            { match: "Auxerre vs Nice", p1: 43, pn: 23, p2: 34, prono: "X", score: "1-1", conf: 3.8, justif: "⚠️ Auxerre 43% mais catastrophe (0pts, -7 diff). Nul probable face équipe fragile. Conf basse." },
            { match: "Havre AC vs Angers", p1: 42, pn: 23, p2: 35, prono: "1", score: "1-0", conf: 4.5, justif: "42% > 35%. Serré. Havre domicile (+3%) vs Angers stable. Confiance baisse = incertitude." },
            { match: "FC Lorient vs Toulouse", p1: 72, pn: 11, p2: 17, prono: "1", score: "2-0", conf: 6.5, justif: "Lorient 72% > Toulouse. 4pts vs 1pt. PPM 1.33 vs 0.33. Domicile boost." },
            { match: "Paris FC vs Lyon", p1: 53, pn: 19, p2: 28, prono: "1", score: "1-0", conf: 6.8, justif: "Paris FC 53% (domicile boost). PPM identique 2.33. Meilleure défense (0.67 GA/J)." },
            { match: "LOSC Lille vs Troyes", p1: 74, pn: 10, p2: 15, prono: "1", score: "2-0", conf: 7.8, justif: "Lille 74% favori. PPM 2.33 vs 1.33. Domicile + power def 2.61. Leader confirmé." },
            { match: "Le Mans FC vs Lens", p1: 47, pn: 19, p2: 34, prono: "1", score: "1-0", conf: 5.2, justif: "LE MANS domicile 47% vs Lens 34%. Serré mais domicile + contexte. Confiance modérée." },
            { match: "Brest vs PSG", p1: 69, pn: 12, p2: 19, prono: "1", score: "2-0", conf: 6.9, justif: "Brest 69% (domicile + PPM 1.67 vs PSG 0.67). PSG en crise (0V-2N-1P). Brest favori." }
        ],
        lecons_apprises: [
            { journee: "J1", erreur: "Basique, données partielles (3/9 visibles)", apprentissage: "Exactitude 66.7% = lucky, pas méthodologie" },
            { journee: "J2", erreur: "Momentum trop simpliste. Sous-estimé nuls.", apprentissage: "11.1% = pire score. Nuls réels 22% vs prédit 38%." },
            { journee: "J3", erreur: "Strasbourg 2-6 = goleada incompréhensible. PSG toujours mal évalué (0V-2N-1P)", apprentissage: "44.4% = correction de J2. Strasbourg meilleure attaque (8 buts). PSG crise profonde." },
            { journee: "J4", erreur: "Strasbourg vs Monaco = prono X alors que Monaco 43% > 29% (ILLOGIQUE!)", apprentissage: "CORRECTION: argmax(%) + max 7% surprise justifiée. Auxerre/PSG = patterns clairs = baisse confiance." }
        ]
    },
    ldc: {
        teams: {
            // === Matchs Mercredi 9 Septembre (CE SOIR) ===
            "Barcelona": { ppm: 3.00, pts: 12, j: 4, g: 4, n: 0, p: 0, gf: 17, ga: 2, off_power: 2.13, def_power: 4.00, conf: 9.2, country: "🇪🇸 La Liga" },
            "Feyenoord": { ppm: 2.20, pts: 11, j: 5, g: 3, n: 2, p: 0, gf: 13, ga: 7, off_power: 1.30, def_power: 1.43, conf: 6.5, country: "🇳🇱 Eredivisie" },
            "Stuttgart": { ppm: 1.50, pts: 3, j: 2, g: 1, n: 0, p: 1, gf: 5, ga: 6, off_power: 1.25, def_power: 0.67, conf: 4.8, country: "🇩🇪 Bundesliga" },
            "Viking": { ppm: 2.32, pts: 44, j: 19, g: 14, n: 2, p: 3, gf: 43, ga: 19, off_power: 1.13, def_power: 2.00, conf: 6.8, country: "🇳🇴 Eliteserien" },
            "Liverpool": { ppm: 1.67, pts: 5, j: 3, g: 1, n: 2, p: 0, gf: 6, ga: 4, off_power: 1.00, def_power: 1.50, conf: 6.0, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League" },
            "Atletico Madrid": { ppm: 1.75, pts: 7, j: 4, g: 2, n: 1, p: 1, gf: 7, ga: 6, off_power: 0.88, def_power: 1.33, conf: 5.5, country: "🇪🇸 La Liga" },
            "PSG": { ppm: 0.67, pts: 2, j: 3, g: 0, n: 2, p: 1, gf: 5, ga: 6, off_power: 0.83, def_power: 1.00, conf: 3.5, country: "🇫🇷 Ligue 1 (CRISE)" },
            "Slovan Bratislava": { ppm: 1.50, pts: 0, j: 0, g: 0, n: 0, p: 0, gf: 0, ga: 0, off_power: 0.75, def_power: 0.90, conf: 3.0, country: "🇸🇰 Fortuna Liga" },
            "Sporting CP": { ppm: 2.20, pts: 0, j: 0, g: 0, n: 0, p: 0, gf: 0, ga: 0, off_power: 1.60, def_power: 2.00, conf: 7.5, country: "🇵🇹 Primeira Liga" },
            "Galatasaray": { ppm: 2.50, pts: 10, j: 4, g: 3, n: 1, p: 0, gf: 12, ga: 6, off_power: 1.50, def_power: 1.33, conf: 7.2, country: "🇹🇷 Süper Lig (Leader)" },
            "Napoli": { ppm: 1.00, pts: 3, j: 3, g: 1, n: 0, p: 2, gf: 5, ga: 5, off_power: 0.83, def_power: 1.20, conf: 4.5, country: "🇮🇹 Serie A (Crise)" },
            "Arsenal": { ppm: 3.00, pts: 9, j: 3, g: 3, n: 0, p: 0, gf: 6, ga: 1, off_power: 1.00, def_power: 6.00, conf: 8.7, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League (Dominant)" },
            // === Mardi 8 Septembre (Déjà joué ou en cours) ===
            "Club Brugge": { ppm: 2.00, pts: 6, j: 3, g: 2, n: 0, p: 1, gf: 5, ga: 2, off_power: 0.83, def_power: 3.00, conf: 6.5, country: "🇧🇪 Pro League" },
            "Aston Villa": { ppm: 0.33, pts: 1, j: 3, g: 0, n: 1, p: 2, gf: 0, ga: 5, off_power: 0.00, def_power: 1.20, conf: 2.8, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League (Crise)" },
            "Real Madrid": { ppm: 2.25, pts: 9, j: 4, g: 3, n: 0, p: 1, gf: 10, ga: 3, off_power: 1.25, def_power: 2.67, conf: 8.0, country: "🇪🇸 La Liga" },
            "Inter": { ppm: 3.00, pts: 9, j: 3, g: 3, n: 0, p: 0, gf: 8, ga: 3, off_power: 1.33, def_power: 2.00, conf: 8.5, country: "🇮🇹 Serie A" },
            "Porto": { ppm: 3.00, pts: 9, j: 3, g: 3, n: 0, p: 0, gf: 8, ga: 2, off_power: 1.33, def_power: 3.00, conf: 8.0, country: "🇵🇹 Primeira Liga" },
            "Manchester City": { ppm: 3.00, pts: 9, j: 3, g: 3, n: 0, p: 0, gf: 7, ga: 2, off_power: 1.17, def_power: 3.00, conf: 8.8, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League" },
            "Lille": { ppm: 2.33, pts: 7, j: 3, g: 2, n: 1, p: 0, gf: 5, ga: 2, off_power: 0.83, def_power: 3.00, conf: 7.5, country: "🇫🇷 Ligue 1" },
            "Real Betis": { ppm: 2.25, pts: 9, j: 4, g: 3, n: 0, p: 1, gf: 5, ga: 5, off_power: 0.63, def_power: 1.60, conf: 6.5, country: "🇪🇸 La Liga" },
            "Borussia Dortmund": { ppm: 3.00, pts: 6, j: 2, g: 2, n: 0, p: 0, gf: 5, ga: 2, off_power: 1.25, def_power: 2.00, conf: 8.0, country: "🇩🇪 Bundesliga" },
            "Villarreal": { ppm: 0.50, pts: 2, j: 4, g: 0, n: 2, p: 2, gf: 6, ga: 8, off_power: 0.75, def_power: 1.00, conf: 3.2, country: "🇪🇸 La Liga (Crise)" },
            // === Jeudi 10 Septembre ===
            "Fenerbahce": { ppm: 1.50, pts: 6, j: 4, g: 2, n: 0, p: 2, gf: 8, ga: 6, off_power: 1.00, def_power: 1.33, conf: 5.0, country: "🇹🇷 Süper Lig" },
            "Roma": { ppm: 3.00, pts: 9, j: 3, g: 3, n: 0, p: 0, gf: 10, ga: 1, off_power: 1.67, def_power: 6.00, conf: 8.8, country: "🇮🇹 Serie A (Leader)" },
            "PSV Eindhoven": { ppm: 2.60, pts: 13, j: 5, g: 4, n: 1, p: 0, gf: 18, ga: 6, off_power: 1.80, def_power: 1.67, conf: 8.0, country: "🇳🇱 Eredivisie" },
            "Shakhtar Donetsk": { ppm: 1.80, pts: 0, j: 0, g: 0, n: 0, p: 0, gf: 0, ga: 0, off_power: 1.00, def_power: 1.20, conf: 5.5, country: "🇺🇦 Prem. League" },
            "Como": { ppm: 2.33, pts: 7, j: 3, g: 2, n: 1, p: 0, gf: 7, ga: 3, off_power: 1.17, def_power: 2.00, conf: 6.5, country: "🇮🇹 Serie A" },
            "RB Leipzig": { ppm: 1.50, pts: 3, j: 2, g: 1, n: 0, p: 1, gf: 4, ga: 3, off_power: 1.00, def_power: 1.33, conf: 5.5, country: "🇩🇪 Bundesliga" },
            "Bayern Munich": { ppm: 2.00, pts: 4, j: 2, g: 1, n: 1, p: 0, gf: 5, ga: 1, off_power: 1.25, def_power: 4.00, conf: 8.0, country: "🇩🇪 Bundesliga" },
            "Bodo Glimt": { ppm: 2.47, pts: 47, j: 19, g: 15, n: 2, p: 2, gf: 49, ga: 15, off_power: 1.29, def_power: 2.53, conf: 7.5, country: "🇳🇴 Eliteserien (Leader, 18 unbeaten!)" },
            "Manchester United": { ppm: 1.33, pts: 4, j: 3, g: 1, n: 1, p: 1, gf: 7, ga: 6, off_power: 1.17, def_power: 1.00, conf: 5.0, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League" },
            "Sabah": { ppm: 1.50, pts: 0, j: 0, g: 0, n: 0, p: 0, gf: 0, ga: 0, off_power: 0.60, def_power: 0.80, conf: 2.5, country: "🇦🇿 Prem. League" },
            "Slavia Praha": { ppm: 2.33, pts: 14, j: 6, g: 4, n: 2, p: 0, gf: 17, ga: 5, off_power: 1.42, def_power: 2.40, conf: 7.5, country: "🇨🇿 Chance Liga (Leader)" },
            "Lens": { ppm: 1.00, pts: 3, j: 3, g: 1, n: 0, p: 2, gf: 6, ga: 5, off_power: 1.00, def_power: 1.20, conf: 4.5, country: "🇫🇷 Ligue 1" },
            "AEK Athens": { ppm: 2.00, pts: 0, j: 0, g: 0, n: 0, p: 0, gf: 0, ga: 0, off_power: 1.20, def_power: 1.50, conf: 5.5, country: "🇬🇷 Super League" },
            "LASK": { ppm: 1.80, pts: 0, j: 0, g: 0, n: 0, p: 0, gf: 0, ga: 0, off_power: 1.10, def_power: 1.20, conf: 4.5, country: "🇦🇹 Bundesliga" }
        },
        pronostics_j1: [
            // MARDI 8 SEPT
            { date: "Mardi 8/9", match: "Club Brugge vs Aston Villa", p1: 55, pn: 25, p2: 20, prono: "1", score: "2-1", conf: 6.5, justif: "Club Brugge domicile solide (PPM 2.0). Aston Villa en CRISE (0V-1N-2P, 0 buts marqués!)" },
            { date: "Mardi 8/9", match: "Real Madrid vs Inter", p1: 38, pn: 27, p2: 35, prono: "1", score: "2-1", conf: 5.5, justif: "Real Madrid domicile + Mourinho retour. Inter PPM 3.0 = très serré. Match sommet." },
            { date: "Mardi 8/9", match: "Porto vs Manchester City", p1: 30, pn: 26, p2: 44, prono: "2", score: "1-2", conf: 7.0, justif: "Man City 44% > Porto 30%. Haaland-power. Man City leader PL. Porto solide mais City supérieur." },
            { date: "Mardi 8/9", match: "Lille vs Real Betis", p1: 45, pn: 27, p2: 28, prono: "1", score: "1-0", conf: 5.8, justif: "Lille domicile + Défense excellente (0.67 GA/J). Betis moyen. Match serré mais Lille légèrement favori." },
            { date: "Mardi 8/9", match: "Borussia Dortmund vs Villarreal", p1: 68, pn: 18, p2: 14, prono: "1", score: "2-0", conf: 8.2, justif: "Dortmund PPM 3.0 vs Villarreal en CRISE (PPM 0.5, 0V-2N-2P). Domicile + power off 1.25." },

            // MERCREDI 9 SEPT (CE SOIR!)
            { date: "Mercredi 9/9 🔥", match: "Barcelona vs Feyenoord", p1: 78, pn: 12, p2: 10, prono: "1", score: "3-1", conf: 8.5, justif: "⭐ Barcelona LEADER La Liga (4V-0N-0P, GF 17!, +15 diff). Feyenoord solide mais énorme écart de niveau." },
            { date: "Mercredi 9/9 🔥", match: "Stuttgart vs Viking", p1: 55, pn: 22, p2: 23, prono: "1", score: "2-1", conf: 6.0, justif: "Stuttgart domicile + Bundesliga. Viking bon (2e Norvège, PPM 2.32) mais niveau inférieur." },
            { date: "Mercredi 9/9 🔥", match: "Liverpool vs Atletico Madrid", p1: 52, pn: 25, p2: 23, prono: "1", score: "2-1", conf: 6.5, justif: "Liverpool domicile Anfield (+3% boost). PPM 1.67 vs 1.75 = quasi égal. Domicile crucial." },
            { date: "Mercredi 9/9 🔥", match: "PSG vs Slovan Bratislava", p1: 62, pn: 20, p2: 18, prono: "1", score: "2-1", conf: 5.5, justif: "⚠️ PSG en CRISE (0V-2N-1P, PPM 0.67!) MAIS domicile + niveau supérieur à Slovan. Confiance modérée." },
            { date: "Mercredi 9/9 🔥", match: "Sporting CP vs Galatasaray", p1: 42, pn: 28, p2: 30, prono: "1", score: "1-1", conf: 4.8, justif: "Match TRÈS serré. Sporting domicile. Galatasaray leader Süper Lig (PPM 2.5). Confiance basse = incertitude." },
            { date: "Mercredi 9/9 🔥", match: "Napoli vs Arsenal", p1: 30, pn: 25, p2: 45, prono: "2", score: "1-2", conf: 7.2, justif: "⭐ Arsenal DOMINANT PL (3V-0N-0P, GF 6, GA 1!). Napoli CRISE Serie A (1V-0N-2P). Arsenal 45% > Napoli 30%." },

            // JEUDI 10 SEPT
            { date: "Jeudi 10/9", match: "AEK Athens vs LASK", p1: 50, pn: 28, p2: 22, prono: "1", score: "1-1", conf: 4.5, justif: "AEK domicile. LASK a battu Celtic (5-1). Match serré, confiance basse." },
            { date: "Jeudi 10/9", match: "Fenerbahce vs Roma", p1: 30, pn: 25, p2: 45, prono: "2", score: "1-2", conf: 7.0, justif: "⭐ Roma LEADER Serie A (3V-0N-0P, GF 10, GA 1, +9!). Fenerbahce PPM 1.5 = niveau inférieur." },
            { date: "Jeudi 10/9", match: "PSV vs Shakhtar Donetsk", p1: 68, pn: 20, p2: 12, prono: "1", score: "2-0", conf: 7.5, justif: "PSV excellent (PPM 2.60, GF 18/5). Domicile fort. Shakhtar joue exilé. Grande différence." },
            { date: "Jeudi 10/9", match: "Como vs RB Leipzig", p1: 48, pn: 27, p2: 25, prono: "1", score: "1-1", conf: 5.0, justif: "Como surprise Serie A (PPM 2.33). Leipzig moyen. Domicile Como avantage mais confiance basse." },
            { date: "Jeudi 10/9", match: "Bayern Munich vs Bodo Glimt", p1: 72, pn: 18, p2: 10, prono: "1", score: "3-1", conf: 7.8, justif: "⭐ Bayern domicile + Kane-power. Bodø/Glimt surprenants (18 matchs unbeaten Norvège!) mais niveau différent." },
            { date: "Jeudi 10/9", match: "Manchester United vs Sabah", p1: 82, pn: 12, p2: 6, prono: "1", score: "3-0", conf: 8.0, justif: "Man Utd domicile + Premier League. Sabah = qualifié via play-off, niveau très inférieur." },
            { date: "Jeudi 10/9", match: "Slavia Praha vs Lens", p1: 52, pn: 27, p2: 21, prono: "1", score: "2-1", conf: 6.2, justif: "Slavia LEADER Chance Liga (unbeaten 6 matchs). Domicile fort. Lens en Ligue 1 mais forme moyenne." }
        ]
    }
};

// ===== CHARGER DONNÉES OU VALEURS PAR DÉFAUT =====
function loadData() {
    let storedData = localStorage.getItem('analyticsData');
    if (storedData) {
        try {
            return JSON.parse(storedData);
        } catch (e) {
            console.error("Erreur parsing données", e);
            return defaultData;
        }
    }
    return defaultData;
}

// ===== SAUVEGARDER DONNÉES =====
function saveData(data) {
    localStorage.setItem('analyticsData', JSON.stringify(data));
    document.getElementById('last-update').textContent = new Date().toLocaleDateString('fr-FR');
}

// ===== INITIALISER APP =====
let appData = loadData();

document.addEventListener('DOMContentLoaded', function() {
    renderLigue1();
    renderLDC();
    renderLessonsLearned();
    document.getElementById('last-update').textContent = appData.lastUpdate;
});

// ===== RENDU LIGUE 1 =====
function renderLigue1() {
    // PPM Table
    const ppmTable = document.getElementById('ppm-table');
    ppmTable.innerHTML = '';
    
    let teamsSortedByPPM = Object.entries(appData.ligue1.teams)
        .sort((a, b) => b[1].ppm - a[1].ppm);
    
    teamsSortedByPPM.forEach(([team, stats]) => {
        let trend = '';
        if (stats.ppm >= 3.0) trend = '🔥 Excellent';
        else if (stats.ppm >= 2.3) trend = '✅ Bon';
        else if (stats.ppm >= 1.5) trend = '🟡 Moyen';
        else trend = '🔴 Faible';
        
        ppmTable.innerHTML += `
            <tr>
                <td><strong>${team}</strong></td>
                <td>${stats.ppm.toFixed(2)}</td>
                <td>${stats.pts}</td>
                <td>${stats.j}</td>
                <td>${trend}</td>
            </tr>
        `;
    });

    // Power Rating Table
    const powerTable = document.getElementById('power-table');
    powerTable.innerHTML = '';
    
    let teamsSortedByOff = Object.entries(appData.ligue1.teams)
        .sort((a, b) => b[1].off_power - a[1].off_power);
    
    teamsSortedByOff.slice(0, 12).forEach(([team, stats]) => {
        powerTable.innerHTML += `
            <tr>
                <td><strong>${team}</strong></td>
                <td>${(stats.gf / stats.j).toFixed(2)}</td>
                <td>${(stats.ga / stats.j).toFixed(2)}</td>
                <td>${stats.off_power.toFixed(2)}</td>
                <td>${stats.def_power.toFixed(2)}</td>
            </tr>
        `;
    });

    // Confidence Table
    const confTable = document.getElementById('confidence-table');
    confTable.innerHTML = '';
    
    let teamsSortedByConf = Object.entries(appData.ligue1.teams)
        .sort((a, b) => b[1].conf - a[1].conf);
    
    teamsSortedByConf.forEach(([team, stats]) => {
        let notation = '';
        if (stats.conf >= 8) notation = '🔥 Très Fiable';
        else if (stats.conf >= 7) notation = '✅ Fiable';
        else if (stats.conf >= 5) notation = '🟡 Modéré';
        else notation = '🔴 Faible';
        
        confTable.innerHTML += `
            <tr>
                <td><strong>${team}</strong></td>
                <td>${stats.conf.toFixed(1)}/10</td>
                <td>${notation}</td>
            </tr>
        `;
    });

    // Classement Table
    const classTable = document.getElementById('classement-table');
    classTable.innerHTML = '';
    
    let teamsSortedByPts = Object.entries(appData.ligue1.teams)
        .sort((a, b) => b[1].pts - a[1].pts);
    
    teamsSortedByPts.forEach(([ team, stats], index) => {
        let diff = stats.gf - stats.ga;
        classTable.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${team}</strong></td>
                <td>${stats.pts}</td>
                <td>${stats.j}</td>
                <td>${stats.g}</td>
                <td>${stats.n}</td>
                <td>${stats.p}</td>
                <td>${diff > 0 ? '+' : ''}${diff}</td>
            </tr>
        `;
    });

    // Pronostics J4
    const pronosContainer = document.getElementById('pronostics-j4');
    pronosContainer.innerHTML = '';
    
    let confTotal = 0;
    appData.ligue1.pronostics_j4.forEach((prono, idx) => {
        confTotal += prono.conf;
        
        let pronoDisplay = prono.prono;
        if (prono.prono === '1') pronoDisplay = '🏠 Domicile';
        if (prono.prono === 'X') pronoDisplay = '🤝 Nul';
        if (prono.prono === '2') pronoDisplay = '✈️ Extérieur';
        
        // Déterminer la couleur de confiance
        let confColor = '';
        if (prono.conf >= 7) confColor = 'high-conf';
        else if (prono.conf >= 5) confColor = 'mid-conf';
        else confColor = 'low-conf';
        
        // Emoji leçon si pertinent
        let leconEmoji = prono.justif && prono.justif.includes('LEÇON') ? '📚' : '';
        
        pronosContainer.innerHTML += `
            <div class="prono-card ${confColor}">
                <div class="prono-header">
                    <div class="prono-match">${leconEmoji} ${prono.match}</div>
                    <div class="conf-badge-inline">${prono.conf.toFixed(1)}/10</div>
                </div>
                
                <div class="prono-probas">
                    <div class="proba-badge ${prono.p1 > 45 ? 'high' : ''}" title="Domicile">1: ${prono.p1}%</div>
                    <div class="proba-badge ${prono.pn > 40 ? 'high' : ''}" title="Nul">N: ${prono.pn}%</div>
                    <div class="proba-badge ${prono.p2 > 45 ? 'high' : ''}" title="Extérieur">2: ${prono.p2}%</div>
                </div>
                
                <div class="prono-predi">${pronoDisplay}</div>
                <div class="prono-score">Score potentiel: <strong>${prono.score}</strong></div>
                
                <div class="prono-justif">
                    <strong>Justification:</strong>
                    <p>${prono.justif || 'Stats pures (argmax %)'}</p>
                </div>
                
                <div class="confiance-bar">
                    <div class="confiance-fill" style="width: ${prono.conf * 10}%"></div>
                </div>
            </div>
        `;
    });
    
    document.getElementById('conf-avg-j4').textContent = (confTotal / appData.ligue1.pronostics_j4.length).toFixed(1);
    document.getElementById('exactitude-j3').textContent = '44.4';
}

// ===== RENDU LEÇONS APPRISES =====
function renderLessonsLearned() {
    // Cette fonction s'ajoute à renderLigue1() pour afficher leçons dans Analytics
    const analyticsTable = document.getElementById('analytics-table');
    
    // Ajouter lignes leçons apprises
    if (appData.ligue1.lecons_apprises) {
        analyticsTable.innerHTML = '';
        
        // Table historique
        const rows = [
            { journee: "J1", exactitude: "66.7%", confiance: "4.4/10", methodo: "Basique (momentum simple)" },
            { journee: "J2", exactitude: "11.1%", confiance: "4.4/10", methodo: "Momentum trop simple = PIRE" },
            { journee: "J3", exactitude: "44.4%", confiance: "5.6/10", methodo: "Correction patterns (Strasbourg, PSG)" },
            { journee: "J4", exactitude: "~50-55% (esp.)", confiance: "6.2/10", methodo: "5 indices math robustes + argmax %" }
        ];
        
        rows.forEach(row => {
            analyticsTable.innerHTML += `
                <tr>
                    <td><strong>${row.journee}</strong></td>
                    <td>${row.exactitude}</td>
                    <td>${row.confiance}</td>
                    <td>${row.methodo}</td>
                </tr>
            `;
        });
    }
}

// ===== RENDU LDC =====
function renderLDC() {
    // Afficher équipes avec base math
    const ldcGroups = document.getElementById('ldc-groups');
    ldcGroups.innerHTML = `
        <div class="info-box" style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin-bottom: 20px; border-radius: 6px;">
            <p style="color: #1e40af; margin: 0;"><strong>⚽ Champions League 2026-2027 - Journée 1</strong></p>
            <p style="color: #1e40af; margin: 5px 0 0 0;">Analyse basée sur performances dans championnats nationaux (début saison)</p>
        </div>
        
        <h3 style="color: var(--primary); margin-top: 30px;">📊 Confiance des Équipes (Multi-facteurs)</h3>
        <table class="math-table" style="width: 100%; margin-bottom: 30px;">
            <thead>
                <tr>
                    <th>Équipe</th>
                    <th>Championnat</th>
                    <th>PPM</th>
                    <th>Confiance</th>
                    <th>Statut</th>
                </tr>
            </thead>
            <tbody id="ldc-teams-table"></tbody>
        </table>
    `;
    
    // Remplir tableau équipes triées par confiance
    const teamsTable = document.getElementById('ldc-teams-table');
    if (appData.ldc && appData.ldc.teams) {
        let teamsSorted = Object.entries(appData.ldc.teams)
            .sort((a, b) => b[1].conf - a[1].conf);
        
        teamsSorted.forEach(([team, stats]) => {
            let statut = '';
            if (stats.conf >= 8) statut = '🔥 Excellent';
            else if (stats.conf >= 7) statut = '✅ Très fiable';
            else if (stats.conf >= 5.5) statut = '🟡 Correct';
            else if (stats.conf >= 4) statut = '🟠 Moyen';
            else statut = '🔴 Crise/Incertain';
            
            teamsTable.innerHTML += `
                <tr>
                    <td><strong>${team}</strong></td>
                    <td>${stats.country}</td>
                    <td>${stats.ppm.toFixed(2)}</td>
                    <td>${stats.conf.toFixed(1)}/10</td>
                    <td>${statut}</td>
                </tr>
            `;
        });
    }
    
    // Afficher pronostics
    const ldcProno = document.getElementById('ldc-pronostics');
    ldcProno.innerHTML = '';
    
    if (appData.ldc && appData.ldc.pronostics_j1) {
        let currentDate = '';
        let confTotal = 0;
        
        appData.ldc.pronostics_j1.forEach((prono, idx) => {
            confTotal += prono.conf;
            
            // Ajouter séparateur de date
            if (prono.date !== currentDate) {
                ldcProno.innerHTML += `<h3 style="color: var(--primary); grid-column: 1/-1; margin-top: 30px; padding-top: 20px; border-top: 2px solid var(--secondary);">${prono.date}</h3>`;
                currentDate = prono.date;
            }
            
            let pronoDisplay = prono.prono;
            if (prono.prono === '1') pronoDisplay = '🏠 Domicile';
            if (prono.prono === 'X') pronoDisplay = '🤝 Nul';
            if (prono.prono === '2') pronoDisplay = '✈️ Extérieur';
            
            let confColor = '';
            if (prono.conf >= 7) confColor = 'high-conf';
            else if (prono.conf >= 5) confColor = 'mid-conf';
            else confColor = 'low-conf';
            
            let leconEmoji = prono.justif && prono.justif.includes('⭐') ? '⭐' : (prono.justif && prono.justif.includes('⚠️') ? '⚠️' : '');
            
            ldcProno.innerHTML += `
                <div class="prono-card ${confColor}">
                    <div class="prono-header">
                        <div class="prono-match">${leconEmoji} ${prono.match}</div>
                        <div class="conf-badge-inline">${prono.conf.toFixed(1)}/10</div>
                    </div>
                    <div class="prono-probas">
                        <div class="proba-badge ${prono.p1 > 45 ? 'high' : ''}">1: ${prono.p1}%</div>
                        <div class="proba-badge ${prono.pn > 40 ? 'high' : ''}">N: ${prono.pn}%</div>
                        <div class="proba-badge ${prono.p2 > 45 ? 'high' : ''}">2: ${prono.p2}%</div>
                    </div>
                    <div class="prono-predi">${pronoDisplay}</div>
                    <div class="prono-score">Score potentiel: <strong>${prono.score}</strong></div>
                    <div class="prono-justif">
                        <strong>Analyse:</strong>
                        <p>${prono.justif}</p>
                    </div>
                    <div class="confiance-bar">
                        <div class="confiance-fill" style="width: ${prono.conf * 10}%"></div>
                    </div>
                </div>
            `;
        });
        
        // Ajouter statistiques
        const avgConf = confTotal / appData.ldc.pronostics_j1.length;
        ldcProno.innerHTML += `
            <div class="stats-footer" style="grid-column: 1/-1; margin-top: 30px;">
                <span>Total matchs: <strong>${appData.ldc.pronostics_j1.length}</strong></span>
                <span>Confiance moyenne: <strong>${avgConf.toFixed(1)}/10</strong></span>
                <span>Journée 1 - 8, 9 et 10 Sept 2026</span>
            </div>
        `;
    }
}

// ===== SWITCH TABS =====
function switchTab(tabName) {
    // Masquer tous les tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Masquer tous les boutons actifs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activer le tab sélectionné
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Activer le bouton
    event.target.classList.add('active');
}

// ===== MODAL UPDATE =====
function openUpdateModal() {
    document.getElementById('updateModal').classList.add('open');
}

function closeUpdateModal() {
    document.getElementById('updateModal').classList.remove('open');
}

function importJSON() {
    const jsonInput = document.getElementById('jsonInput').value;
    
    if (!jsonInput.trim()) {
        alert('Veuillez coller un JSON valide');
        return;
    }
    
    try {
        const newData = JSON.parse(jsonInput);
        appData = { ...appData, ...newData };
        saveData(appData);
        renderLigue1();
        renderLDC();
        closeUpdateModal();
        alert('✅ Données importées avec succès!');
    } catch (e) {
        alert('❌ JSON invalide: ' + e.message);
    }
}

function downloadData() {
    const dataStr = JSON.stringify(appData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analytics-foot-J${appData.journee}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function resetData() {
    if (confirm('⚠️ Êtes-vous sûr? Cela réinitialisera TOUTES les données!')) {
        localStorage.removeItem('analyticsData');
        appData = defaultData;
        renderLigue1();
        renderLDC();
        alert('✅ Données réinitialisées');
    }
}

// Fermer modal en cliquant en dehors
window.onclick = function(event) {
    let modal = document.getElementById('updateModal');
    if (event.target == modal) {
        modal.classList.remove('open');
    }
}
