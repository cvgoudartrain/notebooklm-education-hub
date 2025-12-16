// CBSE Class 10 Science - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 10 Science',
    totalChapters: 16,
    storagePrefix: 'cbse_class10_science',
    chapterData: {
        '01': { difficulty: 'medium', category: 'chemistry', time: 45 },
        '02': { difficulty: 'easy', category: 'chemistry', time: 40 },
        '03': { difficulty: 'medium', category: 'chemistry', time: 40 },
        '04': { difficulty: 'hard', category: 'chemistry', time: 50 },
        '05': { difficulty: 'medium', category: 'chemistry', time: 35 },
        '06': { difficulty: 'hard', category: 'biology', time: 50 },
        '07': { difficulty: 'medium', category: 'biology', time: 45 },
        '08': { difficulty: 'medium', category: 'biology', time: 45 },
        '09': { difficulty: 'medium', category: 'biology', time: 40 },
        '10': { difficulty: 'hard', category: 'physics', time: 55 },
        '11': { difficulty: 'medium', category: 'physics', time: 40 },
        '12': { difficulty: 'hard', category: 'physics', time: 60 },
        '13': { difficulty: 'hard', category: 'physics', time: 50 },
        '14': { difficulty: 'medium', category: 'environment', time: 35 },
        '15': { difficulty: 'easy', category: 'environment', time: 30 },
        '16': { difficulty: 'medium', category: 'environment', time: 35 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Steps!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 8, title: 'Halfway Hero!', message: 'Completed 8 chapters' },
        fullCourse: { threshold: 16, title: 'Science Master!', message: 'Completed all 16 chapters' },
        weekStreak: { threshold: 7, title: 'On Fire!', message: 'Studied 7 days in a row' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
