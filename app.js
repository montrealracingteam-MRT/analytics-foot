// ==================== APP.JS v2.0 - LOGIQUE PRINCIPALE ====================

// Données depuis localStorage ou defaults
let appData = loadAppData();

function loadAppData() {
    let stored = localStorage.getItem('analyticsFootV2');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error("Erreur parsing", e);
            return APP_DATA;
        }
    }
    return APP_DATA;
}

function saveAppData() {
    localStorage.setItem('analyticsFootV2', JSON.stringify(appData));
    document.getElementById('last-update-date').textContent = new Date().toLocaleDateString('fr-FR');
}

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('last-update-date').textContent = appData.lastUpdate;
    renderDashboard();
    renderLigue1(4); // Journée 4 par défaut
    renderLDC(1);
    renderHistorique('ligue1');
    renderLessons();
});

// ==================== NAVIGATION ====================
function switchView(view) {
    // Cacher toutes les vues
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    // Retirer active de toutes les nav
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    // Afficher la vue sélectionnée
    document.getElementById(view + '-view').classList.add('active');
    
    // Activer nav item
    event.target.closest('.nav-item').classList.add('active');
    
    // Mettre à jour le titre
    const titles = {
        'dashboard': '📊 Dashboard',
        'ligue1': '🇫🇷 Ligue 1',
        'ldc': '🏆 Champions League',
        'historique': '📚 Historique',
        'equipes': '🔍 Recherche Équipes',
        'analytics': '📈 Analytics',
        'lessons': '🧠 Apprentissage',
        'settings': '⚙️ Paramètres'
    };
    document.getElementById('page-title').textContent = titles[view];
    
    // Fermer sidebar sur mobile
    document.getElementById('sidebar').classList.remove('open');
    
    // Render spécifique
    if (view === 'analytics') renderAnalyticsCharts();
    if (view === 'lessons') renderLessons();
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// ==================== DASHBOARD ====================
function renderDashboard() {
    // Calculer métriques
    let allExact = [];
    Object.values(appData.ligue1.journees).forEach(j => {
        if (j.exactitude) {
            allExact.push(parseFloat(j.exactitude));
        }
    });
    
    const globalExact = allExact.length > 0 
        ? (allExact.reduce((a,b) => a+b, 0) / allExact.length).toFixed(1) + '%'
        : 'N/A';
    
    document.getElementById('metric-exactitude-global').textContent = globalExact;
    
    // Meilleure J
    let bestJ = 'N/A';
    let bestScore = 0;
    Object.entries(appData.ligue1.journees).forEach(([j, data]) => {
        if (data.exactitude) {
            const score = parseFloat(data.exactitude);
            if (score > bestScore) {
                bestScore = score;
                bestJ = 'J' + j;
            }
        }
    });
    document.getElementById('metric-best-j').textContent = bestJ;
    document.getElementById('metric-best-score').textContent = bestScore + '%';
    
    // Total pronos
    let totalPronos = 0;
    Object.values(appData.ligue1.journees).forEach(j => totalPronos += j.pronostics.length);
    Object.values(appData.ldc.journees).forEach(j => totalPronos += j.pronostics.length);
    document.getElementById('metric-total-pronos').textContent = totalPronos;
    
    // Confiance moyenne
    let confs = [];
    Object.values(appData.ligue1.journees).forEach(j => confs.push(j.confiance_moy));
    const confMoy = (confs.reduce((a,b) => a+b, 0) / confs.length).toFixed(1);
    document.getElementById('metric-confiance').textContent = confMoy;
    
    // Charts
    renderChartExactitude();
    renderChartDistribution();
}

function renderChartExactitude() {
    const ctx = document.getElementById('chart-exactitude');
    if (!ctx) return;
    
    const journees = Object.keys(appData.ligue1.journees);
    const scores = journees.map(j => {
        const ex = appData.ligue1.journees[j].exactitude;
        return ex ? parseFloat(ex) : null;
    });
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: journees.map(j => 'J' + j),
            datasets: [{
                label: 'Exactitude Ligue 1 (%)',
                data: scores,
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 6,
                pointBackgroundColor: '#6366f1',
                pointBorderColor: 'white',
                pointBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { 
                    beginAtZero: true, 
                    max: 100,
                    ticks: {
                        callback: v => v + '%'
                    }
                }
            }
        }
    });
}

