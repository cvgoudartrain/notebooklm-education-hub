// CBSE Class 12 English Core - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 12 English Core',
    totalChapters: 14,
    storagePrefix: 'cbse_class12_english',
    chapterData: {
        'f01': { difficulty: 'medium', category: 'prose', time: 35 },
        'f02': { difficulty: 'medium', category: 'prose', time: 40 },
        'f03': { difficulty: 'easy', category: 'prose', time: 30 },
        'f04': { difficulty: 'medium', category: 'prose', time: 35 },
        'f05': { difficulty: 'medium', category: 'prose', time: 40 },
        'f06': { difficulty: 'easy', category: 'prose', time: 30 },
        'f07': { difficulty: 'easy', category: 'prose', time: 25 },
        'f08': { difficulty: 'easy', category: 'prose', time: 30 },
        'v01': { difficulty: 'medium', category: 'story', time: 30 },
        'v02': { difficulty: 'medium', category: 'story', time: 35 },
        'v03': { difficulty: 'medium', category: 'story', time: 35 },
        'v04': { difficulty: 'hard', category: 'story', time: 40 },
        'v05': { difficulty: 'medium', category: 'story', time: 30 },
        'v06': { difficulty: 'medium', category: 'story', time: 35 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Step!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 7, title: 'Halfway There!', message: 'Completed 7 chapters' },
        fullCourse: { threshold: 14, title: 'English Master!', message: 'Completed all 14 chapters' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
