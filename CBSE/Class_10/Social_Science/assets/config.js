// CBSE Class 10 Social Science - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 10 Social Science',
    totalChapters: 22,
    storagePrefix: 'cbse_class10_social_science',
    chapterData: {
        'H01': { difficulty: 'medium', category: 'history', time: 50 },
        'H02': { difficulty: 'medium', category: 'history', time: 45 },
        'H03': { difficulty: 'hard', category: 'history', time: 60 },
        'H04': { difficulty: 'medium', category: 'history', time: 50 },
        'H05': { difficulty: 'hard', category: 'history', time: 55 },
        'G01': { difficulty: 'easy', category: 'geography', time: 40 },
        'G02': { difficulty: 'medium', category: 'geography', time: 45 },
        'G03': { difficulty: 'medium', category: 'geography', time: 40 },
        'G04': { difficulty: 'hard', category: 'geography', time: 50 },
        'G05': { difficulty: 'medium', category: 'geography', time: 45 },
        'G06': { difficulty: 'hard', category: 'geography', time: 50 },
        'G07': { difficulty: 'medium', category: 'geography', time: 45 },
        'P01': { difficulty: 'easy', category: 'political-science', time: 35 },
        'P02': { difficulty: 'medium', category: 'political-science', time: 45 },
        'P03': { difficulty: 'medium', category: 'political-science', time: 40 },
        'P04': { difficulty: 'hard', category: 'political-science', time: 50 },
        'P05': { difficulty: 'medium', category: 'political-science', time: 40 },
        'E01': { difficulty: 'easy', category: 'economics', time: 35 },
        'E02': { difficulty: 'medium', category: 'economics', time: 45 },
        'E03': { difficulty: 'medium', category: 'economics', time: 40 },
        'E04': { difficulty: 'hard', category: 'economics', time: 50 },
        'E05': { difficulty: 'easy', category: 'economics', time: 35 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Steps!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 11, title: 'Halfway Hero!', message: 'Completed 11 chapters' },
        fullCourse: { threshold: 22, title: 'Social Science Master!', message: 'Completed all 22 chapters' },
        weekStreak: { threshold: 7, title: 'On Fire!', message: 'Studied 7 days in a row' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
