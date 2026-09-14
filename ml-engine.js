// ==================== MACHINE LEARNING MODULE v1.0 ====================
// Système d'auto-apprentissage basé sur les patterns d'erreurs

const MLEngine = {
    analyserErreurs(appData) {
        let stats = {
            total: 0, corrects: 0, erreurs: [],
            patterns: {
                pred_1_correct: 0, pred_1_total: 0,
                pred_X_correct: 0, pred_X_total: 0,
                pred_2_correct: 0, pred_2_total: 0,
                haute_conf_correct: 0, haute_conf_total: 0,
                moy_conf_correct: 0, moy_conf_total: 0,
                basse_conf_correct: 0, basse_conf_total: 0,
                nuls_predits: 0, nuls_reels: 0,
                dom_predits: 0, dom_reels: 0,
                ext_predits: 0, ext_reels: 0
            },
            equipes_problematiques: {},
            insights: []
        };
        
        Object.entries(appData.ligue1.journees).forEach(([num, journee]) => {
            journee.pronostics.forEach(p => {
                if (p.real === null || p.real === undefined) return;
                stats.total++;
                if (p.correct) stats.corrects++;
                
                if (p.pred === '1') {
                    stats.patterns.pred_1_total++;
                    if (p.correct) stats.patterns.pred_1_correct++;
                    stats.patterns.dom_predits++;
                }
                if (p.pred === 'X') {
                    stats.patterns.pred_X_total++;
                    if (p.correct) stats.patterns.pred_X_correct++;
                    stats.patterns.nuls_predits++;
                }
                if (p.pred === '2') {
                    stats.patterns.pred_2_total++;
                    if (p.correct) stats.patterns.pred_2_correct++;
                    stats.patterns.ext_predits++;
                }
                
                if (p.conf >= 7) {
                    stats.patterns.haute_conf_total++;
                    if (p.correct) stats.patterns.haute_conf_correct++;
                } else if (p.conf >= 5) {
                    stats.patterns.moy_conf_total++;
                    if (p.correct) stats.patterns.moy_conf_correct++;
                } else {
                    stats.patterns.basse_conf_total++;
                    if (p.correct) stats.patterns.basse_conf_correct++;
                }
                
                if (p.real) {
                    const parts = p.real.split('-');
                    if (parts.length === 2) {
                        const g1 = parseInt(parts[0]);
                        const g2 = parseInt(parts[1]);
                        if (g1 === g2) stats.patterns.nuls_reels++;
                        else if (g1 > g2) stats.patterns.dom_reels++;
                        else stats.patterns.ext_reels++;
                    }
                }
                
                const equipes = p.match.split(' vs ');
                if (!p.correct) {
                    equipes.forEach(eq => {
                        if (!stats.equipes_problematiques[eq]) {
                            stats.equipes_problematiques[eq] = { erreurs: 0, total: 0 };
                        }
                        stats.equipes_problematiques[eq].erreurs++;
                    });
                    stats.erreurs.push({
                        journee: 'J' + num, match: p.match,
                        pred: p.pred, real: p.real, conf: p.conf, justif: p.justif
                    });
                }
                
                equipes.forEach(eq => {
                    if (!stats.equipes_problematiques[eq]) {
                        stats.equipes_problematiques[eq] = { erreurs: 0, total: 0 };
                    }
                    stats.equipes_problematiques[eq].total++;
                });
            });
        });
        
        return stats;
    },
    
    genererInsights(stats) {
        const insights = [];
        const exactGlobale = stats.total > 0 ? (stats.corrects / stats.total * 100).toFixed(1) : 0;
        
        insights.push({
            type: exactGlobale >= 50 ? 'success' : (exactGlobale >= 35 ? 'warning' : 'danger'),
            icon: '🎯',
            titre: `Exactitude globale: ${exactGlobale}%`,
            description: `${stats.corrects} prédictions correctes sur ${stats.total} matchs joués.`
        });
        
        const types = [
            { nom: 'Domicile (1)', pct: stats.patterns.pred_1_total > 0 ? (stats.patterns.pred_1_correct / stats.patterns.pred_1_total * 100) : 0, count: stats.patterns.pred_1_total },
            { nom: 'Nul (X)', pct: stats.patterns.pred_X_total > 0 ? (stats.patterns.pred_X_correct / stats.patterns.pred_X_total * 100) : 0, count: stats.patterns.pred_X_total },
            { nom: 'Extérieur (2)', pct: stats.patterns.pred_2_total > 0 ? (stats.patterns.pred_2_correct / stats.patterns.pred_2_total * 100) : 0, count: stats.patterns.pred_2_total }
        ];
        
        const meilleur = types.reduce((max, t) => t.pct > max.pct ? t : max);
        const pire = types.reduce((min, t) => t.pct < min.pct && t.count > 0 ? t : min);
        
        insights.push({
            type: 'info', icon: '🏆',
            titre: `Meilleur type: ${meilleur.nom}`,
            description: `${meilleur.pct.toFixed(1)}% de réussite sur ${meilleur.count} prédictions.`
        });
        
        if (pire.pct < meilleur.pct - 20) {
            insights.push({
                type: 'warning', icon: '⚠️',
                titre: `Pire type: ${pire.nom}`,
                description: `Seulement ${pire.pct.toFixed(1)}% de réussite. À revoir!`
            });
        }
        
        if (stats.patterns.nuls_predits > stats.patterns.nuls_reels * 1.5) {
            insights.push({
                type: 'danger', icon: '📊',
                titre: 'Sur-estimation des nuls',
                description: `Prédit ${stats.patterns.nuls_predits} nuls, seulement ${stats.patterns.nuls_reels} réalisés.`,
                action: 'Ajuster formule: Réduire poids nul de 15%'
            });
        } else if (stats.patterns.nuls_reels > stats.patterns.nuls_predits * 1.5) {
            insights.push({
                type: 'danger', icon: '📊',
                titre: 'Sous-estimation MASSIVE des nuls',
                description: `Prédit ${stats.patterns.nuls_predits} nuls, mais ${stats.patterns.nuls_reels} réalisés!`,
                action: 'URGENT: Augmenter poids nul de 30%+'
            });
        }
        
        const hauteConfPct = stats.patterns.haute_conf_total > 0 ? (stats.patterns.haute_conf_correct / stats.patterns.haute_conf_total * 100) : 0;
        
        if (hauteConfPct >= 60) {
            insights.push({
                type: 'success', icon: '✅',
                titre: 'Confiance haute = fiable',
                description: `Prédictions haute confiance (7+/10) réussissent à ${hauteConfPct.toFixed(1)}%.`
            });
        } else if (hauteConfPct < 50 && stats.patterns.haute_conf_total > 5) {
            insights.push({
                type: 'danger', icon: '🔴',
                titre: 'Sur-confiance dangereuse',
                description: `Confiance haute mais seulement ${hauteConfPct.toFixed(1)}% correct.`,
                action: 'Réduire globalement les scores de confiance'
            });
        }
        
        const problematiques = Object.entries(stats.equipes_problematiques)
            .filter(([_, s]) => s.total >= 2 && (s.erreurs / s.total) > 0.6)
            .sort((a, b) => (b[1].erreurs / b[1].total) - (a[1].erreurs / a[1].total));
        
        if (problematiques.length > 0) {
            const worst = problematiques[0];
            insights.push({
                type: 'warning', icon: '⚠️',
                titre: `Équipe la plus difficile: ${worst[0]}`,
                description: `${worst[1].erreurs} erreurs sur ${worst[1].total} matchs (${(worst[1].erreurs / worst[1].total * 100).toFixed(0)}%).`
            });
        }
        
        return insights;
    },
    
    suggererAjustements(stats) {
        const ajustements = [];
        
        if (stats.patterns.nuls_predits > 0 && stats.patterns.nuls_predits > stats.patterns.nuls_reels * 1.5) {
            ajustements.push({
                categorie: 'Distribution', probleme: 'Trop de nuls prédits',
                ajustement: 'Réduire poids nul de 15% dans la formule',
                code: `PN_ajusté = PN_original * 0.85`,
                impact: 'Élevé', confiance_ajustement: 8
            });
        }
        
        if (stats.patterns.nuls_reels > stats.patterns.nuls_predits * 1.5) {
            ajustements.push({
                categorie: 'Distribution CRITIQUE', probleme: 'Sous-estimation MASSIVE des nuls',
                ajustement: 'Augmenter poids nul de 30% quand écart PPM < 1.0',
                code: `PN_ajusté = PN_original * 1.3 (si |PPM_diff| < 1.0)`,
                impact: 'Élevé', confiance_ajustement: 9
            });
        }
        
        if (stats.patterns.pred_2_total > 0) {
            const pct2 = stats.patterns.pred_2_correct / stats.patterns.pred_2_total;
            if (pct2 < 0.4 && stats.patterns.pred_2_total >= 3) {
                ajustements.push({
                    categorie: 'Victoires extérieures', probleme: 'Prédictions "2" échouent souvent',
                    ajustement: 'Vérifier boost domicile - peut-être trop fort',
                    code: `BONUS_DOM = 3% → 2%`,
                    impact: 'Moyen', confiance_ajustement: 6
                });
            }
        }
        
        if (stats.patterns.dom_predits > stats.patterns.dom_reels * 1.3) {
            ajustements.push({
                categorie: 'Victoires domicile', probleme: 'Trop de victoires domicile prédites',
                ajustement: 'Réduire bonus domicile',
                code: `BONUS_DOM = 3% → 2%`,
                impact: 'Moyen', confiance_ajustement: 7
            });
        }
        
        return ajustements;
    },
    
    detecterPatterns(appData) {
        const patterns = [];
        const teamsStats = {};
        Object.entries(appData.ligue1.classement).forEach(([team, stats]) => {
            teamsStats[team] = {
                pts: stats.pts, j: stats.j,
                ppm: stats.j > 0 ? stats.pts / stats.j : 0,
                diff: stats.gf - stats.ga
            };
        });
        
        const crises = Object.entries(teamsStats)
            .filter(([_, s]) => s.ppm < 1 && s.diff < -3)
            .map(([t, s]) => ({ team: t, ...s }));
        
        if (crises.length > 0) {
            patterns.push({
                type: 'crise',
                titre: `${crises.length} équipe(s) en crise profonde`,
                description: `${crises.map(c => c.team).join(', ')} - PPM < 1.0 et diff négatif`,
                impact: 'Nuls plus probables face à ces équipes',
                confiance: 8
            });
        }
        
        const dominantes = Object.entries(teamsStats)
            .filter(([_, s]) => s.ppm >= 2.5 && s.j >= 2)
            .map(([t, s]) => ({ team: t, ...s }));
        
        if (dominantes.length > 0) {
            patterns.push({
                type: 'dominant',
                titre: `${dominantes.length} équipe(s) dominante(s)`,
                description: `${dominantes.map(d => d.team).join(', ')} - PPM >= 2.5`,
                impact: 'Prédire victoire quasi-sûre',
                confiance: 9
            });
        }
        
        const offensives = Object.entries(appData.ligue1.classement)
            .filter(([_, s]) => s.j > 0 && (s.gf / s.j) >= 2.0)
            .map(([t, s]) => ({ team: t, gf_par_match: (s.gf / s.j).toFixed(2) }));
        
        if (offensives.length > 0) {
            patterns.push({
                type: 'offensive',
                titre: `${offensives.length} équipe(s) très offensive(s)`,
                description: `${offensives.map(o => `${o.team} (${o.gf_par_match} buts/J)`).join(', ')}`,
                impact: 'Scores élevés probables',
                confiance: 7
            });
        }
        
        return patterns;
    },
    
    predireMatch(equipe1, equipe2, appData, boost_dom = 3) {
        const t1 = appData.ligue1.math[equipe1];
        const t2 = appData.ligue1.math[equipe2];
        if (!t1 || !t2) return null;
        
        const ppm_diff = t1.ppm - t2.ppm;
        const off_diff = t1.off_power - t2.off_power;
        const def_diff = t1.def_power - t2.def_power;
        
        let p1 = 50 + (ppm_diff * 15) + (off_diff * 5) + (def_diff * 3) + boost_dom;
        p1 = Math.max(15, Math.min(85, p1));
        
        let p2 = 100 - p1 - 25;
        p2 = Math.max(10, Math.min(70, p2));
        
        let pn = 100 - p1 - p2;
        pn = Math.max(10, Math.min(35, pn));
        
        const total = p1 + pn + p2;
        p1 = Math.round(p1 / total * 100);
        pn = Math.round(pn / total * 100);
        p2 = 100 - p1 - pn;
        
        let prono;
        if (p1 >= pn && p1 >= p2) prono = '1';
        else if (p2 >= p1 && p2 >= pn) prono = '2';
        else prono = 'X';
        
        const max_prob = Math.max(p1, pn, p2);
        const confiance = Math.min(10, Math.max(1, (max_prob - 30) / 5 + 3));
        
        return {
            p1, pn, p2, prono,
            confiance: parseFloat(confiance.toFixed(1)),
            equipe1_confiance: t1.conf,
            equipe2_confiance: t2.conf
        };
    }
};

window.MLEngine = MLEngine;
