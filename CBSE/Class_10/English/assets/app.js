// ===================================
// CBSE Class 10 English - App.js
// Interactive Features & Progress Tracking
// ===================================

// Chapter Data Configuration
const chapterData = {
    // First Flight Chapters
    'ff01': { difficulty: 'easy', category: 'prose', time: 30 },
    'ff02': { difficulty: 'medium', category: 'prose', time: 35 },
    'ff03': { difficulty: 'medium', category: 'prose', time: 40 },
    'ff04': { difficulty: 'medium', category: 'prose', time: 35 },
    'ff05': { difficulty: 'easy', category: 'prose', time: 45 },
    'ff06': { difficulty: 'easy', category: 'prose', time: 30 },
    'ff07': { difficulty: 'easy', category: 'prose', time: 25 },
    'ff08': { difficulty: 'medium', category: 'prose', time: 30 },
    'ff09': { difficulty: 'medium', category: 'drama', time: 35 },

    // Footprints Without Feet Chapters
    'fp01': { difficulty: 'easy', category: 'story', time: 25 },
    'fp02': { difficulty: 'easy', category: 'story', time: 25 },
    'fp03': { difficulty: 'medium', category: 'story', time: 30 },
    'fp04': { difficulty: 'medium', category: 'story', time: 30 },
    'fp05': { difficulty: 'medium', category: 'story', time: 30 },
    'fp06': { difficulty: 'easy', category: 'story', time: 30 },
    'fp07': { difficulty: 'medium', category: 'story', time: 35 },
    'fp08': { difficulty: 'easy', category: 'story', time: 30 },
    'fp09': { difficulty: 'medium', category: 'story', time: 30 }
};

// LocalStorage Keys
const STORAGE_KEYS = {
    THEME: 'cbse_english_theme',
    PROGRESS: 'cbse_english_progress',
    ACHIEVEMENTS: 'cbse_english_achievements',
    LAST_VISIT: 'cbse_english_last_visit',
    STREAK: 'cbse_english_streak'
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
        return Math.round((this.getCompletedCount() / 18) * 100);
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
            this.showAchievementUnlock(id);
        }
    }

    showAchievementUnlock(id) {
        const achievementElem = document.querySelector(`[data-achievement="${id}"]`);
        if (achievementElem) {
            achievementElem.classList.remove('locked');
            achievementElem.classList.add('unlocked', 'achievement-pop');
            setTimeout(() => achievementElem.classList.remove('achievement-pop'), 500);
        }
    }

    checkAchievements() {
        const completed = this.getCompletedCount();

        if (completed >= 1) this.unlockAchievement('first-chapter');
        if (completed >= 9) this.unlockAchievement('half-course');
        if (completed >= 18) this.unlockAchievement('full-course');

        // Check streak
        this.updateStreak();
        if (this.streak.current >= 7) this.unlockAchievement('week-streak');
    }

    loadStreak() {
        const saved = localStorage.getItem(STORAGE_KEYS.STREAK);
        return saved ? JSON.parse(saved) : { current: 0, best: 0, lastVisit: null };
    }

    saveStreak() {
        localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(this.streak));
    }

    updateStreak() {
        const today = new Date().toDateString();
        const lastVisit = this.streak.lastVisit;

        if (lastVisit !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            if (lastVisit === yesterday) {
                this.streak.current++;
            } else if (lastVisit !== null) {
                this.streak.current = 1;
            } else {
                this.streak.current = 1;
            }

            this.streak.best = Math.max(this.streak.best, this.streak.current);
            this.streak.lastVisit = today;
            this.saveStreak();
        }
    }
}

// ===================================
// Theme Manager Class
// ===================================
class ThemeManager {
    constructor() {
        this.currentTheme = this.loadTheme();
        this.applyTheme(this.currentTheme);
    }

    loadTheme() {
        return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
    }

    saveTheme(theme) {
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.saveTheme(this.currentTheme);
    }

    applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    }
}

// ===================================
// Filter Manager Class
// ===================================
class FilterManager {
    constructor() {
        this.currentFilter = 'all';
        this.searchQuery = '';
    }

    setFilter(filter) {
        this.currentFilter = filter;
        this.applyFilters();
        this.updateFilterButtons(filter);
    }

    setSearch(query) {
        this.searchQuery = query.toLowerCase();
        this.applyFilters();
    }

    applyFilters() {
        const cards = document.querySelectorAll('.chapter-card:not(.full-course-card)');

        cards.forEach(card => {
            const difficulty = card.dataset.difficulty;
            const chapterTitle = card.querySelector('.chapter-title').textContent.toLowerCase();
            const chapterNum = card.querySelector('.chapter-number').textContent.toLowerCase();

            const matchesFilter = this.currentFilter === 'all' || difficulty === this.currentFilter;
            const matchesSearch = this.searchQuery === '' ||
                                  chapterTitle.includes(this.searchQuery) ||
                                  chapterNum.includes(this.searchQuery);

            card.style.display = (matchesFilter && matchesSearch) ? 'block' : 'none';
        });

        // Also filter section headers
        const sections = document.querySelectorAll('.section-header');
        sections.forEach(section => {
            const nextCards = [];
            let sibling = section.nextElementSibling;
            while (sibling && !sibling.classList.contains('section-header')) {
                if (sibling.classList.contains('chapter-card') && sibling.style.display !== 'none') {
                    nextCards.push(sibling);
                }
                sibling = sibling.nextElementSibling;
            }
            section.style.display = nextCards.length > 0 ? 'block' : 'none';
        });
    }

    updateFilterButtons(activeFilter) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === activeFilter);
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

    // Load achievement states
    Object.keys(progressManager.achievements).forEach(id => {
        if (progressManager.achievements[id]) {
            const elem = document.querySelector(`[data-achievement="${id}"]`);
            if (elem) elem.classList.remove('locked');
        }
    });

    // Apply completion states to chapter cards
    document.querySelectorAll('.chapter-card[data-chapter]').forEach(card => {
        const chapterNum = card.dataset.chapter;
        if (progressManager.isCompleted(chapterNum)) {
            card.dataset.completed = 'true';
        }
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => themeManager.toggleTheme());
    }

    // Checkbox completion toggles
    document.querySelectorAll('.complete-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', (e) => {
            e.preventDefault();
            const card = checkbox.closest('.chapter-card');
            const chapterNum = card.dataset.chapter;

            const isCompleted = progressManager.toggleChapter(chapterNum);
            card.dataset.completed = isCompleted;
        });
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterManager.setFilter(btn.dataset.filter);
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterManager.setSearch(e.target.value);
        });
    }

    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
