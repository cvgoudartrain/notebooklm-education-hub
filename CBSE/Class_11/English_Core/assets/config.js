// CBSE Class 11 English Core - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 11 English Core',
    totalChapters: 16,
    storagePrefix: 'cbse_class11_english',
    chapterData: {
        // Hornbill - Reading (5 chapters)
        'hr01': { difficulty: 'easy', category: 'prose', time: 35 },
        'hr02': { difficulty: 'medium', category: 'prose', time: 40 },
        'hr03': { difficulty: 'medium', category: 'prose', time: 45 },
        'hr05': { difficulty: 'hard', category: 'prose', time: 50 },
        'hr06': { difficulty: 'medium', category: 'prose', time: 40 },

        // Hornbill - Writing (6 chapters)
        'hw01': { difficulty: 'easy', category: 'writing', time: 30 },
        'hw02': { difficulty: 'easy', category: 'writing', time: 25 },
        'hw03': { difficulty: 'easy', category: 'writing', time: 25 },
        'hw04': { difficulty: 'medium', category: 'writing', time: 35 },
        'hw05': { difficulty: 'medium', category: 'writing', time: 30 },
        'hw06': { difficulty: 'medium', category: 'writing', time: 30 },

        // Snapshots - Stories (5 chapters)
        's01': { difficulty: 'easy', category: 'story', time: 30 },
        's02': { difficulty: 'medium', category: 'story', time: 25 },
        's03': { difficulty: 'easy', category: 'story', time: 30 },
        's04': { difficulty: 'medium', category: 'story', time: 35 },
        's05': { difficulty: 'easy', category: 'story', time: 25 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Step!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 8, title: 'Halfway There!', message: 'Completed 8 chapters' },
        fullCourse: { threshold: 16, title: 'English Master!', message: 'Completed all 16 chapters' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
