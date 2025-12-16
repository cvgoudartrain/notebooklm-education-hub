// CBSE Class 12 Biology - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 12 Biology',
    totalChapters: 13,
    storagePrefix: 'cbse_class12_biology',
    chapterData: {
        '01': { difficulty: 'medium', category: 'reproduction', time: 50 },
        '02': { difficulty: 'medium', category: 'reproduction', time: 55 },
        '03': { difficulty: 'easy', category: 'reproduction', time: 35 },
        '04': { difficulty: 'hard', category: 'genetics', time: 60 },
        '05': { difficulty: 'hard', category: 'genetics', time: 65 },
        '06': { difficulty: 'medium', category: 'evolution', time: 50 },
        '07': { difficulty: 'medium', category: 'health', time: 45 },
        '08': { difficulty: 'easy', category: 'health', time: 40 },
        '09': { difficulty: 'hard', category: 'biotechnology', time: 55 },
        '10': { difficulty: 'medium', category: 'biotechnology', time: 45 },
        '11': { difficulty: 'medium', category: 'ecology', time: 50 },
        '12': { difficulty: 'medium', category: 'ecology', time: 45 },
        '13': { difficulty: 'easy', category: 'ecology', time: 40 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Step!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 7, title: 'Halfway There!', message: 'Completed 7 chapters' },
        fullCourse: { threshold: 13, title: 'Biology Master!', message: 'Completed all 13 chapters' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
