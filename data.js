// ==================== DONNÉES SITE ANALYTICS FOOT v2.0 ====================
// Structure: Toutes les données pronostics + résultats historiques
// Mise à jour: Chaque J, remplacer sur GitHub

const APP_DATA = {
    version: "2.0",
    lastUpdate: "08/09/2026",
    
    // ==================== LIGUE 1 ====================
    ligue1: {
        // CLASSEMENT ACTUEL
        classement: {
            "Monaco": { pts: 9, j: 3, g: 3, n: 0, p: 0, gf: 5, ga: 1, forme: ["V","V","V"] },
            "Paris FC": { pts: 7, j: 3, g: 2, n: 1, p: 0, gf: 6, ga: 2, forme: ["V","N","V"] },
            "Lyon": { pts: 7, j: 3, g: 2, n: 1, p: 0, gf: 6, ga: 2, forme: ["N","V","V"] },
            "Lille": { pts: 7, j: 3, g: 2, n: 1, p: 0, gf: 5, ga: 2, forme: ["V","N","V"] },
            "Rennes": { pts: 7, j: 3, g: 2, n: 1, p: 0, gf: 7, ga: 5, forme: ["N","V","V"] },
            "Strasbourg": { pts: 6, j: 3, g: 2, n: 0, p: 1, gf: 8, ga: 7, forme: ["P","V","V"] },
            "Brest": { pts: 5, j: 3, g: 1, n: 2, p: 0, gf: 6, ga: 5, forme: ["N","N","V"] },
            "Lorient": { pts: 4, j: 3, g: 1, n: 1, p: 1, gf: 2, ga: 2, forme: ["V","P","N"] },
            "Troyes": { pts: 4, j: 3, g: 1, n: 1, p: 1, gf: 4, ga: 7, forme: ["N","V","P"] },
            "Marseille": { pts: 3, j: 3, g: 1, n: 0, p: 2, gf: 6, ga: 5, forme: ["V","P","P"] },
            "Lens": { pts: 3, j: 3, g: 1, n: 0, p: 2, gf: 6, ga: 5, forme: ["V","P","P"] },
            "Angers": { pts: 3, j: 3, g: 1, n: 0, p: 2, gf: 4, ga: 5, forme: ["P","V","P"] },
            "PSG": { pts: 2, j: 3, g: 0, n: 2, p: 1, gf: 5, ga: 6, forme: ["N","N","P"] },
            "Le Mans": { pts: 2, j: 3, g: 0, n: 2, p: 1, gf: 5, ga: 6, forme: ["N","P","N"] },
            "Nice": { pts: 2, j: 3, g: 0, n: 2, p: 1, gf: 1, ga: 4, forme: ["N","P","N"] },
            "Le Havre": { pts: 1, j: 3, g: 0, n: 1, p: 2, gf: 2, ga: 4, forme: ["P","N","P"] },
            "Toulouse": { pts: 1, j: 3, g: 0, n: 1, p: 2, gf: 2, ga: 5, forme: ["N","P","P"] },
            "Auxerre": { pts: 0, j: 3, g: 0, n: 0, p: 3, gf: 4, ga: 11, forme: ["P","P","P"] }
        },
        
        // BASE MATHÉMATIQUE
        math: {
            "Monaco": { ppm: 3.00, off_power: 0.83, def_power: 4.62, conf: 8.5 },
            "Paris FC": { ppm: 2.33, off_power: 1.00, def_power: 2.61, conf: 8.0 },
            "Lyon": { ppm: 2.33, off_power: 1.00, def_power: 2.61, conf: 7.9 },
            "Lille": { ppm: 2.33, off_power: 0.83, def_power: 2.61, conf: 7.5 },
            "Rennes": { ppm: 2.33, off_power: 1.17, def_power: 1.13, conf: 6.8 },
            "Strasbourg": { ppm: 2.00, off_power: 1.33, def_power: 0.82, conf: 6.1 },
            "Brest": { ppm: 1.67, off_power: 1.00, def_power: 1.13, conf: 5.7 },
            "Lorient": { ppm: 1.33, off_power: 0.33, def_power: 2.61, conf: 5.5 },
            "Troyes": { ppm: 1.33, off_power: 0.67, def_power: 0.82, conf: 4.3 },
            "Marseille": { ppm: 1.00, off_power: 1.00, def_power: 1.13, conf: 4.7 },
            "Lens": { ppm: 1.00, off_power: 1.00, def_power: 1.13, conf: 4.6 },
            "Angers": { ppm: 1.00, off_power: 0.67, def_power: 1.13, conf: 4.0 },
            "PSG": { ppm: 0.67, off_power: 0.83, def_power: 0.95, conf: 3.6 },
            "Le Mans": { ppm: 0.67, off_power: 0.83, def_power: 0.95, conf: 3.4 },
            "Nice": { ppm: 0.67, off_power: 0.17, def_power: 1.40, conf: 3.1 },
            "Le Havre": { ppm: 0.33, off_power: 0.33, def_power: 1.40, conf: 2.8 },
            "Toulouse": { ppm: 0.33, off_power: 0.33, def_power: 1.13, conf: 2.4 },
            "Auxerre": { ppm: 0.00, off_power: 0.67, def_power: 0.53, conf: 1.6 }
        },
        
        // JOURNÉES (avec pronostics + résultats)
        journees: {
            "1": {
                nom: "Journée 1",
                date: "23 Août 2026",
                exactitude: "66.7%",
                confiance_moy: 4.4,
                pronostics: [
                    { match: "Rennes vs PSG", pred: "1", pred_score: "2-1", real: "2-2", correct: false, conf: 5.5 },
                    { match: "Le Havre vs Monaco", pred: "2", pred_score: "0-1", real: "0-1", correct: true, conf: 6.0 },
                    { match: "Angers vs Lille", pred: "2", pred_score: "0-2", real: "0-2", correct: true, conf: 6.5 }
                ]
            },
            "2": {
                nom: "Journée 2",
                date: "28-30 Août 2026",
                exactitude: "11.1%",
                confiance_moy: 4.4,
                pronostics: [
                    { match: "Monaco vs Marseille", pred: "1", pred_score: "2-0", real: "2-0", correct: true, conf: 6.5 },
                    { match: "Lille vs PSG", pred: "1", pred_score: "2-1", real: "2-2", correct: false, conf: 5.0 },
                    { match: "Strasbourg vs Lens", pred: "1", pred_score: "1-2", real: "2-1", correct: false, conf: 4.5 },
                    { match: "Auxerre vs Angers", pred: "1", pred_score: "2-0", real: "1-3", correct: false, conf: 5.0 },
                    { match: "Brest vs Toulouse", pred: "1", pred_score: "1-1", real: "2-2", correct: false, conf: 3.5 },
                    { match: "Lorient vs Troyes", pred: "1", pred_score: "1-0", real: "1-2", correct: false, conf: 4.5 },
                    { match: "Lyon vs Le Havre", pred: "1", pred_score: "2-0", real: "1-1", correct: false, conf: 4.0 },
                    { match: "Paris FC vs Nice", pred: "1", pred_score: "2-1", real: "3-0", correct: true, conf: 5.5 },
                    { match: "Rennes vs Le Mans", pred: "1", pred_score: "2-0", real: "3-2", correct: true, conf: 5.5 }
                ]
            },
            "3": {
                nom: "Journée 3",
                date: "3-6 Sept 2026",
                exactitude: "44.4%",
                confiance_moy: 5.6,
                pronostics: [
                    { match: "Toulouse vs Lille", pred: "2", pred_score: "0-2", real: "0-1", correct: true, conf: 6.5 },
                    { match: "Lyon vs Auxerre", pred: "1", pred_score: "3-0", real: "3-1", correct: true, conf: 7.0 },
                    { match: "PSG vs Monaco", pred: "X", pred_score: "1-1", real: "1-2", correct: false, conf: 5.0 },
                    { match: "Lens vs Lorient", pred: "X", pred_score: "1-1", real: "0-1", correct: false, conf: 4.5 },
                    { match: "Nice vs Le Mans", pred: "2", pred_score: "0-1", real: "1-1", correct: false, conf: 4.0 },
                    { match: "Le Havre vs Brest", pred: "X", pred_score: "1-1", real: "1-2", correct: false, conf: 4.5 },
                    { match: "Troyes vs Strasbourg", pred: "X", pred_score: "1-1", real: "2-6", correct: false, conf: 4.5 },
                    { match: "Angers vs Rennes", pred: "2", pred_score: "0-2", real: "1-2", correct: true, conf: 6.5 },
                    { match: "Marseille vs Paris FC", pred: "2", pred_score: "0-2", real: "2-3", correct: true, conf: 5.5 }
                ]
            },
            "4": {
                nom: "Journée 4",
                date: "11-13 Sept 2026",
                exactitude: null,
                confiance_moy: 6.2,
                pronostics: [
                    { match: "Rennes vs Marseille", pred: "1", pred_score: "2-1", real: null, conf: 7.2, p1: 74, pn: 10, p2: 16, justif: "Rennes 74% favori (domicile + PPM 2.33). Marseille en crise (PPM 1.00)." },
                    { match: "Strasbourg vs Monaco", pred: "2", pred_score: "1-2", real: null, conf: 7.1, p1: 29, pn: 28, p2: 43, justif: "Monaco 43% > Strasbourg 29%. Def Monaco 4.62 (meilleure ligue). Leader confirmé." },
                    { match: "Auxerre vs Nice", pred: "X", pred_score: "1-1", real: null, conf: 3.8, p1: 43, pn: 23, p2: 34, justif: "⚠️ Auxerre 43% mais catastrophe (0pts, -7 diff). Nul probable face équipe fragile." },
                    { match: "Havre AC vs Angers", pred: "1", pred_score: "1-0", real: null, conf: 4.5, p1: 42, pn: 23, p2: 35, justif: "42% > 35%. Serré. Havre domicile (+3%) vs Angers stable. Incertitude." },
                    { match: "FC Lorient vs Toulouse", pred: "1", pred_score: "2-0", real: null, conf: 6.5, p1: 72, pn: 11, p2: 17, justif: "Lorient 72% > Toulouse. 4pts vs 1pt. PPM 1.33 vs 0.33. Domicile boost." },
                    { match: "Paris FC vs Lyon", pred: "1", pred_score: "1-0", real: null, conf: 6.8, p1: 53, pn: 19, p2: 28, justif: "Paris FC 53% (domicile boost). PPM identique 2.33. Meilleure défense (0.67 GA/J)." },
                    { match: "LOSC Lille vs Troyes", pred: "1", pred_score: "2-0", real: null, conf: 7.8, p1: 74, pn: 10, p2: 15, justif: "Lille 74% favori. PPM 2.33 vs 1.33. Domicile + power def 2.61." },
                    { match: "Le Mans FC vs Lens", pred: "1", pred_score: "1-0", real: null, conf: 5.2, p1: 47, pn: 19, p2: 34, justif: "LE MANS domicile 47% vs Lens 34%. Serré mais domicile + contexte." },
                    { match: "Brest vs PSG", pred: "1", pred_score: "2-0", real: null, conf: 6.9, p1: 69, pn: 12, p2: 19, justif: "Brest 69% (domicile + PPM 1.67 vs PSG 0.67). PSG en crise (0V-2N-1P)." }
                ]
            }
        }
    },
    
    // ==================== CHAMPIONS LEAGUE ====================
    ldc: {
        // ÉQUIPES avec leur championnat national
        teams: {
            "Barcelona": { ppm: 3.00, pts: 12, j: 4, off_power: 2.13, def_power: 4.00, conf: 9.2, country: "🇪🇸 La Liga (Leader +15!)" },
            "Feyenoord": { ppm: 2.20, pts: 11, j: 5, off_power: 1.30, def_power: 1.43, conf: 6.5, country: "🇳🇱 Eredivisie" },
            "Stuttgart": { ppm: 1.50, pts: 3, j: 2, off_power: 1.25, def_power: 0.67, conf: 4.8, country: "🇩🇪 Bundesliga" },
            "Viking": { ppm: 2.32, pts: 44, j: 19, off_power: 1.13, def_power: 2.00, conf: 6.8, country: "🇳🇴 Eliteserien" },
            "Liverpool": { ppm: 1.67, pts: 5, j: 3, off_power: 1.00, def_power: 1.50, conf: 6.0, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League" },
            "Atletico Madrid": { ppm: 1.75, pts: 7, j: 4, off_power: 0.88, def_power: 1.33, conf: 5.5, country: "🇪🇸 La Liga" },
            "PSG": { ppm: 0.67, pts: 2, j: 3, off_power: 0.83, def_power: 1.00, conf: 3.5, country: "🇫🇷 Ligue 1 (CRISE)" },
            "Slovan Bratislava": { ppm: 1.50, pts: 0, j: 0, off_power: 0.75, def_power: 0.90, conf: 3.0, country: "🇸🇰 Fortuna Liga" },
            "Sporting CP": { ppm: 2.20, pts: 0, j: 0, off_power: 1.60, def_power: 2.00, conf: 7.5, country: "🇵🇹 Primeira Liga" },
            "Galatasaray": { ppm: 2.50, pts: 10, j: 4, off_power: 1.50, def_power: 1.33, conf: 7.2, country: "🇹🇷 Süper Lig (Leader)" },
            "Napoli": { ppm: 1.00, pts: 3, j: 3, off_power: 0.83, def_power: 1.20, conf: 4.5, country: "🇮🇹 Serie A (Crise)" },
            "Arsenal": { ppm: 3.00, pts: 9, j: 3, off_power: 1.00, def_power: 6.00, conf: 8.7, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League (Dominant)" },
            "Club Brugge": { ppm: 2.00, pts: 6, j: 3, off_power: 0.83, def_power: 3.00, conf: 6.5, country: "🇧🇪 Pro League" },
            "Aston Villa": { ppm: 0.33, pts: 1, j: 3, off_power: 0.00, def_power: 1.20, conf: 2.8, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League (Crise)" },
            "Real Madrid": { ppm: 2.25, pts: 9, j: 4, off_power: 1.25, def_power: 2.67, conf: 8.0, country: "🇪🇸 La Liga" },
            "Inter": { ppm: 3.00, pts: 9, j: 3, off_power: 1.33, def_power: 2.00, conf: 8.5, country: "🇮🇹 Serie A" },
            "Porto": { ppm: 3.00, pts: 9, j: 3, off_power: 1.33, def_power: 3.00, conf: 8.0, country: "🇵🇹 Primeira Liga" },
            "Manchester City": { ppm: 3.00, pts: 9, j: 3, off_power: 1.17, def_power: 3.00, conf: 8.8, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League" },
            "Lille": { ppm: 2.33, pts: 7, j: 3, off_power: 0.83, def_power: 3.00, conf: 7.5, country: "🇫🇷 Ligue 1" },
            "Real Betis": { ppm: 2.25, pts: 9, j: 4, off_power: 0.63, def_power: 1.60, conf: 6.5, country: "🇪🇸 La Liga" },
            "Borussia Dortmund": { ppm: 3.00, pts: 6, j: 2, off_power: 1.25, def_power: 2.00, conf: 8.0, country: "🇩🇪 Bundesliga" },
            "Villarreal": { ppm: 0.50, pts: 2, j: 4, off_power: 0.75, def_power: 1.00, conf: 3.2, country: "🇪🇸 La Liga (Crise)" },
            "Fenerbahce": { ppm: 1.50, pts: 6, j: 4, off_power: 1.00, def_power: 1.33, conf: 5.0, country: "🇹🇷 Süper Lig" },
            "Roma": { ppm: 3.00, pts: 9, j: 3, off_power: 1.67, def_power: 6.00, conf: 8.8, country: "🇮🇹 Serie A (Leader)" },
            "PSV Eindhoven": { ppm: 2.60, pts: 13, j: 5, off_power: 1.80, def_power: 1.67, conf: 8.0, country: "🇳🇱 Eredivisie" },
            "Shakhtar Donetsk": { ppm: 1.80, pts: 0, j: 0, off_power: 1.00, def_power: 1.20, conf: 5.5, country: "🇺🇦 Prem. League" },
            "Como": { ppm: 2.33, pts: 7, j: 3, off_power: 1.17, def_power: 2.00, conf: 6.5, country: "🇮🇹 Serie A" },
            "RB Leipzig": { ppm: 1.50, pts: 3, j: 2, off_power: 1.00, def_power: 1.33, conf: 5.5, country: "🇩🇪 Bundesliga" },
            "Bayern Munich": { ppm: 2.00, pts: 4, j: 2, off_power: 1.25, def_power: 4.00, conf: 8.0, country: "🇩🇪 Bundesliga" },
            "Bodo Glimt": { ppm: 2.47, pts: 47, j: 19, off_power: 1.29, def_power: 2.53, conf: 7.5, country: "🇳🇴 Eliteserien (Leader)" },
            "Manchester United": { ppm: 1.33, pts: 4, j: 3, off_power: 1.17, def_power: 1.00, conf: 5.0, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League" },
            "Sabah": { ppm: 1.50, pts: 0, j: 0, off_power: 0.60, def_power: 0.80, conf: 2.5, country: "🇦🇿 Prem. League" },
            "Slavia Praha": { ppm: 2.33, pts: 14, j: 6, off_power: 1.42, def_power: 2.40, conf: 7.5, country: "🇨🇿 Chance Liga (Leader)" },
            "Lens": { ppm: 1.00, pts: 3, j: 3, off_power: 1.00, def_power: 1.20, conf: 4.5, country: "🇫🇷 Ligue 1" },
            "AEK Athens": { ppm: 2.00, pts: 0, j: 0, off_power: 1.20, def_power: 1.50, conf: 5.5, country: "🇬🇷 Super League" },
            "LASK": { ppm: 1.80, pts: 0, j: 0, off_power: 1.10, def_power: 1.20, conf: 4.5, country: "🇦🇹 Bundesliga" }
        },
        
        // JOURNÉES LDC
        journees: {
            "1": {
                nom: "Journée 1 - Phase de Ligue",
                date: "8-10 Sept 2026",
                exactitude: null,
                confiance_moy: 6.7,
                pronostics: [
                    { date: "Mardi 8/9", match: "AEK Athens vs LASK", pred: "1", pred_score: "1-1", real: null, conf: 4.5, p1: 50, pn: 28, p2: 22, justif: "AEK domicile. LASK a battu Celtic (5-1). Match serré." },
                    { date: "Mardi 8/9", match: "Club Brugge vs Aston Villa", pred: "1", pred_score: "2-1", real: null, conf: 6.5, p1: 55, pn: 25, p2: 20, justif: "Club Brugge domicile (PPM 2.0). Aston Villa CRISE (0V-1N-2P)." },
                    { date: "Mardi 8/9", match: "Real Madrid vs Inter", pred: "1", pred_score: "2-1", real: null, conf: 5.5, p1: 38, pn: 27, p2: 35, justif: "Real Madrid domicile. Inter PPM 3.0. Match sommet serré." },
                    { date: "Mardi 8/9", match: "Porto vs Manchester City", pred: "2", pred_score: "1-2", real: null, conf: 7.0, p1: 30, pn: 26, p2: 44, justif: "Man City 44% > Porto 30%. Haaland-power." },
                    { date: "Mardi 8/9", match: "Lille vs Real Betis", pred: "1", pred_score: "1-0", real: null, conf: 5.8, p1: 45, pn: 27, p2: 28, justif: "Lille domicile + Défense excellente. Betis moyen." },
                    { date: "Mardi 8/9", match: "Borussia Dortmund vs Villarreal", pred: "1", pred_score: "2-0", real: null, conf: 8.2, p1: 68, pn: 18, p2: 14, justif: "Dortmund PPM 3.0 vs Villarreal CRISE (PPM 0.5)." },
                    { date: "Mercredi 9/9", match: "Barcelona vs Feyenoord", pred: "1", pred_score: "3-1", real: null, conf: 8.5, p1: 78, pn: 12, p2: 10, justif: "⭐ Barça LEADER La Liga (4V-0N-0P, +15 diff). Écart énorme." },
                    { date: "Mercredi 9/9", match: "Stuttgart vs Viking", pred: "1", pred_score: "2-1", real: null, conf: 6.0, p1: 55, pn: 22, p2: 23, justif: "Stuttgart domicile + Bundesliga. Viking niveau inférieur." },
                    { date: "Mercredi 9/9", match: "Liverpool vs Atletico Madrid", pred: "1", pred_score: "2-1", real: null, conf: 6.5, p1: 52, pn: 25, p2: 23, justif: "Liverpool domicile Anfield (+3%). PPM 1.67 vs 1.75." },
                    { date: "Mercredi 9/9", match: "PSG vs Slovan Bratislava", pred: "1", pred_score: "2-1", real: null, conf: 5.5, p1: 62, pn: 20, p2: 18, justif: "⚠️ PSG CRISE (PPM 0.67!) MAIS domicile + niveau supérieur." },
                    { date: "Mercredi 9/9", match: "Sporting CP vs Galatasaray", pred: "1", pred_score: "1-1", real: null, conf: 4.8, p1: 42, pn: 28, p2: 30, justif: "Match TRÈS serré. Sporting domicile. Galatasaray leader Süper Lig." },
                    { date: "Mercredi 9/9", match: "Napoli vs Arsenal", pred: "2", pred_score: "1-2", real: null, conf: 7.2, p1: 30, pn: 25, p2: 45, justif: "⭐ Arsenal DOMINANT PL (GA 1!). Napoli CRISE Serie A." },
                    { date: "Jeudi 10/9", match: "Fenerbahce vs Roma", pred: "2", pred_score: "1-2", real: null, conf: 7.0, p1: 30, pn: 25, p2: 45, justif: "⭐ Roma LEADER Serie A (3V-0N-0P, +9). Fenerbahce niveau inf." },
                    { date: "Jeudi 10/9", match: "PSV vs Shakhtar Donetsk", pred: "1", pred_score: "2-0", real: null, conf: 7.5, p1: 68, pn: 20, p2: 12, justif: "PSV excellent (PPM 2.60, GF 18/5). Shakhtar exilé." },
                    { date: "Jeudi 10/9", match: "Como vs RB Leipzig", pred: "1", pred_score: "1-1", real: null, conf: 5.0, p1: 48, pn: 27, p2: 25, justif: "Como surprise (PPM 2.33). Domicile avantage. Confiance basse." },
                    { date: "Jeudi 10/9", match: "Bayern Munich vs Bodo Glimt", pred: "1", pred_score: "3-1", real: null, conf: 7.8, p1: 72, pn: 18, p2: 10, justif: "⭐ Bayern domicile + Kane. Bodø surprenants mais niveau diff." },
                    { date: "Jeudi 10/9", match: "Manchester United vs Sabah", pred: "1", pred_score: "3-0", real: null, conf: 8.0, p1: 82, pn: 12, p2: 6, justif: "Man Utd domicile + Premier League. Sabah play-off, niveau inf." },
                    { date: "Jeudi 10/9", match: "Slavia Praha vs Lens", pred: "1", pred_score: "2-1", real: null, conf: 6.2, p1: 52, pn: 27, p2: 21, justif: "Slavia LEADER Chance Liga (unbeaten 6). Domicile fort." }
                ]
            }
        }
    },
    
    // ==================== LEÇONS APPRISES ====================
    lecons: [
        {
            journee: "J1",
            type: "warning",
            titre: "Base méthodologique fragile",
            erreur: "Données partielles (3/9 matchs seulement)",
            apprentissage: "Exactitude 66.7% = chance, pas vraie méthodologie. Besoin de base robuste.",
            date: "23/08/2026"
        },
        {
            journee: "J2",
            type: "danger",
            titre: "CRASH méthodologie (11.1%)",
            erreur: "Momentum trop simpliste. Sur-estimation des nuls (38% prédit vs 22% réel).",
            apprentissage: "Il faut des indices mathématiques rigoureux, pas juste du momentum. Pire journée = coup de réveil.",
            date: "30/08/2026"
        },
        {
            journee: "J3",
            type: "success",
            titre: "Correction & Amélioration",
            erreur: "Strasbourg 2-6 (goleada surprise). PSG toujours mal évalué.",
            apprentissage: "Création base math V2 (5 indices). Strasbourg = meilleure attaque (8 buts). PSG en crise profonde. Exactitude 44.4% = amélioration nette.",
            date: "06/09/2026"
        },
        {
            journee: "J4",
            type: "warning",
            titre: "Erreur logique détectée",
            erreur: "Prédiction X pour Strasbourg-Monaco alors que Monaco 43% > Strasbourg 29%. Illogique statistiquement!",
            apprentissage: "CORRECTION MAJEURE: argmax(%) strict = le prono doit toujours être la probabilité la plus haute. Max 7% surprise si pattern clair. Confiance basse = honnêteté quand incertitude.",
            date: "08/09/2026"
        }
    ]
};

// Export si module (pas nécessaire pour le browser)
if (typeof module !== 'undefined') {
    module.exports = APP_DATA;
}
