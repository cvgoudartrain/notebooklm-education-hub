// ===================================
// CBSE Class 10 Science - App.js
// Interactive Features & Progress Tracking
// ===================================

// Chapter Data Configuration
const chapterData = {
    '01': { difficulty: 'medium', category: 'chemistry', time: 45, folder: '01_chemical_reactions_equations', hasExemplar: true },
    '02': { difficulty: 'easy', category: 'chemistry', time: 40, folder: '02_acids_bases_salts', hasExemplar: true },
    '03': { difficulty: 'medium', category: 'chemistry', time: 40, folder: '03_metals_non_metals', hasExemplar: true },
    '04': { difficulty: 'hard', category: 'chemistry', time: 50, folder: '04_carbon_compounds', hasExemplar: true },
    '05': { difficulty: 'medium', category: 'chemistry', time: 35, folder: '05_periodic_classification_elements', hasExemplar: true },
    '06': { difficulty: 'hard', category: 'biology', time: 50, folder: '06_life_processes', hasExemplar: true },
    '07': { difficulty: 'medium', category: 'biology', time: 45, folder: '07_control_coordination', hasExemplar: true },
    '08': { difficulty: 'medium', category: 'biology', time: 45, folder: '08_how_organisms_reproduce', hasExemplar: true },
    '09': { difficulty: 'medium', category: 'biology', time: 40, folder: '09_heredity_evolution', hasExemplar: true },
    '10': { difficulty: 'hard', category: 'physics', time: 55, folder: '10_light_reflection_refraction', hasExemplar: true },
    '11': { difficulty: 'medium', category: 'physics', time: 40, folder: '11_human_eye_colourful_world', hasExemplar: true },
    '12': { difficulty: 'hard', category: 'physics', time: 60, folder: '12_electricity', hasExemplar: true },
    '13': { difficulty: 'hard', category: 'physics', time: 50, folder: '13_magnetic_effects_electric_current', hasExemplar: true },
    '14': { difficulty: 'medium', category: 'environment', time: 35, folder: '14_sources_energy', hasExemplar: true },
    '15': { difficulty: 'easy', category: 'environment', time: 30, folder: '15_our_environment', hasExemplar: true },
    '16': { difficulty: 'medium', category: 'environment', time: 35, folder: '16_sustainable_management_natural_resources', hasExemplar: true }
};

// LocalStorage Keys
const STORAGE_KEYS = {
    THEME: 'cbse_science_theme',
    PROGRESS: 'cbse_science_progress',
    ACHIEVEMENTS: 'cbse_science_achievements',
    LAST_VISIT: 'cbse_science_last_visit',
    STREAK: 'cbse_science_streak'
};

// ===================================
// Progress Manager Class
// ===================================
class ProgressManager {
    constructor() {
        this.progress = this.loadProgress();
        this.achievements = this.loadAchievements();
        this.streak = this.loadStreak();
    }

