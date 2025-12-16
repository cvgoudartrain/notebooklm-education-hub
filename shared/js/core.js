// ===================================
// NotebookLM Education Hub - Shared Core JavaScript
// Used by all CBSE subject pages
// ===================================

/**
 * Progress Manager Class
 * Handles chapter completion tracking, achievements, and streaks
 */
class ProgressManager {
    constructor(config) {
        this.config = config;
        this.storageKeys = {
            THEME: `${config.storagePrefix}_theme`,
            PROGRESS: `${config.storagePrefix}_progress`,
            ACHIEVEMENTS: `${config.storagePrefix}_achievements`,
            LAST_VISIT: `${config.storagePrefix}_last_visit`,
            STREAK: `${config.storagePrefix}_streak`
        };
        this.progress = this.loadProgress();
        this.achievements = this.loadAchievements();
        this.streak = this.loadStreak();
    }

    // Progress tracking
    loadProgress() {
        try {
            const saved = localStorage.getItem(this.storageKeys.PROGRESS);
            return saved ? JSON.parse(saved) : {};
        } catch (e) {
            console.warn('Failed to parse progress, resetting:', e);
            return {};
        }
    }

    saveProgress() {
        localStorage.setItem(this.storageKeys.PROGRESS, JSON.stringify(this.progress));
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
        return Math.round((this.getCompletedCount() / this.config.totalChapters) * 100);
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

    // Achievement system
    loadAchievements() {
        try {
            const saved = localStorage.getItem(this.storageKeys.ACHIEVEMENTS);
            if (saved) return JSON.parse(saved);
        } catch (e) {
            console.warn('Failed to parse achievements, resetting:', e);
        }

        // Initialize from config
        const initial = {};
        Object.keys(this.config.achievements).forEach(key => {
            initial[key] = false;
        });
        return initial;
    }

    saveAchievements() {
        localStorage.setItem(this.storageKeys.ACHIEVEMENTS, JSON.stringify(this.achievements));
    }

    checkAchievements() {
        const completed = this.getCompletedCount();
        let changed = false;

        Object.entries(this.config.achievements).forEach(([key, def]) => {
            // Use streak count for streak-based achievements, chapter count for others
            const count = (key === 'weekStreak') ? this.streak : completed;

            if (count >= def.threshold && !this.achievements[key]) {
                // Unlock achievement
                this.achievements[key] = true;
                changed = true;
                this.showAchievement(def.title, def.message);
                this.updateAchievementUI(key, true);
            } else if (count < def.threshold && this.achievements[key]) {
                // Revoke achievement if dropped below threshold
                this.achievements[key] = false;
                changed = true;
                this.updateAchievementUI(key, false);
            }
        });

        if (changed) {
            this.saveAchievements();
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

    updateAchievementUI(id, unlocked = true) {
        const elem = document.querySelector(`[data-achievement="${id}"]`);
        if (elem) {
            if (unlocked) {
                elem.classList.remove('locked');
                elem.classList.add('unlocked');
            } else {
                elem.classList.remove('unlocked');
                elem.classList.add('locked');
            }
        }
    }

    // Streak system
    loadStreak() {
        const lastVisit = localStorage.getItem(this.storageKeys.LAST_VISIT);
        const currentStreak = parseInt(localStorage.getItem(this.storageKeys.STREAK) || '0', 10);

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
            return currentStreak;
        } else if (diffDays === 1) {
            const newStreak = currentStreak + 1;
            this.updateStreak(newStreak);
            return newStreak;
        } else {
            this.updateStreak(1);
            return 1;
        }
    }

    updateStreak(value) {
        this.streak = value;
        localStorage.setItem(this.storageKeys.STREAK, value.toString());
        localStorage.setItem(this.storageKeys.LAST_VISIT, new Date().toISOString());

        const streakElem = document.getElementById('studyStreak');
        if (streakElem) streakElem.textContent = value;

        // Check streak achievement if configured (always check to handle revocation)
        if (this.config.achievements.weekStreak) {
            this.checkAchievements();
        }
    }
}

/**
 * Theme Manager Class
 * Handles light/dark mode toggle
 */
class ThemeManager {
    constructor(storageKey) {
        this.storageKey = storageKey;
        this.currentTheme = this.loadTheme();
        this.applyTheme(this.currentTheme);
    }

    loadTheme() {
        return localStorage.getItem(this.storageKey) || 'light';
    }

    saveTheme(theme) {
        localStorage.setItem(this.storageKey, theme);
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
}

/**
 * Filter Manager Class
 * Handles search and difficulty filtering
 */
class FilterManager {
    constructor() {
        this.activeFilter = 'all';
        this.searchTerm = '';
    }

    setFilter(filter) {
        this.activeFilter = filter;
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
            const chapterNum = (card.dataset.chapter || '').toLowerCase();
            const difficulty = card.dataset.difficulty || '';
            const category = card.dataset.category || '';
            const title = card.querySelector('.chapter-title')?.textContent.toLowerCase() || '';

            const matchesSearch = !this.searchTerm ||
                                  title.includes(this.searchTerm) ||
                                  chapterNum.includes(this.searchTerm) ||
                                  category.includes(this.searchTerm);

            const matchesFilter = this.activeFilter === 'all' ||
                                  difficulty === this.activeFilter;

            card.classList.toggle('hidden', !(matchesSearch && matchesFilter));
        });
    }

    updateFilterButtons(activeFilter) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === activeFilter);
        });
    }
}

/**
 * Initialize the application with subject configuration
 * @param {Object} config - Subject configuration object
 */
function initializeApp(config) {
    const progressManager = new ProgressManager(config);
    const themeManager = new ThemeManager(`${config.storagePrefix}_theme`);
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

    // Initialize achievements UI
    Object.keys(progressManager.achievements).forEach(id => {
        if (progressManager.achievements[id]) {
            progressManager.updateAchievementUI(id, true);
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

    return { progressManager, themeManager, filterManager };
}
