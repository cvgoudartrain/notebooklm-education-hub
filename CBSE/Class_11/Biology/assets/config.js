// CBSE Class 11 Biology - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 11 Biology',
    totalChapters: 19,
    storagePrefix: 'cbse_class11_biology',
    chapterData: {
        '01': { difficulty: 'easy', category: 'diversity', time: 40 },
        '02': { difficulty: 'medium', category: 'diversity', time: 50 },
        '03': { difficulty: 'easy', category: 'diversity', time: 50 },
        '04': { difficulty: 'medium', category: 'diversity', time: 55 },
        '05': { difficulty: 'medium', category: 'structural', time: 55 },
        '06': { difficulty: 'medium', category: 'structural', time: 50 },
        '07': { difficulty: 'medium', category: 'structural', time: 50 },
        '08': { difficulty: 'hard', category: 'cell', time: 60 },
        '09': { difficulty: 'medium', category: 'cell', time: 55 },
        '10': { difficulty: 'hard', category: 'cell', time: 55 },
        '11': { difficulty: 'medium', category: 'plant-physiology', time: 55 },
        '12': { difficulty: 'medium', category: 'plant-physiology', time: 50 },
        '13': { difficulty: 'medium', category: 'plant-physiology', time: 45 },
        '14': { difficulty: 'hard', category: 'human-physiology', time: 55 },
        '15': { difficulty: 'hard', category: 'human-physiology', time: 60 },
        '16': { difficulty: 'hard', category: 'human-physiology', time: 55 },
        '17': { difficulty: 'hard', category: 'human-physiology', time: 55 },
        '18': { difficulty: 'hard', category: 'human-physiology', time: 65 },
        '19': { difficulty: 'hard', category: 'human-physiology', time: 55 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Step!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 10, title: 'Halfway There!', message: 'Completed 10 chapters' },
        fullCourse: { threshold: 19, title: 'Biology Master!', message: 'Completed all 19 chapters' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
