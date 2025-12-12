import Cookies from 'js-cookie';

const PROGRESS_KEY = 'incolearn_progress';

export interface Progress {
    completedLessons: string[]; // Format: "moduleId:lessonId"
    quizScores: { [moduleId: string]: number }; // Score percentage
}

function getDefaultProgress(): Progress {
    return {
        completedLessons: [],
        quizScores: {}
    };
}

export function getProgress(): Progress {
    try {
        const stored = Cookies.get(PROGRESS_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.error('Error reading progress:', e);
    }
    return getDefaultProgress();
}

export function saveProgress(progress: Progress): void {
    try {
        Cookies.set(PROGRESS_KEY, JSON.stringify(progress), { expires: 365 });
    } catch (e) {
        console.error('Error saving progress:', e);
    }
}

export function isLessonComplete(moduleId: string, lessonId: string): boolean {
    const progress = getProgress();
    return progress.completedLessons.includes(`${moduleId}:${lessonId}`);
}

export function markLessonComplete(moduleId: string, lessonId: string): void {
    const progress = getProgress();
    const key = `${moduleId}:${lessonId}`;
    if (!progress.completedLessons.includes(key)) {
        progress.completedLessons.push(key);
        saveProgress(progress);
    }
}

export function getQuizScore(moduleId: string): number | undefined {
    const progress = getProgress();
    return progress.quizScores[moduleId];
}

export function saveQuizScore(moduleId: string, score: number): void {
    const progress = getProgress();
    progress.quizScores[moduleId] = score;
    saveProgress(progress);
}

export function getModuleProgress(moduleId: string, totalLessons: number): number {
    const progress = getProgress();
    const completedInModule = progress.completedLessons.filter(
        key => key.startsWith(`${moduleId}:`)
    ).length;
    return totalLessons > 0 ? Math.round((completedInModule / totalLessons) * 100) : 0;
}

export function resetProgress(): void {
    Cookies.remove(PROGRESS_KEY);
}
