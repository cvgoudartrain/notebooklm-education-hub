// CBSE Class 12 Chemistry - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 12 Chemistry',
    totalChapters: 10,
    storagePrefix: 'cbse_class12_chemistry',
    chapterData: {
        '01': { difficulty: 'medium', category: 'physical-chemistry', time: 50 },
        '02': { difficulty: 'hard', category: 'physical-chemistry', time: 60 },
        '03': { difficulty: 'medium', category: 'physical-chemistry', time: 55 },
        '04': { difficulty: 'hard', category: 'inorganic-chemistry', time: 65 },
        '05': { difficulty: 'medium', category: 'inorganic-chemistry', time: 55 },
        '06': { difficulty: 'medium', category: 'organic-chemistry', time: 60 },
        '07': { difficulty: 'medium', category: 'organic-chemistry', time: 60 },
        '08': { difficulty: 'hard', category: 'organic-chemistry', time: 65 },
        '09': { difficulty: 'medium', category: 'organic-chemistry', time: 50 },
        '10': { difficulty: 'easy', category: 'organic-chemistry', time: 45 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Step!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 5, title: 'Halfway There!', message: 'Completed 5 chapters' },
        fullCourse: { threshold: 10, title: 'Chemistry Master!', message: 'Completed all 10 chapters' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