    loadProgress() {
        const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS);
        return saved ? JSON.parse(saved) : {};
    }

    saveProgress() {
        localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(this.progress));
        this.updateStats();
        this.checkAchievements();
    }

    toggleChapter(chapterNum) {
        this.progress[chapterNum] = !this.progress[chapterNum];
        this.saveProgress();
        return this.progress[chapterNum];
    }

    isCompleted(chapterNum) {
        return !!this.progress[chapterNum];
    }

    getCompletedCount() {
        return Object.values(this.progress).filter(Boolean).length;
    }

    getProgressPercent() {
        return Math.round((this.getCompletedCount() / 16) * 100);
    }

    updateStats() {
        const completed = this.getCompletedCount();
        const percent = this.getProgressPercent();

        const completedElem = document.getElementById('completedCount');
        const percentElem = document.getElementById('progressPercent');
        const progressBar = document.getElementById('overallProgress');

        if (completedElem) completedElem.textContent = completed;
        if (percentElem) percentElem.textContent = percent + '%';
        if (progressBar) progressBar.style.width = percent + '%';
    }

    loadAchievements() {
        const saved = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
        return saved ? JSON.parse(saved) : {
            'first-chapter': false,
            'half-course': false,
            'full-course': false,
            'week-streak': false
        };
    }

    saveAchievements() {
        localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(this.achievements));
    }

    unlockAchievement(id) {
        if (!this.achievements[id]) {
            this.achievements[id] = true;
            this.saveAchievements();

            const elem = document.querySelector(`[data-achievement="${id}"]`);
            if (elem) {
                elem.classList.remove('locked');
                elem.classList.add('unlocked');
            }
        }
    }

    checkAchievements() {
        const completed = this.getCompletedCount();

        if (completed >= 1) this.unlockAchievement('first-chapter');
        if (completed >= 8) this.unlockAchievement('half-course');
        if (completed >= 16) this.unlockAchievement('full-course');
        if (this.streak >= 7) this.unlockAchievement('week-streak');
    }

    loadStreak() {
        const lastVisit = localStorage.getItem(STORAGE_KEYS.LAST_VISIT);
        const currentStreak = parseInt(localStorage.getItem(STORAGE_KEYS.STREAK) || '0');

        if (!lastVisit) {
            this.updateStreak(1);
            return 1;
        }

        const lastDate = new Date(lastVisit);
        const today = new Date();
        lastDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            // Same day visit
            return currentStreak;
        } else if (diffDays === 1) {
            // Consecutive day
            const newStreak = currentStreak + 1;
            this.updateStreak(newStreak);
            return newStreak;
        } else {
            // Streak broken
            this.updateStreak(1);
            return 1;
        }
    }

    updateStreak(value) {
        this.streak = value;
        localStorage.setItem(STORAGE_KEYS.STREAK, value.toString());
        localStorage.setItem(STORAGE_KEYS.LAST_VISIT, new Date().toISOString());

        const streakElem = document.getElementById('studyStreak');
        if (streakElem) streakElem.textContent = value;

        this.checkAchievements();
    }
}

// ===================================
// Theme Manager Class
// ===================================
class ThemeManager {
    constructor() {
        this.currentTheme = this.loadTheme();
        this.applyTheme(this.currentTheme);
        this.setupToggle();
    }

    loadTheme() {
        return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
    }

    saveTheme(theme) {
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = document.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    toggle() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.saveTheme(this.currentTheme);
    }

    setupToggle() {
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggle());
        }
    }
}

// ===================================
// Filter Manager Class
// ===================================
class FilterManager {
    constructor() {
        this.activeFilter = 'all';
        this.searchTerm = '';
        this.setupListeners();
    }

    setupListeners() {
        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.applyFilters();
            });
        }

        // Filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.activeFilter = e.target.dataset.filter;
                this.applyFilters();
            });
        });
    }

    applyFilters() {
        const cards = document.querySelectorAll('.chapter-card');

        cards.forEach(card => {
            const chapterNum = card.dataset.chapter;
            const difficulty = card.dataset.difficulty;
            const title = card.querySelector('.chapter-title').textContent.toLowerCase();

            const matchesSearch = !this.searchTerm ||
                                  title.includes(this.searchTerm) ||
                                  chapterNum.includes(this.searchTerm);

            const matchesFilter = this.activeFilter === 'all' ||
                                  difficulty === this.activeFilter;

            if (matchesSearch && matchesFilter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }
}

// ===================================
// Initialization
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize managers
    const progressManager = new ProgressManager();
    const themeManager = new ThemeManager();
    const filterManager = new FilterManager();

    // Set up completion checkboxes
    const checkboxes = document.querySelectorAll('.complete-checkbox');
    checkboxes.forEach(checkbox => {
        const card = checkbox.closest('.chapter-card');
        const chapterNum = card.dataset.chapter;

        // Set initial state
        if (progressManager.isCompleted(chapterNum)) {
            card.dataset.completed = 'true';
        }

        // Add click handler
        checkbox.addEventListener('click', (e) => {
            e.preventDefault();
            const isCompleted = progressManager.toggleChapter(chapterNum);
            card.dataset.completed = isCompleted.toString();
        });
    });

    // Initialize stats
    progressManager.updateStats();

    // Initialize achievements
    Object.keys(progressManager.achievements).forEach(id => {
        if (progressManager.achievements[id]) {
            const elem = document.querySelector(`[data-achievement="${id}"]`);
            if (elem) {
                elem.classList.remove('locked');
                elem.classList.add('unlocked');
            }
        }
    });

    // Track link clicks (optional - for future analytics)
    const studyLinks = document.querySelectorAll('a[href*="notebooklm"]');
    studyLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Study guide opened:', link.href);
        });
    });
});
