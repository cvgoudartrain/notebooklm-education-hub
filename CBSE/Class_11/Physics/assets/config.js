// CBSE Class 11 Physics - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 11 Physics',
    totalChapters: 14,
    storagePrefix: 'cbse_class11_physics',
    chapterData: {
        '01': { difficulty: 'easy', category: 'basics', time: 45 },
        '02': { difficulty: 'medium', category: 'mechanics', time: 50 },
        '03': { difficulty: 'medium', category: 'mechanics', time: 55 },
        '04': { difficulty: 'hard', category: 'mechanics', time: 65 },
        '05': { difficulty: 'medium', category: 'mechanics', time: 55 },
        '06': { difficulty: 'hard', category: 'mechanics', time: 70 },
        '07': { difficulty: 'medium', category: 'mechanics', time: 55 },
        '08': { difficulty: 'medium', category: 'properties-of-matter', time: 50 },
        '09': { difficulty: 'medium', category: 'properties-of-matter', time: 55 },
        '10': { difficulty: 'medium', category: 'thermodynamics', time: 50 },
        '11': { difficulty: 'hard', category: 'thermodynamics', time: 60 },
        '12': { difficulty: 'medium', category: 'thermodynamics', time: 50 },
        '13': { difficulty: 'hard', category: 'waves', time: 55 },
        '14': { difficulty: 'hard', category: 'waves', time: 60 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Step!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 7, title: 'Halfway There!', message: 'Completed 7 chapters' },
        fullCourse: { threshold: 14, title: 'Physics Master!', message: 'Completed all 14 chapters' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
