// CBSE Class 12 Mathematics - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 12 Mathematics',
    totalChapters: 13,
    storagePrefix: 'cbse_class12_maths',
    chapterData: {
        '01': { difficulty: 'medium', category: 'algebra', time: 50 },
        '02': { difficulty: 'hard', category: 'trigonometry', time: 45 },
        '03': { difficulty: 'medium', category: 'algebra', time: 55 },
        '04': { difficulty: 'hard', category: 'algebra', time: 60 },
        '05': { difficulty: 'hard', category: 'calculus', time: 70 },
        '06': { difficulty: 'medium', category: 'calculus', time: 55 },
        '07': { difficulty: 'hard', category: 'calculus', time: 65 },
        '08': { difficulty: 'medium', category: 'calculus', time: 45 },
        '09': { difficulty: 'hard', category: 'calculus', time: 60 },
        '10': { difficulty: 'medium', category: 'vectors', time: 50 },
        '11': { difficulty: 'hard', category: 'geometry', time: 55 },
        '12': { difficulty: 'medium', category: 'optimization', time: 45 },
        '13': { difficulty: 'medium', category: 'probability', time: 50 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Step!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 7, title: 'Halfway There!', message: 'Completed 7 chapters' },
        fullCourse: { threshold: 13, title: 'Math Master!', message: 'Completed all 13 chapters' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
