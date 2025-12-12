import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { modules, getModuleById, getLessonById } from '../data/courses';
import { markLessonComplete, isLessonComplete } from '../utils/progress';
import { getQuizByModuleId } from '../data/quizzes';

function LessonPage() {
    const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();

    const module = moduleId ? getModuleById(moduleId) : undefined;
    const lesson = moduleId && lessonId ? getLessonById(moduleId, lessonId) : undefined;

    const currentIndex = module?.lessons.findIndex(l => l.id === lessonId) ?? -1;
    const prevLesson = currentIndex > 0 ? module?.lessons[currentIndex - 1] : undefined;
    const nextLesson = currentIndex < (module?.lessons.length ?? 0) - 1
        ? module?.lessons[currentIndex + 1]
        : undefined;

    const currentModuleIndex = modules.findIndex(m => m.id === moduleId);
    const nextModule = currentModuleIndex < modules.length - 1
        ? modules[currentModuleIndex + 1]
        : undefined;

    const hasQuiz = moduleId ? !!getQuizByModuleId(moduleId) : false;

    useEffect(() => {
        if (moduleId && lessonId) {
            markLessonComplete(moduleId, lessonId);
        }
    }, [moduleId, lessonId]);

    if (!module || !lesson) {
        return (
            <div className="fade-in" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
                <h2>Lesson not found</h2>
                <p>The requested lesson could not be found.</p>
                <Link to="/courses" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
                    Back to Courses
                </Link>
            </div>
        );
    }

    return (
        <div className="fade-in">
            <div className="sidebar-layout">
                <aside className="sidebar">
                    <h3 className="sidebar-title">{module.title}</h3>
                    <ul className="module-list">
                        {module.lessons.map((l, index) => {
                            const isComplete = isLessonComplete(module.id, l.id);
                            const isActive = l.id === lessonId;
                            return (
                                <li key={l.id} className="lesson-item">
                                    <Link
                                        to={`/lesson/${module.id}/${l.id}`}
                                        className={`lesson-link ${isActive ? 'active' : ''} ${isComplete ? 'completed' : ''}`}
                                    >
                                        <span style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            background: isComplete ? 'var(--color-success)' : 'var(--color-background)',
                                            color: isComplete ? 'white' : 'var(--color-text-light)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 'var(--font-size-xs)',
                                            fontWeight: '600',
                                            flexShrink: 0
                                        }}>
                                            {isComplete ? '✓' : index + 1}
                                        </span>
                                        {l.title}
                                    </Link>
                                </li>
                            );
                        })}
                        {hasQuiz && (
                            <li className="lesson-item" style={{ marginTop: 'var(--space-lg)' }}>
                                <Link
                                    to={`/quiz/${module.id}`}
                                    className="lesson-link"
                                    style={{
                                        background: 'var(--color-background)',
                                        fontWeight: '600',
                                        color: 'var(--color-secondary)'
                                    }}
                                >
                                    📝 Take Quiz
                                </Link>
                            </li>
                        )}
                    </ul>
                </aside>

                <div className="content-area">
                    <header className="content-header">
                        <span className={`content-level ${module.level}`}>
                            {module.level}
                        </span>
                        <h1>{lesson.title}</h1>
                    </header>

                    <div
                        className="lesson-content"
                        dangerouslySetInnerHTML={{ __html: lesson.content }}
                    />

                    <div className="lesson-nav">
                        {prevLesson ? (
                            <Link to={`/lesson/${module.id}/${prevLesson.id}`} className="nav-btn nav-btn-prev">
                                ← {prevLesson.title}
                            </Link>
                        ) : (
                            <div />
                        )}

                        {nextLesson ? (
                            <Link to={`/lesson/${module.id}/${nextLesson.id}`} className="nav-btn nav-btn-next">
                                {nextLesson.title} →
                            </Link>
                        ) : hasQuiz ? (
                            <Link to={`/quiz/${module.id}`} className="nav-btn nav-btn-next">
                                Take Quiz →
                            </Link>
                        ) : nextModule ? (
                            <Link to={`/lesson/${nextModule.id}/${nextModule.lessons[0].id}`} className="nav-btn nav-btn-next">
                                Next Module: {nextModule.title} →
                            </Link>
                        ) : (
                            <Link to="/courses" className="nav-btn nav-btn-next">
                                All Courses →
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessonPage;
