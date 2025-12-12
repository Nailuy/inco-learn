import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getModulesByLevel, Module } from '../data/courses';
import { getModuleProgress, isLessonComplete } from '../utils/progress';
import ProgressBar from '../components/ProgressBar';
import mascotCm from '../assets/mascots/GvfVzx8XYAAKp9Z.webp';

type Level = 'all' | 'beginner' | 'intermediate' | 'advanced';

function CoursesPage() {
    const [filter, setFilter] = useState<Level>('all');
    const navigate = useNavigate();

    const filteredModules = getModulesByLevel(filter);

    const handleModuleClick = (module: Module) => {
        if (module.lessons.length > 0) {
            navigate(`/lesson/${module.id}/${module.lessons[0].id}`);
        }
    };

    const getLevelGradient = (level: string) => {
        switch (level) {
            case 'beginner':
                return 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
            case 'intermediate':
                return 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)';
            case 'advanced':
                return 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)';
            default:
                return 'var(--gradient-primary)';
        }
    };

    return (
        <div className="fade-in page-with-mascots">
            {/* Decorative Mascot */}
            <div className="mascot mascot-courses-corner">
                <img src={mascotCm} alt="" />
            </div>

            <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
                <h1>Courses</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Learn about blockchain privacy, FHE encryption, and building with Inco
                </p>
            </div>

            <div className="level-filter" style={{ justifyContent: 'center' }}>
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    All Levels
                </button>
                <button
                    className={`filter-btn ${filter === 'beginner' ? 'active' : ''}`}
                    onClick={() => setFilter('beginner')}
                >
                    🌱 Beginner
                </button>
                <button
                    className={`filter-btn ${filter === 'intermediate' ? 'active' : ''}`}
                    onClick={() => setFilter('intermediate')}
                >
                    📚 Intermediate
                </button>
                <button
                    className={`filter-btn ${filter === 'advanced' ? 'active' : ''}`}
                    onClick={() => setFilter('advanced')}
                >
                    🚀 Advanced
                </button>
            </div>

            <div className="courses-grid">
                {filteredModules.map(module => {
                    const progress = getModuleProgress(module.id, module.lessons.length);
                    const completedCount = module.lessons.filter(l =>
                        isLessonComplete(module.id, l.id)
                    ).length;

                    return (
                        <div
                            key={module.id}
                            className="course-card"
                            onClick={() => handleModuleClick(module)}
                        >
                            <div
                                className="course-header"
                                style={{ background: getLevelGradient(module.level) }}
                            >
                                <span className={`course-level ${module.level}`}>
                                    {module.level}
                                </span>
                                <h3 className="course-title">{module.title}</h3>
                            </div>
                            <div className="course-body">
                                <p className="course-description">{module.description}</p>
                                <div style={{ marginBottom: 'var(--space-md)' }}>
                                    <ProgressBar progress={progress} />
                                </div>
                                <div className="course-meta">
                                    <span>{module.lessons.length} lessons</span>
                                    <span className="course-progress">
                                        {completedCount}/{module.lessons.length} completed
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {filteredModules.length === 0 && (
                <div style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
                    <p>No courses found for this level.</p>
                </div>
            )}
        </div>
    );
}

export default CoursesPage;
