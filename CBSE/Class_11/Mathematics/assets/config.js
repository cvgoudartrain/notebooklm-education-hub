// CBSE Class 11 Mathematics - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 11 Mathematics',
    totalChapters: 14,
    storagePrefix: 'cbse_class11_maths',
    chapterData: {
        '01': { difficulty: 'easy', category: 'algebra', time: 40 },
        '02': { difficulty: 'medium', category: 'algebra', time: 50 },
        '03': { difficulty: 'hard', category: 'trigonometry', time: 60 },
        '04': { difficulty: 'hard', category: 'algebra', time: 55 },
        '05': { difficulty: 'easy', category: 'algebra', time: 35 },
        '06': { difficulty: 'medium', category: 'algebra', time: 50 },
        '07': { difficulty: 'medium', category: 'algebra', time: 45 },
        '08': { difficulty: 'medium', category: 'algebra', time: 50 },
        '09': { difficulty: 'medium', category: 'geometry', time: 45 },
        '10': { difficulty: 'hard', category: 'geometry', time: 60 },
        '11': { difficulty: 'easy', category: 'geometry', time: 30 },
        '12': { difficulty: 'hard', category: 'calculus', time: 60 },
        '13': { difficulty: 'medium', category: 'statistics', time: 45 },
        '14': { difficulty: 'medium', category: 'statistics', time: 50 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Step!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 7, title: 'Halfway There!', message: 'Completed 7 chapters' },
        fullCourse: { threshold: 14, title: 'Math Master!', message: 'Completed all 14 chapters' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