function renderChartDistribution() {
    const ctx = document.getElementById('chart-distribution');
    if (!ctx) return;
    
    const j4 = appData.ligue1.journees["4"];
    if (!j4) return;
    
    let counts = {"1": 0, "X": 0, "2": 0};
    j4.pronostics.forEach(p => counts[p.pred]++);
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['🏠 Domicile', '🤝 Nul', '✈️ Extérieur'],
            datasets: [{
                data: [counts["1"], counts["X"], counts["2"]],
                backgroundColor: ['#10b981', '#f59e0b', '#3b82f6'],
                borderWidth: 3,
                borderColor: 'white'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

// ==================== LIGUE 1 ====================
function renderLigue1(journeeNum) {
    const j = appData.ligue1.journees[journeeNum];
    if (!j) return;
    
    // Update selector
    document.getElementById('l1-journee-select').value = journeeNum;
    
    // Stats de la journée
    const stats = document.getElementById('l1-journee-stats');
    stats.innerHTML = `
        <div class="stat-mini">
            <span>Date</span>
            <strong style="font-size:14px">${j.date}</strong>
        </div>
        <div class="stat-mini">
            <span>Matchs</span>
            <strong>${j.pronostics.length}</strong>
        </div>
        <div class="stat-mini">
            <span>Confiance moy</span>
            <strong>${j.confiance_moy}/10</strong>
        </div>
        <div class="stat-mini">
            <span>Exactitude</span>
            <strong>${j.exactitude || '⏳'}</strong>
        </div>
    `;
    
    // Pronostics
    const grid = document.getElementById('l1-pronostics-grid');
    grid.innerHTML = '';
    
    j.pronostics.forEach(p => {
        grid.appendChild(createPronoCard(p));
    });
    
    // Classement
    renderClassementL1();
    
    // Math
    renderMathL1();
}

function createPronoCard(p) {
    const card = document.createElement('div');
    
    // Déterminer la couleur selon confiance ou résultat
    let cardClass = 'prono-card ';
    if (p.real !== null && p.real !== undefined) {
        cardClass += p.correct ? 'correct' : 'wrong';
    } else if (p.conf >= 7) {
        cardClass += 'high-conf';
    } else if (p.conf >= 5) {
        cardClass += 'mid-conf';
    } else {
        cardClass += 'low-conf';
    }
    card.className = cardClass;
    
    // Prono display
    let pronoDisplay = p.pred;
    if (p.pred === '1') pronoDisplay = '🏠 Domicile';
    if (p.pred === 'X') pronoDisplay = '🤝 Nul';
    if (p.pred === '2') pronoDisplay = '✈️ Extérieur';
    
    let probasHTML = '';
    if (p.p1 !== undefined) {
        probasHTML = `
            <div class="prono-probas">
                <div class="proba-badge ${p.p1 > 45 ? 'high' : ''}">1: ${p.p1}%</div>
                <div class="proba-badge ${p.pn > 40 ? 'high' : ''}">N: ${p.pn}%</div>
                <div class="proba-badge ${p.p2 > 45 ? 'high' : ''}">2: ${p.p2}%</div>
            </div>
        `;
    }
    
    let justifHTML = p.justif ? `
        <div class="prono-justif">
            <p>${p.justif}</p>
        </div>
    ` : '';
    
    let resultHTML = '';
    if (p.real !== null && p.real !== undefined) {
        resultHTML = `
            <div class="result-real ${p.correct ? 'correct' : 'wrong'}">
                ${p.correct ? '✅' : '❌'} Résultat réel: <strong>${p.real}</strong>
            </div>
        `;
    }
    
    let dateHTML = p.date ? `<div class="prono-date">${p.date}</div>` : '';
    
    card.innerHTML = `
        ${dateHTML}
        <div class="prono-header">
            <div class="prono-match">${p.match}</div>
            <div class="conf-badge">${p.conf.toFixed(1)}/10</div>
        </div>
        ${probasHTML}
        <div class="prono-predi">${pronoDisplay}</div>
        <div class="prono-score">Score potentiel: <strong>${p.pred_score}</strong></div>
        ${justifHTML}
        <div class="confiance-bar">
            <div class="confiance-fill" style="width: ${p.conf * 10}%"></div>
        </div>
        ${resultHTML}
    `;
    
    return card;
}

function renderClassementL1() {
    const tbody = document.getElementById('l1-classement');
    tbody.innerHTML = '';
    
    let sorted = Object.entries(appData.ligue1.classement)
        .sort((a, b) => b[1].pts - a[1].pts);
    
    sorted.forEach(([team, stats], idx) => {
        const diff = stats.gf - stats.ga;
        const formeHTML = stats.forme.map(f => {
            const color = f === 'V' ? '#10b981' : (f === 'N' ? '#f59e0b' : '#ef4444');
            return `<span style="display:inline-block;width:24px;height:24px;background:${color};color:white;border-radius:4px;text-align:center;line-height:24px;font-weight:700;font-size:12px;margin-right:2px">${f}</span>`;
        }).join('');
        
        tbody.innerHTML += `
            <tr>
                <td><strong>${idx + 1}</strong></td>
                <td><strong>${team}</strong></td>
                <td><strong>${stats.pts}</strong></td>
                <td>${stats.j}</td>
                <td>${stats.g}</td>
                <td>${stats.n}</td>
                <td>${stats.p}</td>
                <td style="color:${diff > 0 ? '#10b981' : (diff < 0 ? '#ef4444' : '#64748b')}">
                    ${diff > 0 ? '+' : ''}${diff}
                </td>
                <td>${formeHTML}</td>
            </tr>
        `;
    });
}

function renderMathL1() {
    const tbody = document.getElementById('l1-math');
    tbody.innerHTML = '';
    
    let sorted = Object.entries(appData.ligue1.math)
        .sort((a, b) => b[1].conf - a[1].conf);
    
    sorted.forEach(([team, math]) => {
        let statut = '';
        if (math.conf >= 8) statut = '🔥 Excellent';
        else if (math.conf >= 7) statut = '✅ Très fiable';
        else if (math.conf >= 5.5) statut = '🟡 Correct';
        else if (math.conf >= 4) statut = '🟠 Moyen';
        else statut = '🔴 En crise';
        
        tbody.innerHTML += `
            <tr>
                <td><strong>${team}</strong></td>
                <td>${math.ppm.toFixed(2)}</td>
                <td>${math.off_power.toFixed(2)}</td>
                <td>${math.def_power.toFixed(2)}</td>
                <td><strong>${math.conf.toFixed(1)}/10</strong></td>
                <td>${statut}</td>
            </tr>
        `;
    });
}

function changerJournee(delta, type) {
    const select = document.getElementById(type === 'ligue1' ? 'l1-journee-select' : 'ldc-journee-select');
    const currentVal = parseInt(select.value);
    const newVal = currentVal + delta;
    
    if (select.querySelector(`option[value="${newVal}"]`)) {
        select.value = newVal;
        afficherJournee(newVal, type);
    }
}

function afficherJournee(num, type) {
    if (type === 'ligue1') renderLigue1(num);
    else renderLDC(num);
}

// ==================== LIGUE DES CHAMPIONS ====================
function renderLDC(journeeNum) {
    const j = appData.ldc.journees[journeeNum];
    if (!j) return;
    
    // Stats journée
    const stats = document.getElementById('ldc-journee-stats');
    stats.innerHTML = `
        <div class="stat-mini">
            <span>Dates</span>
            <strong style="font-size:14px">${j.date}</strong>
        </div>
        <div class="stat-mini">
            <span>Matchs</span>
            <strong>${j.pronostics.length}</strong>
        </div>
        <div class="stat-mini">
            <span>Confiance moy</span>
            <strong>${j.confiance_moy}/10</strong>
        </div>
        <div class="stat-mini">
            <span>Exactitude</span>
            <strong>${j.exactitude || '⏳'}</strong>
        </div>
    `;
    
    // Pronostics groupés par jour
    const grid = document.getElementById('ldc-pronostics-grid');
    grid.innerHTML = '';
    
    let currentDate = '';
    j.pronostics.forEach(p => {
        if (p.date && p.date !== currentDate) {
            currentDate = p.date;
            grid.innerHTML += `<div style="grid-column:1/-1;padding:16px;background:linear-gradient(90deg,#6366f1,#8b5cf6);color:white;border-radius:8px;font-weight:700;margin-top:8px">📅 ${p.date}</div>`;
        }
        grid.appendChild(createPronoCard(p));
    });
    
    // Table équipes
    const tbody = document.getElementById('ldc-teams-table');
    tbody.innerHTML = '';
    
    let sorted = Object.entries(appData.ldc.teams)
        .sort((a, b) => b[1].conf - a[1].conf);
    
    sorted.forEach(([team, math]) => {
        let statut = '';
        if (math.conf >= 8) statut = '🔥 Excellent';
        else if (math.conf >= 7) statut = '✅ Très fiable';
        else if (math.conf >= 5.5) statut = '🟡 Correct';
        else if (math.conf >= 4) statut = '🟠 Moyen';
        else statut = '🔴 En crise';
        
        tbody.innerHTML += `
            <tr>
                <td><strong>${team}</strong></td>
                <td>${math.country}</td>
                <td>${math.ppm.toFixed(2)}</td>
                <td><strong>${math.conf.toFixed(1)}/10</strong></td>
                <td>${statut}</td>
            </tr>
        `;
    });
}

// ==================== HISTORIQUE ====================
function renderHistorique(type) {
    const content = document.getElementById('histo-content');
    const source = type === 'ligue1' ? appData.ligue1 : appData.ldc;
    
    content.innerHTML = '';
    
    Object.entries(source.journees).reverse().forEach(([num, j]) => {
        const exactColor = j.exactitude ? 
            (parseFloat(j.exactitude) >= 50 ? '#10b981' : (parseFloat(j.exactitude) >= 30 ? '#f59e0b' : '#ef4444')) 
            : '#94a3b8';
        
        let matchsHTML = '';
        j.pronostics.forEach(p => {
            const statusIcon = p.real ? (p.correct ? '✅' : '❌') : '⏳';
            const bgColor = p.real ? (p.correct ? 'rgba(16,185,129,0.05)' : 'rgba(239,68,68,0.05)') : 'transparent';
            
            matchsHTML += `
                <div style="padding:12px;border-bottom:1px solid #e2e8f0;background:${bgColor};display:flex;justify-content:space-between;align-items:center">
                    <div>
                        <strong>${p.match}</strong>
                        <div style="font-size:12px;color:#64748b;margin-top:4px">
                            Prédit: ${p.pred} (${p.pred_score}) - Confiance ${p.conf}/10
                            ${p.real ? ` | Réel: <strong>${p.real}</strong>` : ''}
                        </div>
                    </div>
                    <div style="font-size:24px">${statusIcon}</div>
                </div>
            `;
        });
        
        content.innerHTML += `
            <div class="section-block">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
                    <h2 style="margin:0;border:none;padding:0">${j.nom}</h2>
                    <div style="text-align:right">
                        <div style="font-size:12px;color:#64748b">${j.date}</div>
                        <div style="font-size:24px;font-weight:800;color:${exactColor}">
                            ${j.exactitude || '⏳ En attente'}
                        </div>
                    </div>
                </div>
                ${matchsHTML}
            </div>
        `;
    });
}

function switchHistoTab(type) {
    document.querySelectorAll('.tab-sec').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    renderHistorique(type);
}

// ==================== RECHERCHE ÉQUIPES ====================
function rechercherEquipe(query) {
    const results = document.getElementById('team-results');
    
    if (!query || query.length < 2) {
        results.innerHTML = '<p style="text-align:center;color:#64748b;padding:40px">Tape au moins 2 caractères pour chercher...</p>';
        return;
    }
    
    const lowerQuery = query.toLowerCase();
    let matches = [];
    
    // Chercher dans Ligue 1
    Object.entries(appData.ligue1.math).forEach(([team, math]) => {
        if (team.toLowerCase().includes(lowerQuery)) {
            matches.push({ team, math, class: appData.ligue1.classement[team], competition: 'Ligue 1' });
        }
    });
    
    // Chercher dans LDC
    Object.entries(appData.ldc.teams).forEach(([team, math]) => {
        if (team.toLowerCase().includes(lowerQuery)) {
            const existing = matches.find(m => m.team === team);
            if (!existing) {
                matches.push({ team, math, competition: 'LDC / ' + (math.country || '') });
            }
        }
    });
    
    if (matches.length === 0) {
        results.innerHTML = '<p style="text-align:center;color:#64748b;padding:40px">Aucune équipe trouvée</p>';
        return;
    }
    
    results.innerHTML = '';
    matches.forEach(m => {
        // Chercher tous les pronos de cette équipe
        let pronos = [];
        Object.entries(appData.ligue1.journees).forEach(([num, j]) => {
            j.pronostics.forEach(p => {
                if (p.match.includes(m.team)) {
                    pronos.push({ ...p, journee: 'J' + num, competition: 'Ligue 1' });
                }
            });
        });
        Object.entries(appData.ldc.journees).forEach(([num, j]) => {
            j.pronostics.forEach(p => {
                if (p.match.includes(m.team)) {
                    pronos.push({ ...p, journee: 'J' + num, competition: 'LDC' });
                }
            });
        });
        
        let correct = pronos.filter(p => p.correct === true).length;
        let wrong = pronos.filter(p => p.correct === false).length;
        let pending = pronos.filter(p => p.correct === undefined || p.correct === null).length;
        
        let pronosHTML = pronos.map(p => {
            const icon = p.correct === true ? '✅' : (p.correct === false ? '❌' : '⏳');
            return `
                <div style="padding:12px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center">
                    <div>
                        <strong>${p.match}</strong>
                        <div style="font-size:12px;color:#64748b">${p.competition} • ${p.journee}</div>
                    </div>
                    <div style="text-align:right">
                        <div>Prédit: <strong>${p.pred}</strong> (${p.conf}/10)</div>
                        ${p.real ? `<div style="font-size:12px;color:#64748b">Réel: ${p.real}</div>` : ''}
                    </div>
                    <div style="font-size:24px;margin-left:12px">${icon}</div>
                </div>
            `;
        }).join('');
        
        results.innerHTML += `
            <div class="section-block">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
                    <div>
                        <h2 style="margin:0;border:none;padding:0">${m.team}</h2>
                        <p style="color:#64748b;margin-top:4px">${m.competition}</p>
                    </div>
                    <div style="text-align:right">
                        <div style="font-size:32px;font-weight:800;color:#6366f1">${m.math.conf.toFixed(1)}/10</div>
                        <div style="font-size:12px;color:#64748b">Confiance</div>
                    </div>
                </div>
                
                <div class="metrics-grid-small" style="margin-bottom:20px">
                    <div class="stat-mini">
                        <span>PPM</span>
                        <strong>${m.math.ppm.toFixed(2)}</strong>
                    </div>
                    ${m.class ? `
                    <div class="stat-mini">
                        <span>Points</span>
                        <strong>${m.class.pts}</strong>
                    </div>
                    <div class="stat-mini">
                        <span>Buts pour</span>
                        <strong>${m.class.gf}</strong>
                    </div>
                    <div class="stat-mini">
                        <span>Buts contre</span>
                        <strong>${m.class.ga}</strong>
                    </div>
                    ` : ''}
                    <div class="stat-mini">
                        <span>Correct/Total</span>
                        <strong>${correct}/${pronos.length}</strong>
                    </div>
                </div>
                
                <h3 style="margin-bottom:12px">Historique Pronostics</h3>
                ${pronosHTML || '<p style="color:#64748b">Aucun pronostic pour cette équipe</p>'}
            </div>
        `;
    });
}

// ==================== ANALYTICS AVANCÉS ====================
function renderAnalyticsCharts() {
    // Chart Exactitude Full
    const ctx1 = document.getElementById('chart-exactitude-full');
    if (ctx1) {
        const journees = Object.keys(appData.ligue1.journees);
        const scores = journees.map(j => {
            const ex = appData.ligue1.journees[j].exactitude;
            return ex ? parseFloat(ex) : null;
        });
        
        // Détruire chart existant si présent
        if (window.chartExactFull) window.chartExactFull.destroy();
        
        window.chartExactFull = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: journees.map(j => 'J' + j),
                datasets: [{
                    label: 'Exactitude (%)',
                    data: scores,
                    backgroundColor: scores.map(s => s >= 50 ? '#10b981' : (s >= 30 ? '#f59e0b' : '#ef4444')),
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, max: 100 }
                }
            }
        });
    }
    
    // Chart Distribution résultats
    const ctx2 = document.getElementById('chart-results');
    if (ctx2) {
        let counts = {"1": 0, "X": 0, "2": 0};
        Object.values(appData.ligue1.journees).forEach(j => {
            j.pronostics.forEach(p => {
                if (p.pred) counts[p.pred]++;
            });
        });
        
        if (window.chartResults) window.chartResults.destroy();
        
        window.chartResults = new Chart(ctx2, {
            type: 'polarArea',
            data: {
                labels: ['🏠 Victoires Domicile', '🤝 Nuls', '✈️ Victoires Extérieur'],
                datasets: [{
                    data: [counts["1"], counts["X"], counts["2"]],
                    backgroundColor: ['rgba(16,185,129,0.7)', 'rgba(245,158,11,0.7)', 'rgba(59,130,246,0.7)']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } }
            }
        });
    }
    
    // Chart Confiance vs Exactitude
    const ctx3 = document.getElementById('chart-conf-exact');
    if (ctx3) {
        const journees = Object.keys(appData.ligue1.journees);
        const confs = journees.map(j => appData.ligue1.journees[j].confiance_moy * 10);
        const exacts = journees.map(j => {
            const ex = appData.ligue1.journees[j].exactitude;
            return ex ? parseFloat(ex) : 0;
        });
        
        if (window.chartConfExact) window.chartConfExact.destroy();
        
        window.chartConfExact = new Chart(ctx3, {
            type: 'line',
            data: {
                labels: journees.map(j => 'J' + j),
                datasets: [
                    {
                        label: 'Confiance (/100)',
                        data: confs,
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245,158,11,0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Exactitude (%)',
                        data: exacts,
                        borderColor: '#6366f1',
                        backgroundColor: 'rgba(99,102,241,0.1)',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true, max: 100 } }
            }
        });
    }
}

