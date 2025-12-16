// ===================================
// CBSE Class 11 Biology - App.js
// Interactive Features & Progress Tracking
// ===================================

// Chapter Data Configuration
const chapterData = {
    '01': { difficulty: 'easy', category: 'diversity', time: 40 },
    '02': { difficulty: 'medium', category: 'diversity', time: 50 },
    '03': { difficulty: 'easy', category: 'diversity', time: 50 },
    '04': { difficulty: 'medium', category: 'diversity', time: 55 },
    '05': { difficulty: 'medium', category: 'structural', time: 55 },
    '06': { difficulty: 'medium', category: 'structural', time: 50 },
    '07': { difficulty: 'medium', category: 'structural', time: 50 },
    '08': { difficulty: 'hard', category: 'cell', time: 60 },
    '09': { difficulty: 'medium', category: 'cell', time: 55 },
    '10': { difficulty: 'hard', category: 'cell', time: 55 },
    '11': { difficulty: 'medium', category: 'plant-physiology', time: 55 },
    '12': { difficulty: 'medium', category: 'plant-physiology', time: 50 },
    '13': { difficulty: 'medium', category: 'plant-physiology', time: 45 },
    '14': { difficulty: 'hard', category: 'human-physiology', time: 55 },
    '15': { difficulty: 'hard', category: 'human-physiology', time: 60 },
    '16': { difficulty: 'hard', category: 'human-physiology', time: 55 },
    '17': { difficulty: 'hard', category: 'human-physiology', time: 55 },
    '18': { difficulty: 'hard', category: 'human-physiology', time: 65 },
    '19': { difficulty: 'hard', category: 'human-physiology', time: 55 }
};

// LocalStorage Keys
const STORAGE_KEYS = {
    THEME: 'cbse_class11_biology_theme',
    PROGRESS: 'cbse_class11_biology_progress',
    ACHIEVEMENTS: 'cbse_class11_biology_achievements',
    LAST_VISIT: 'cbse_class11_biology_last_visit',
    STREAK: 'cbse_class11_biology_streak'
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
        return Math.round((this.getCompletedCount() / 19) * 100);
    }

    updateStats() {
        const completed = this.getCompletedCount();
        const percent = this.getProgressPercent();

        const completedElem = document.getElementById('completedCount');
        const percentElem = document.getElementById('progressPercent');
        const progressBar = document.getElementById('overallProgress');

        if (completedElem) completedElem.textContent = completed;
        if (percentElem) percentElem.textContent = `${percent}%`;
        if (progressBar) progressBar.style.width = `${percent}%`;
    }

    // Achievements System
    loadAchievements() {
        const saved = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
        return saved ? JSON.parse(saved) : {
            firstChapter: false,
            halfwayThere: false,
            allComplete: false
        };
    }

    checkAchievements() {
        const completed = this.getCompletedCount();
        let newAchievement = false;

        if (completed >= 1 && !this.achievements.firstChapter) {
            this.achievements.firstChapter = true;
            newAchievement = true;
            this.showAchievement('First Step!', 'Completed your first chapter');
        }

        if (completed >= 10 && !this.achievements.halfwayThere) {
            this.achievements.halfwayThere = true;
            newAchievement = true;
            this.showAchievement('Halfway There!', 'Completed 10 chapters');
        }

        if (completed === 19 && !this.achievements.allComplete) {
            this.achievements.allComplete = true;
            newAchievement = true;
            this.showAchievement('Course Complete!', 'Mastered all 19 chapters');
        }

        if (newAchievement) {
            localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(this.achievements));
        }
    }

    showAchievement(title, message) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-content">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
        `;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Streak System
    loadStreak() {
        const lastVisit = localStorage.getItem(STORAGE_KEYS.LAST_VISIT);
        const streak = parseInt(localStorage.getItem(STORAGE_KEYS.STREAK)) || 0;

        if (lastVisit) {
            const lastDate = new Date(lastVisit);
            const today = new Date();
            const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                return streak + 1;
            } else if (diffDays > 1) {
                return 0;
            }
            return streak;
        }
        return 0;
    }

    updateStreak() {
        localStorage.setItem(STORAGE_KEYS.LAST_VISIT, new Date().toISOString());
        localStorage.setItem(STORAGE_KEYS.STREAK, this.streak.toString());
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

    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        localStorage.setItem(STORAGE_KEYS.THEME, this.theme);
    }

    applyTheme() {
        document.body.setAttribute('data-theme', this.theme);
        const icon = document.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = this.theme === 'light' ? 'Moon' : 'Sun';
        }
    }
}

// ===================================
// Filter Manager Class
// ===================================
class FilterManager {
    constructor() {
        this.currentFilter = 'all';
        this.searchTerm = '';
    }

    setFilter(filter) {
        this.currentFilter = filter;
        this.applyFilters();
        this.updateFilterButtons(filter);
    }

    setSearch(term) {
        this.searchTerm = term.toLowerCase();
        this.applyFilters();
    }

    applyFilters() {
        const cards = document.querySelectorAll('.chapter-card:not(.full-course-card)');

        cards.forEach(card => {
            const difficulty = card.dataset.difficulty;
            const title = card.querySelector('.chapter-title').textContent.toLowerCase();
            const chapterNum = card.querySelector('.chapter-number').textContent.toLowerCase();

            const matchesFilter = this.currentFilter === 'all' || difficulty === this.currentFilter;
            const matchesSearch = !this.searchTerm ||
                                  title.includes(this.searchTerm) ||
                                  chapterNum.includes(this.searchTerm);

            card.style.display = matchesFilter && matchesSearch ? 'block' : 'none';
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

    // Mark completed chapters
    document.querySelectorAll('.chapter-card[data-chapter]').forEach(card => {
        const chapterNum = card.dataset.chapter;
        if (progressManager.isCompleted(chapterNum)) {
            card.dataset.completed = 'true';
        }
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => themeManager.toggle());
    }

    // Chapter Completion Checkboxes
    document.querySelectorAll('.complete-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', (e) => {
            e.preventDefault();
            const card = checkbox.closest('.chapter-card');
            const chapterNum = card.dataset.chapter;

            if (chapterNum) {
                const isCompleted = progressManager.toggleChapter(chapterNum);
                card.dataset.completed = isCompleted.toString();
            }
        });
    });

    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterManager.setFilter(btn.dataset.filter);
        });
    });

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterManager.setSearch(e.target.value);
        });
    }

    // Update streak
    progressManager.updateStreak();
});

// ===================================
// Utility Functions
// ===================================
function formatTime(minutes) {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}
