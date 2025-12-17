// CBSE Class 10 Science - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 10 Science',
    totalChapters: 13,
    storagePrefix: 'cbse_class10_science',
    chapterData: {
        '01': { difficulty: 'medium', category: 'chemistry', time: 45 },
        '02': { difficulty: 'medium', category: 'chemistry', time: 40 },
        '03': { difficulty: 'medium', category: 'chemistry', time: 50 },
        '04': { difficulty: 'hard', category: 'chemistry', time: 60 },
        '05': { difficulty: 'hard', category: 'biology', time: 55 },
        '06': { difficulty: 'medium', category: 'biology', time: 50 },
        '07': { difficulty: 'medium', category: 'biology', time: 45 },
        '08': { difficulty: 'medium', category: 'biology', time: 50 },
        '09': { difficulty: 'hard', category: 'physics', time: 55 },
        '10': { difficulty: 'easy', category: 'physics', time: 35 },
        '11': { difficulty: 'hard', category: 'physics', time: 60 },
        '12': { difficulty: 'medium', category: 'physics', time: 50 },
        '13': { difficulty: 'easy', category: 'biology', time: 30 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Steps!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 7, title: 'Halfway Hero!', message: 'Completed 7 chapters' },
        fullCourse: { threshold: 13, title: 'Science Master!', message: 'Completed all 13 chapters' },
        weekStreak: { threshold: 7, title: 'On Fire!', message: 'Studied 7 days in a row' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
