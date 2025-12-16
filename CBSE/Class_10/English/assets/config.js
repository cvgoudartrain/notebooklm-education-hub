// CBSE Class 10 English - Configuration
const SUBJECT_CONFIG = {
    name: 'CBSE Class 10 English',
    totalChapters: 18,
    storagePrefix: 'cbse_class10_english',
    chapterData: {
        'ff01': { difficulty: 'easy', category: 'prose', time: 30 },
        'ff02': { difficulty: 'medium', category: 'prose', time: 35 },
        'ff03': { difficulty: 'medium', category: 'prose', time: 40 },
        'ff04': { difficulty: 'medium', category: 'prose', time: 35 },
        'ff05': { difficulty: 'easy', category: 'prose', time: 45 },
        'ff06': { difficulty: 'easy', category: 'prose', time: 30 },
        'ff07': { difficulty: 'easy', category: 'prose', time: 25 },
        'ff08': { difficulty: 'medium', category: 'prose', time: 30 },
        'ff09': { difficulty: 'medium', category: 'drama', time: 35 },
        'fp01': { difficulty: 'easy', category: 'story', time: 25 },
        'fp02': { difficulty: 'easy', category: 'story', time: 25 },
        'fp03': { difficulty: 'medium', category: 'story', time: 30 },
        'fp04': { difficulty: 'medium', category: 'story', time: 30 },
        'fp05': { difficulty: 'medium', category: 'story', time: 30 },
        'fp06': { difficulty: 'easy', category: 'story', time: 30 },
        'fp07': { difficulty: 'medium', category: 'story', time: 35 },
        'fp08': { difficulty: 'easy', category: 'story', time: 30 },
        'fp09': { difficulty: 'medium', category: 'story', time: 30 }
    },
    achievements: {
        firstChapter: { threshold: 1, title: 'First Steps!', message: 'Completed your first chapter' },
        halfCourse: { threshold: 9, title: 'Halfway Hero!', message: 'Completed 9 chapters' },
        fullCourse: { threshold: 18, title: 'English Master!', message: 'Completed all 18 chapters' },
        weekStreak: { threshold: 7, title: 'On Fire!', message: 'Studied 7 days in a row' }
    }
};

document.addEventListener('DOMContentLoaded', () => initializeApp(SUBJECT_CONFIG));
