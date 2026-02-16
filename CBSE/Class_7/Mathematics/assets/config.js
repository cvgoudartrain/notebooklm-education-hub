// CBSE Class 7 Mathematics - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 7 Mathematics',
    totalChapters: 15,
    storagePrefix: 'cbse_class7_maths',
    chapterData: {
        'p1_01': { difficulty: 'easy', category: 'numbers', time: 35 },
        'p1_02': { difficulty: 'easy', category: 'arithmetic', time: 30 },
        'p1_03': { difficulty: 'medium', category: 'numbers', time: 35 },
        'p1_04': { difficulty: 'medium', category: 'algebra', time: 40 },
        'p1_05': { difficulty: 'medium', category: 'geometry', time: 35 },
        'p1_06': { difficulty: 'easy', category: 'numbers', time: 30 },
        'p1_07': { difficulty: 'medium', category: 'geometry', time: 40 },
        'p1_08': { difficulty: 'medium', category: 'numbers', time: 35 },
        'p2_01': { difficulty: 'medium', category: 'geometry', time: 40 },
        'p2_02': { difficulty: 'medium', category: 'numbers', time: 35 },
        'p2_03': { difficulty: 'medium', category: 'numbers', time: 40 },
        'p2_04': { difficulty: 'medium', category: 'numbers', time: 35 },
        'p2_05': { difficulty: 'easy', category: 'data', time: 30 },
        'p2_06': { difficulty: 'medium', category: 'geometry', time: 40 },
        'p2_07': { difficulty: 'medium', category: 'algebra', time: 40 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Steps!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 8, title: 'Halfway Hero!', message: 'Completed 8 chapters' },
        fullCourse: { threshold: 15, title: 'Math Explorer!', message: 'Completed all 15 chapters' },
        weekStreak: { threshold: 7, title: 'On Fire!', message: 'Studied 7 days in a row' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
