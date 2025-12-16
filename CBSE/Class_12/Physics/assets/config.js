// CBSE Class 12 Physics - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 12 Physics',
    totalChapters: 14,
    storagePrefix: 'cbse_class12_physics',
    chapterData: {
        '01': { difficulty: 'medium', category: 'electromagnetism', time: 60 },
        '02': { difficulty: 'hard', category: 'electromagnetism', time: 60 },
        '03': { difficulty: 'medium', category: 'electromagnetism', time: 55 },
        '04': { difficulty: 'hard', category: 'electromagnetism', time: 65 },
        '05': { difficulty: 'medium', category: 'electromagnetism', time: 50 },
        '06': { difficulty: 'hard', category: 'electromagnetism', time: 55 },
        '07': { difficulty: 'hard', category: 'electromagnetism', time: 55 },
        '08': { difficulty: 'medium', category: 'electromagnetism', time: 45 },
        '09': { difficulty: 'medium', category: 'optics', time: 60 },
        '10': { difficulty: 'hard', category: 'optics', time: 50 },
        '11': { difficulty: 'hard', category: 'modern-physics', time: 50 },
        '12': { difficulty: 'medium', category: 'modern-physics', time: 45 },
        '13': { difficulty: 'medium', category: 'modern-physics', time: 45 },
        '14': { difficulty: 'medium', category: 'electronics', time: 55 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Step!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 7, title: 'Halfway There!', message: 'Completed 7 chapters' },
        fullCourse: { threshold: 14, title: 'Physics Master!', message: 'Completed all 14 chapters' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
