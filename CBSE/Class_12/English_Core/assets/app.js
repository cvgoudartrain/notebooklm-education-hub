// ===================================
// CBSE Class 12 English Core - App.js
// Interactive Features & Progress Tracking
// ===================================

// Chapter Data Configuration
const chapterData = {
    // Flamingo Prose Chapters (8)
    'f01': { difficulty: 'medium', category: 'prose', time: 35 },
    'f02': { difficulty: 'medium', category: 'prose', time: 40 },
    'f03': { difficulty: 'easy', category: 'prose', time: 30 },
    'f04': { difficulty: 'medium', category: 'prose', time: 35 },
    'f05': { difficulty: 'medium', category: 'prose', time: 40 },
    'f06': { difficulty: 'easy', category: 'prose', time: 30 },
    'f07': { difficulty: 'easy', category: 'prose', time: 25 },
    'f08': { difficulty: 'easy', category: 'prose', time: 30 },

    // Vistas Chapters (6)
    'v01': { difficulty: 'medium', category: 'story', time: 30 },
    'v02': { difficulty: 'medium', category: 'story', time: 35 },
    'v03': { difficulty: 'medium', category: 'story', time: 35 },
    'v04': { difficulty: 'hard', category: 'story', time: 40 },
    'v05': { difficulty: 'medium', category: 'story', time: 30 },
    'v06': { difficulty: 'medium', category: 'story', time: 35 }
};

// LocalStorage Keys
const STORAGE_KEYS = {
    THEME: 'cbse_english_core_12_theme',
    PROGRESS: 'cbse_english_core_12_progress',
    ACHIEVEMENTS: 'cbse_english_core_12_achievements',
    LAST_VISIT: 'cbse_english_core_12_last_visit',
    STREAK: 'cbse_english_core_12_streak'
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
        return Math.round((this.getCompletedCount() / 18) * 100); // 14 chapters (8 Flamingo + 6 Vistas)
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

    checkAchievements() {
        const completed = this.getCompletedCount();
        const newAchievements = {};

        if (completed >= 1 && !this.achievements['first-chapter']) {
            newAchievements['first-chapter'] = true;
        }
        if (completed >= 9 && !this.achievements['half-course']) { // Half of 18
            newAchievements['half-course'] = true;
        }
        if (completed >= 18 && !this.achievements['full-course']) {
            newAchievements['full-course'] = true;
        }

        if (Object.keys(newAchievements).length > 0) {
            this.achievements = { ...this.achievements, ...newAchievements };
            localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(this.achievements));
        }
    }

    loadStreak() {
        const lastVisit = localStorage.getItem(STORAGE_KEYS.LAST_VISIT);
        const streak = localStorage.getItem(STORAGE_KEYS.STREAK);

        const today = new Date().toDateString();

        if (lastVisit !== today) {
            localStorage.setItem(STORAGE_KEYS.LAST_VISIT, today);
        }

        return streak ? parseInt(streak) : 0;
    }
}

// ===================================
// Theme Manager Class
// ===================================
class ThemeManager {
    constructor() {
        this.theme = this.loadTheme();
        this.applyTheme();
    }

    loadTheme() {
        return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
    }

    applyTheme() {
        document.body.setAttribute('data-theme', this.theme);
        this.updateToggleButton();
    }

    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem(STORAGE_KEYS.THEME, this.theme);
        this.applyTheme();
    }

    updateToggleButton() {
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            const icon = toggle.querySelector('.theme-icon');
            icon.textContent = this.theme === 'light' ? '🌙' : '☀️';
        }
    }
}

// ===================================
// Filter Manager Class
// ===================================
class FilterManager {
    constructor() {
        this.activeFilter = 'all';
        this.searchQuery = '';
    }

    setFilter(filter) {
        this.activeFilter = filter;
        this.updateFilterButtons();
        this.applyFilters();
    }

    setSearchQuery(query) {
        this.searchQuery = query.toLowerCase();
        this.applyFilters();
    }

    updateFilterButtons() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === this.activeFilter);
        });
    }

    applyFilters() {
        const cards = document.querySelectorAll('.chapter-card:not(.full-course-card)');

        cards.forEach(card => {
            const difficulty = card.dataset.difficulty;
            const title = card.querySelector('.chapter-title')?.textContent.toLowerCase() || '';
            const chapterNum = card.querySelector('.chapter-number')?.textContent.toLowerCase() || '';

            const matchesFilter = this.activeFilter === 'all' || difficulty === this.activeFilter;
            const matchesSearch = !this.searchQuery ||
                                title.includes(this.searchQuery) ||
                                chapterNum.includes(this.searchQuery);

            card.style.display = (matchesFilter && matchesSearch) ? 'flex' : 'none';
        });
    }
}

// ===================================
// Initialize Application
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const progressManager = new ProgressManager();
    const themeManager = new ThemeManager();
    const filterManager = new FilterManager();

    // Initialize progress display
    progressManager.updateStats();

    // Initialize checkboxes
    document.querySelectorAll('.chapter-card[data-chapter]').forEach(card => {
        const chapterNum = card.dataset.chapter;
        const checkbox = card.querySelector('.complete-checkbox');

        if (checkbox) {
            if (progressManager.isCompleted(chapterNum)) {
                card.classList.add('completed');
                checkbox.classList.add('active');
            }

            checkbox.addEventListener('click', (e) => {
                e.preventDefault();
                const isCompleted = progressManager.toggleChapter(chapterNum);
                card.classList.toggle('completed', isCompleted);
                checkbox.classList.toggle('active', isCompleted);
            });
        }
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            themeManager.toggle();
        });
    }

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterManager.setFilter(btn.dataset.filter);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterManager.setSearchQuery(e.target.value);
        });
    }
});
