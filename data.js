// ==================== DONNÉES SITE ANALYTICS FOOT v2.1 ====================
// MISE À JOUR: 14/09/2026 - Résultats J4 saisis + Pronostics J5 méthodologie V3
// Exactitude J4: 22.2% (2/9) - DÉSASTREUX - Voir leçon apprise J4

const APP_DATA = {
    version: "2.1",
    lastUpdate: "14/09/2026",
    
    // ==================== LIGUE 1 ====================
    ligue1: {
        // CLASSEMENT ACTUEL (après J4)
        classement: {
            "Lille": { pts: 10, j: 4, g: 3, n: 1, p: 0, gf: 7, ga: 2, forme: ["V","N","V","V"] },
            "Monaco": { pts: 10, j: 4, g: 3, n: 1, p: 0, gf: 6, ga: 2, forme: ["V","V","V","N"] },
            "Rennes": { pts: 10, j: 4, g: 3, n: 1, p: 0, gf: 8, ga: 5, forme: ["N","V","V","V"] },
            "Lyon": { pts: 8, j: 4, g: 2, n: 2, p: 0, gf: 6, ga: 2, forme: ["N","V","V","N"] },
            "Paris FC": { pts: 8, j: 4, g: 2, n: 2, p: 0, gf: 6, ga: 2, forme: ["V","N","V","N"] },
            "Strasbourg": { pts: 7, j: 4, g: 2, n: 1, p: 1, gf: 9, ga: 8, forme: ["P","V","V","N"] },
            "Brest": { pts: 5, j: 4, g: 1, n: 2, p: 1, gf: 6, ga: 6, forme: ["N","N","V","P"] },
            "PSG": { pts: 5, j: 4, g: 1, n: 2, p: 1, gf: 6, ga: 6, forme: ["N","N","P","V"] },
            "Lorient": { pts: 5, j: 4, g: 1, n: 2, p: 1, gf: 4, ga: 4, forme: ["V","P","N","N"] },
            "Lens": { pts: 4, j: 4, g: 1, n: 1, p: 2, gf: 8, ga: 7, forme: ["V","P","P","N"] },
            "Angers": { pts: 4, j: 4, g: 1, n: 1, p: 2, gf: 4, ga: 5, forme: ["P","V","P","N"] },
            "Troyes": { pts: 4, j: 4, g: 1, n: 1, p: 2, gf: 4, ga: 9, forme: ["N","V","P","P"] },
            "Marseille": { pts: 3, j: 4, g: 1, n: 0, p: 3, gf: 6, ga: 6, forme: ["V","P","P","P"] },
            "Le Mans": { pts: 3, j: 4, g: 0, n: 3, p: 1, gf: 7, ga: 8, forme: ["N","P","N","N"] },
            "Auxerre": { pts: 3, j: 4, g: 1, n: 0, p: 3, gf: 5, ga: 11, forme: ["P","P","P","V"] },
            "Le Havre": { pts: 2, j: 4, g: 0, n: 2, p: 2, gf: 2, ga: 4, forme: ["P","N","P","N"] },
            "Toulouse": { pts: 2, j: 4, g: 0, n: 2, p: 2, gf: 4, ga: 7, forme: ["N","P","P","N"] },
            "Nice": { pts: 2, j: 4, g: 0, n: 2, p: 2, gf: 1, ga: 5, forme: ["N","P","N","P"] }
        },
        
        // BASE MATHÉMATIQUE (recalculée avec J4)
        math: {
            "Lille": { ppm: 2.50, off_power: 0.88, def_power: 4.00, conf: 8.5 },
            "Monaco": { ppm: 2.50, off_power: 0.75, def_power: 4.00, conf: 8.4 },
            "Rennes": { ppm: 2.50, off_power: 1.00, def_power: 1.60, conf: 7.8 },
            "Lyon": { ppm: 2.00, off_power: 0.75, def_power: 4.00, conf: 7.5 },
            "Paris FC": { ppm: 2.00, off_power: 0.75, def_power: 4.00, conf: 7.4 },
            "Strasbourg": { ppm: 1.75, off_power: 1.13, def_power: 1.00, conf: 6.3 },
            "Brest": { ppm: 1.25, off_power: 0.75, def_power: 1.33, conf: 5.5 },
            "PSG": { ppm: 1.25, off_power: 0.75, def_power: 1.33, conf: 6.0 },
            "Lorient": { ppm: 1.25, off_power: 0.50, def_power: 2.00, conf: 5.5 },
            "Lens": { ppm: 1.00, off_power: 1.00, def_power: 1.14, conf: 4.8 },
            "Angers": { ppm: 1.00, off_power: 0.50, def_power: 1.60, conf: 4.5 },
            "Troyes": { ppm: 1.00, off_power: 0.50, def_power: 0.89, conf: 4.0 },
            "Marseille": { ppm: 0.75, off_power: 0.75, def_power: 1.33, conf: 4.2 },
            "Le Mans": { ppm: 0.75, off_power: 0.88, def_power: 1.00, conf: 3.8 },
            "Auxerre": { ppm: 0.75, off_power: 0.63, def_power: 0.73, conf: 3.5 },
            "Le Havre": { ppm: 0.50, off_power: 0.25, def_power: 2.00, conf: 3.5 },
            "Toulouse": { ppm: 0.50, off_power: 0.50, def_power: 1.14, conf: 3.2 },
            "Nice": { ppm: 0.50, off_power: 0.13, def_power: 1.60, conf: 3.5 }
        },
        
        // JOURNÉES avec RÉSULTATS
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
                exactitude: "22.2%",
                confiance_moy: 6.2,
                pronostics: [
                    { match: "Rennes vs Marseille", pred: "1", pred_score: "2-1", real: "1-0", correct: true, conf: 7.2, p1: 74, pn: 10, p2: 16, justif: "Rennes 74% favori (domicile + PPM 2.33). Marseille en crise (PPM 1.00)." },
                    { match: "Strasbourg vs Monaco", pred: "2", pred_score: "1-2", real: "1-1", correct: false, conf: 7.1, p1: 29, pn: 28, p2: 43, justif: "Monaco 43% > Strasbourg 29%. Def Monaco 4.62. ⚠️ ERREUR: nul possible sous-estimé!" },
                    { match: "Auxerre vs Nice", pred: "X", pred_score: "1-1", real: "1-0", correct: false, conf: 3.8, p1: 43, pn: 23, p2: 34, justif: "Auxerre 43% mais catastrophe. Nul prédit mais Auxerre a gagné!" },
                    { match: "Havre AC vs Angers", pred: "1", pred_score: "1-0", real: "0-0", correct: false, conf: 4.5, p1: 42, pn: 23, p2: 35, justif: "42% > 35%. Havre domicile mais 0-0 = nul! ⚠️" },
                    { match: "FC Lorient vs Toulouse", pred: "1", pred_score: "2-0", real: "2-2", correct: false, conf: 6.5, p1: 72, pn: 11, p2: 17, justif: "Lorient 72% favori mais 2-2 = nul surprise! ⚠️" },
                    { match: "Paris FC vs Lyon", pred: "1", pred_score: "1-0", real: "0-0", correct: false, conf: 6.8, p1: 53, pn: 19, p2: 28, justif: "Paris FC 53% mais 0-0 = nul défensif surprise! ⚠️" },
                    { match: "LOSC Lille vs Troyes", pred: "1", pred_score: "2-0", real: "2-0", correct: true, conf: 7.8, p1: 74, pn: 10, p2: 15, justif: "Lille 74% favori. Score exact prédit! ✅" },
                    { match: "Le Mans FC vs Lens", pred: "1", pred_score: "1-0", real: "2-2", correct: false, conf: 5.2, p1: 47, pn: 19, p2: 34, justif: "LE MANS 47% mais 2-2 = nul (Le Mans a fait 3 nuls sur 4 matchs!). ⚠️" },
                    { match: "Brest vs PSG", pred: "1", pred_score: "2-0", real: "0-1", correct: false, conf: 6.9, p1: 69, pn: 12, p2: 19, justif: "🔴 GROSSE ERREUR: Brest 69% mais PSG gagne 0-1 (Ferran Torres 5e min). Sous-estimé qualité PSG." }
                ]
            },
            "5": {
                nom: "Journée 5",
                date: "18-20 Sept 2026",
                exactitude: null,
                confiance_moy: 5.4,
                pronostics: [
                    { match: "Monaco vs Lens", pred: "1", pred_score: "2-1", real: null, conf: 6.5, p1: 55, pn: 28, p2: 17, justif: "Monaco (PPM 2.5, meilleure défense) vs Lens en difficulté. Domicile + qualité. ⚠️ V3: nul augmenté à 28% (Lens résiste souvent)." },
                    { match: "Paris FC vs Strasbourg", pred: "X", pred_score: "1-1", real: null, conf: 5.5, p1: 40, pn: 33, p2: 27, justif: "V3 APPLIQUÉ: PFC (PPM 2.0) vs Strasbourg (1.75) écart faible. Nul très probable (33% - +8% vs V2). Strasbourg vient d'un nul face à Monaco." },
                    { match: "Lyon vs Rennes", pred: "X", pred_score: "1-1", real: null, conf: 5.8, p1: 38, pn: 34, p2: 28, justif: "🎯 CHOC AU SOMMET: Lyon et Rennes tous 2 à 10pts. V3: nul le plus probable (34%). Match tactique." },
                    { match: "Toulouse vs Le Havre", pred: "X", pred_score: "1-1", real: null, conf: 4.5, p1: 39, pn: 36, p2: 25, justif: "V3 CRUCIAL: 2 équipes en bas de classement (2pts chacune). Nul énorme (36% - +12% vs V2). Match faible niveau." },
                    { match: "Le Mans vs Lorient", pred: "X", pred_score: "1-1", real: null, conf: 5.2, p1: 37, pn: 38, p2: 25, justif: "⚠️ Le Mans = ROI DES NULS (3N sur 4 matchs!). V3: nul 38% (MAX). Pattern historique fort." },
                    { match: "Angers vs Troyes", pred: "1", pred_score: "1-0", real: null, conf: 5.0, p1: 46, pn: 30, p2: 24, justif: "Angers domicile. Troyes fragile défensivement (-5 diff). V3: nul augmenté (30%) car matchs bas de tableau." },
                    { match: "Auxerre vs Brest", pred: "X", pred_score: "1-1", real: null, conf: 4.8, p1: 38, pn: 34, p2: 28, justif: "V3: Auxerre a gagné J4 (+ momentum). Brest solide en déplacement. Nul très probable (34%)." },
                    { match: "Nice vs Lille", pred: "2", pred_score: "0-2", real: null, conf: 6.8, p1: 22, pn: 25, p2: 53, justif: "🔥 Lille LEADER (10pts, PPM 2.5). Nice DERNIER (2pts, 0V). Écart énorme. Prono 2 clair." },
                    { match: "Marseille vs PSG", pred: "2", pred_score: "1-2", real: null, conf: 6.2, p1: 28, pn: 24, p2: 48, justif: "🔥 LE CLASICO! PSG a gagné à Brest (0-1). PSG mieux organisé. Marseille en série (3P sur 4). V3: quand qualité individuelle > forme récente." }
                ]
            }
        }
    },
    
    // ==================== CHAMPIONS LEAGUE ====================
    ldc: {
        teams: {
            "Barcelona": { ppm: 3.00, pts: 12, j: 4, off_power: 2.13, def_power: 4.00, conf: 9.2, country: "🇪🇸 La Liga (Leader +15!)" },
            "Feyenoord": { ppm: 2.20, pts: 11, j: 5, off_power: 1.30, def_power: 1.43, conf: 6.5, country: "🇳🇱 Eredivisie" },
            "Stuttgart": { ppm: 1.50, pts: 3, j: 2, off_power: 1.25, def_power: 0.67, conf: 4.8, country: "🇩🇪 Bundesliga" },
            "Viking": { ppm: 2.32, pts: 44, j: 19, off_power: 1.13, def_power: 2.00, conf: 6.8, country: "🇳🇴 Eliteserien" },
            "Liverpool": { ppm: 1.67, pts: 5, j: 3, off_power: 1.00, def_power: 1.50, conf: 6.0, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League" },
            "Atletico Madrid": { ppm: 1.75, pts: 7, j: 4, off_power: 0.88, def_power: 1.33, conf: 5.5, country: "🇪🇸 La Liga" },
            "PSG": { ppm: 1.25, pts: 5, j: 4, off_power: 0.75, def_power: 1.33, conf: 6.0, country: "🇫🇷 Ligue 1 (Renaissance)" },
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
            "Lille": { ppm: 2.50, pts: 10, j: 4, off_power: 0.88, def_power: 4.00, conf: 8.5, country: "🇫🇷 Ligue 1 (Leader)" },
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
            "Lens": { ppm: 1.00, pts: 4, j: 4, off_power: 1.00, def_power: 1.14, conf: 4.8, country: "🇫🇷 Ligue 1" },
            "AEK Athens": { ppm: 2.00, pts: 0, j: 0, off_power: 1.20, def_power: 1.50, conf: 5.5, country: "🇬🇷 Super League" },
            "LASK": { ppm: 1.80, pts: 0, j: 0, off_power: 1.10, def_power: 1.20, conf: 4.5, country: "🇦🇹 Bundesliga" }
        },
        journees: {
            "1": {
                nom: "Journée 1 - Phase de Ligue",
                date: "8-10 Sept 2026",
                exactitude: null,
                confiance_moy: 6.7,
                pronostics: [
                    { date: "Mardi 8/9", match: "AEK Athens vs LASK", pred: "1", pred_score: "1-1", real: null, conf: 4.5, p1: 50, pn: 28, p2: 22, justif: "AEK domicile. Match serré." },
                    { date: "Mardi 8/9", match: "Club Brugge vs Aston Villa", pred: "1", pred_score: "2-1", real: null, conf: 6.5, p1: 55, pn: 25, p2: 20, justif: "Club Brugge domicile. Aston Villa CRISE." },
                    { date: "Mardi 8/9", match: "Real Madrid vs Inter", pred: "1", pred_score: "2-1", real: null, conf: 5.5, p1: 38, pn: 27, p2: 35, justif: "Real Madrid domicile. Match sommet serré." },
                    { date: "Mardi 8/9", match: "Porto vs Manchester City", pred: "2", pred_score: "1-2", real: null, conf: 7.0, p1: 30, pn: 26, p2: 44, justif: "Man City 44%. Haaland-power." },
                    { date: "Mardi 8/9", match: "Lille vs Real Betis", pred: "1", pred_score: "1-0", real: null, conf: 5.8, p1: 45, pn: 27, p2: 28, justif: "Lille domicile + défense." },
                    { date: "Mardi 8/9", match: "Borussia Dortmund vs Villarreal", pred: "1", pred_score: "2-0", real: null, conf: 8.2, p1: 68, pn: 18, p2: 14, justif: "Dortmund vs Villarreal CRISE." },
                    { date: "Mercredi 9/9", match: "Barcelona vs Feyenoord", pred: "1", pred_score: "3-1", real: null, conf: 8.5, p1: 78, pn: 12, p2: 10, justif: "⭐ Barça LEADER +15 diff." },
                    { date: "Mercredi 9/9", match: "Stuttgart vs Viking", pred: "1", pred_score: "2-1", real: null, conf: 6.0, p1: 55, pn: 22, p2: 23, justif: "Stuttgart Bundesliga." },
                    { date: "Mercredi 9/9", match: "Liverpool vs Atletico Madrid", pred: "1", pred_score: "2-1", real: null, conf: 6.5, p1: 52, pn: 25, p2: 23, justif: "Liverpool Anfield." },
                    { date: "Mercredi 9/9", match: "PSG vs Slovan Bratislava", pred: "1", pred_score: "2-1", real: null, conf: 5.5, p1: 62, pn: 20, p2: 18, justif: "PSG domicile. Renaissance PSG confirmée." },
                    { date: "Mercredi 9/9", match: "Sporting CP vs Galatasaray", pred: "1", pred_score: "1-1", real: null, conf: 4.8, p1: 42, pn: 28, p2: 30, justif: "Match TRÈS serré." },
                    { date: "Mercredi 9/9", match: "Napoli vs Arsenal", pred: "2", pred_score: "1-2", real: null, conf: 7.2, p1: 30, pn: 25, p2: 45, justif: "⭐ Arsenal DOMINANT." },
                    { date: "Jeudi 10/9", match: "Fenerbahce vs Roma", pred: "2", pred_score: "1-2", real: null, conf: 7.0, p1: 30, pn: 25, p2: 45, justif: "⭐ Roma LEADER Serie A." },
                    { date: "Jeudi 10/9", match: "PSV vs Shakhtar Donetsk", pred: "1", pred_score: "2-0", real: null, conf: 7.5, p1: 68, pn: 20, p2: 12, justif: "PSV excellent forme." },
                    { date: "Jeudi 10/9", match: "Como vs RB Leipzig", pred: "1", pred_score: "1-1", real: null, conf: 5.0, p1: 48, pn: 27, p2: 25, justif: "Como surprise." },
                    { date: "Jeudi 10/9", match: "Bayern Munich vs Bodo Glimt", pred: "1", pred_score: "3-1", real: null, conf: 7.8, p1: 72, pn: 18, p2: 10, justif: "⭐ Bayern + Kane." },
                    { date: "Jeudi 10/9", match: "Manchester United vs Sabah", pred: "1", pred_score: "3-0", real: null, conf: 8.0, p1: 82, pn: 12, p2: 6, justif: "Man Utd vs qualifié play-off." },
                    { date: "Jeudi 10/9", match: "Slavia Praha vs Lens", pred: "1", pred_score: "2-1", real: null, conf: 6.2, p1: 52, pn: 27, p2: 21, justif: "Slavia LEADER unbeaten." }
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
            titre: "Correction & Amélioration (44.4%)",
            erreur: "Strasbourg 2-6 (goleada surprise). PSG toujours mal évalué.",
            apprentissage: "Création base math V2 (5 indices). Strasbourg = meilleure attaque (8 buts). PSG en crise profonde. Exactitude 44.4% = amélioration nette.",
            date: "06/09/2026"
        },
        {
            journee: "J4",
            type: "warning",
            titre: "Erreur logique argmax détectée",
            erreur: "Prédiction X pour Strasbourg-Monaco alors que Monaco 43% > Strasbourg 29%. Illogique statistiquement!",
            apprentissage: "CORRECTION MAJEURE: argmax(%) strict = le prono doit toujours être la probabilité la plus haute. Max 7% surprise si pattern clair.",
            date: "08/09/2026"
        },
        {
            journee: "J4",
            type: "danger",
            titre: "🔴 CATASTROPHE J4: 22.2% (2/9) - Explosion de nuls ratée!",
            erreur: "5 NULS sur 9 matchs (55.5%!) - On en avait prédit 1 seul. Havre-Angers (0-0), Lorient-Toulouse (2-2), Paris FC-Lyon (0-0), Le Mans-Lens (2-2), Strasbourg-Monaco (1-1). PSG a gagné à Brest (0-1) alors qu'on avait Brest favori à 69%!",
            apprentissage: "🎯 MÉTHODOLOGIE V3: 1) Poids nul MASSIVEMENT augmenté (+30% quand écart PPM < 1.0). 2) Le Mans = 'roi des nuls' (3N/4M) - pattern à tracker. 3) Ne PLUS sous-estimer la qualité individuelle (PSG a 5 stars malgré 'crise' apparent). 4) Bonus domicile réduit 3%→2%.",
            date: "14/09/2026"
        },
        {
            journee: "J5",
            type: "success",
            titre: "🚀 Nouvelle stratégie: Méthodologie V3",
            erreur: null,
            apprentissage: "V3 appliquée sur J5: 5 pronos NUL (X) sur 9 matchs (vs 1 en J4). Ajustements: 1) Nuls augmentés à 33-38% pour matchs équilibrés. 2) Le Mans vs Lorient prédit NUL car pattern historique fort. 3) Écarts de PPM < 1.0 = probabilité X augmentée. Objectif: >40% exactitude J5.",
            date: "14/09/2026"
        }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = APP_DATA;
}