// ==================== LEÇONS APPRISES ====================
function renderLessons() {
    const timeline = document.getElementById('lessons-timeline');
    timeline.innerHTML = '';
    
    appData.lecons.forEach(lecon => {
        timeline.innerHTML += `
            <div class="lesson-item ${lecon.type}">
                <span class="lesson-journee">${lecon.journee}</span>
                <div class="lesson-title">${lecon.titre}</div>
                ${lecon.erreur ? `<div class="lesson-erreur">❌ <strong>Erreur:</strong> ${lecon.erreur}</div>` : ''}
                <div class="lesson-apprentissage">💡 <strong>Apprentissage:</strong> ${lecon.apprentissage}</div>
                <div style="font-size:12px;color:#94a3b8;margin-top:8px">📅 ${lecon.date}</div>
            </div>
        `;
    });
}

function ajouterLecon() {
    const title = document.getElementById('lesson-title').value.trim();
    const content = document.getElementById('lesson-content').value.trim();
    
    if (!title || !content) {
        alert('⚠️ Remplis le titre et la description');
        return;
    }
    
    const lastJourneeNum = Math.max(...Object.keys(appData.ligue1.journees).map(Number));
    
    appData.lecons.push({
        journee: 'J' + lastJourneeNum,
        type: 'success',
        titre: title,
        erreur: null,
        apprentissage: content,
        date: new Date().toLocaleDateString('fr-FR')
    });
    
    saveAppData();
    document.getElementById('lesson-title').value = '';
    document.getElementById('lesson-content').value = '';
    renderLessons();
    alert('✅ Leçon sauvegardée!');
}

