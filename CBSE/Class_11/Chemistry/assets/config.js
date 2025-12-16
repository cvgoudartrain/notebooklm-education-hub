// CBSE Class 11 Chemistry - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 11 Chemistry',
    totalChapters: 9,
    storagePrefix: 'cbse_class11_chemistry',
    chapterData: {
        '01': { difficulty: 'medium', category: 'physical-chemistry', time: 45 },
        '02': { difficulty: 'medium', category: 'physical-chemistry', time: 55 },
        '03': { difficulty: 'medium', category: 'physical-chemistry', time: 50 },
        '04': { difficulty: 'hard', category: 'physical-chemistry', time: 65 },
        '05': { difficulty: 'hard', category: 'physical-chemistry', time: 60 },
        '06': { difficulty: 'hard', category: 'physical-chemistry', time: 60 },
        '07': { difficulty: 'medium', category: 'physical-chemistry', time: 45 },
        '08': { difficulty: 'medium', category: 'organic-chemistry', time: 55 },
        '09': { difficulty: 'medium', category: 'organic-chemistry', time: 50 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Step!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 5, title: 'Halfway There!', message: 'Completed 5 chapters' },
        fullCourse: { threshold: 9, title: 'Chemistry Master!', message: 'Completed all 9 chapters' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
