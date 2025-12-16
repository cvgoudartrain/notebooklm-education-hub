// CBSE Class 10 Mathematics - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 10 Mathematics',
    totalChapters: 14,
    storagePrefix: 'cbse_class10_maths',
    chapterData: {
        '01': { difficulty: 'medium', category: 'algebra', time: 45 },
        '02': { difficulty: 'medium', category: 'algebra', time: 40 },
        '03': { difficulty: 'easy', category: 'algebra', time: 35 },
        '04': { difficulty: 'hard', category: 'algebra', time: 50 },
        '05': { difficulty: 'medium', category: 'algebra', time: 45 },
        '06': { difficulty: 'hard', category: 'geometry', time: 60 },
        '07': { difficulty: 'medium', category: 'geometry', time: 40 },
        '08': { difficulty: 'hard', category: 'trigonometry', time: 55 },
        '09': { difficulty: 'medium', category: 'trigonometry', time: 30 },
        '10': { difficulty: 'medium', category: 'geometry', time: 40 },
        '11': { difficulty: 'easy', category: 'geometry', time: 25 },
        '12': { difficulty: 'medium', category: 'mensuration', time: 45 },
        '13': { difficulty: 'hard', category: 'mensuration', time: 55 },
        '14': { difficulty: 'medium', category: 'mensuration', time: 50 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Steps!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 7, title: 'Halfway Hero!', message: 'Completed 7 chapters' },
        fullCourse: { threshold: 14, title: 'Master Mathematician!', message: 'Completed all 14 chapters' },
        weekStreak: { threshold: 7, title: 'On Fire!', message: 'Studied 7 days in a row' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