// ==================== SETTINGS ====================
function openImportModal() {
    document.getElementById('importModal').classList.add('open');
}

function closeImportModal() {
    document.getElementById('importModal').classList.remove('open');
}

function importJSON() {
    const input = document.getElementById('jsonInput').value.trim();
    if (!input) {
        alert('⚠️ Colle un JSON valide');
        return;
    }
    
    try {
        const newData = JSON.parse(input);
        // Merger avec les données existantes
        appData = { ...appData, ...newData };
        saveAppData();
        location.reload();
    } catch (e) {
        alert('❌ JSON invalide: ' + e.message);
    }
}

function exporterDonnees() {
    const dataStr = JSON.stringify(appData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analytics-foot-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function reinitialiser() {
    if (confirm('⚠️ Vraiment? Cela réinitialisera TOUTES les données!')) {
        localStorage.removeItem('analyticsFootV2');
        location.reload();
    }
}

function openResultsModal() {
    const modal = document.getElementById('resultsModal');
    const form = document.getElementById('results-form');
    
    // Trouver dernière journée sans résultats
    let journeeAJouer = null;
    Object.entries(appData.ligue1.journees).forEach(([num, j]) => {
        if (!j.exactitude) {
            journeeAJouer = num;
        }
    });
    
    if (!journeeAJouer) {
        form.innerHTML = '<p>✅ Toutes les journées sont complètes!</p>';
        modal.classList.add('open');
        return;
    }
    
    const j = appData.ligue1.journees[journeeAJouer];
    form.innerHTML = `
        <h3 style="margin-bottom:16px">Journée ${journeeAJouer} - ${j.date}</h3>
        <div id="results-inputs">
            ${j.pronostics.map((p, idx) => `
                <div style="margin-bottom:16px;padding:12px;background:#f8fafc;border-radius:8px">
                    <strong>${p.match}</strong>
                    <div style="font-size:12px;color:#64748b;margin:4px 0">
                        Prédit: ${p.pred} (${p.pred_score})
                    </div>
                    <input type="text" 
                        placeholder="Résultat réel (ex: 2-1)" 
                        id="result-${idx}"
                        style="width:100%;padding:8px;border:2px solid #e2e8f0;border-radius:6px;margin-top:8px">
                </div>
            `).join('')}
        </div>
        <button onclick="sauvegarderResultats(${journeeAJouer})" class="btn-primary" style="width:100%;margin-top:16px">
            💾 Sauvegarder tous les résultats
        </button>
    `;
    
    modal.classList.add('open');
}

function closeResultsModal() {
    document.getElementById('resultsModal').classList.remove('open');
}

function sauvegarderResultats(journeeNum) {
    const j = appData.ligue1.journees[journeeNum];
    let correctCount = 0;
    
    j.pronostics.forEach((p, idx) => {
        const input = document.getElementById(`result-${idx}`).value.trim();
        if (input) {
            p.real = input;
            // Déterminer si correct (comparer prono avec résultat)
            const parts = input.split('-');
            if (parts.length === 2) {
                const g1 = parseInt(parts[0]);
                const g2 = parseInt(parts[1]);
                let realPred = 'X';
                if (g1 > g2) realPred = '1';
                if (g2 > g1) realPred = '2';
                p.correct = (p.pred === realPred);
                if (p.correct) correctCount++;
            }
        }
    });
    
    // Calculer exactitude
    const exactitude = ((correctCount / j.pronostics.length) * 100).toFixed(1) + '%';
    j.exactitude = exactitude;
    
    saveAppData();
    closeResultsModal();
    alert(`✅ Résultats sauvegardés! Exactitude: ${exactitude}`);
    location.reload();
}

// Fermer modals en cliquant en dehors
window.onclick = function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('open');
    }
};
