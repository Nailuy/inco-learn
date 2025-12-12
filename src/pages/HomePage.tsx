import { Link } from 'react-router-dom';
import { modules } from '../data/courses';
import { getProgress } from '../utils/progress';
import ProgressBar from '../components/ProgressBar';
import logo from '../assets/logo.png';
import mascot1 from '../assets/mascots/2.webp';
import mascot2 from '../assets/mascots/6.webp';

function HomePage() {
    const progress = getProgress();
    const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
    const completedLessons = progress.completedLessons.length;
    const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    const beginnerModules = modules.filter(m => m.level === 'beginner');
    const intermediateModules = modules.filter(m => m.level === 'intermediate');
    const advancedModules = modules.filter(m => m.level === 'advanced');

    return (
        <div className="fade-in page-with-mascots">
            {/* Decorative Mascots */}
            <div className="mascot mascot-hero-left">
                <img src={mascot1} alt="" />
            </div>
            <div className="mascot mascot-hero-right">
                <img src={mascot2} alt="" />
            </div>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-logo">
                    <img src={logo} alt="INCO" className="hero-logo-icon" />
                </div>

                <p className="hero-subtitle">
                    Welcome to the educational platform by EchoCircle
                </p>

                <h1 className="hero-title">IncoLearn</h1>

                <Link to="/courses" className="btn btn-primary">
                    Start Your Learning
                </Link>
            </section>

            {/* Progress Overview */}
            {completedLessons > 0 && (
                <section style={{ marginBottom: 'var(--space-2xl)' }}>
                    <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
                        <h3 style={{ marginBottom: 'var(--space-md)', textAlign: 'center' }}>Your Progress</h3>
                        <ProgressBar progress={progressPercent} />
                        <p style={{ textAlign: 'center', marginTop: 'var(--space-md)', marginBottom: 0 }}>
                            {completedLessons} of {totalLessons} lessons completed
                        </p>
                    </div>
                </section>
            )}

            {/* Course Overview */}
            <section>
                <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>What You'll Learn</h2>

                <div className="courses-grid">
                    {/* Beginner */}
                    <div className="course-card">
                        <div className="course-header" style={{ background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' }}>
                            <span className="course-level beginner">Beginner</span>
                            <h3 className="course-title">/// STAGES 1-5</h3>
                        </div>
                        <div className="course-body">
                            <p className="course-description">
                                Learn why privacy matters, the difference between privacy and secrecy,
                                and how Web3 is transforming data ownership.
                            </p>
                            <div className="course-meta">
                                <span>{beginnerModules.length} stages • {beginnerModules.reduce((sum, m) => sum + m.lessons.length, 0)} lessons</span>
                            </div>
                        </div>
                    </div>

                    {/* Intermediate */}
                    <div className="course-card">
                        <div className="course-header" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' }}>
                            <span className="course-level intermediate">Intermediate</span>
                            <h3 className="course-title">BASED STAGES 1-5</h3>
                        </div>
                        <div className="course-body">
                            <p className="course-description">
                                Explore the four levels of blockchain privacy, understand FHE technology,
                                and learn about encryption approaches.
                            </p>
                            <div className="course-meta">
                                <span>{intermediateModules.length} stages • {intermediateModules.reduce((sum, m) => sum + m.lessons.length, 0)} lessons</span>
                            </div>
                        </div>
                    </div>

                    {/* Advanced */}
                    <div className="course-card">
                        <div className="course-header" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)' }}>
                            <span className="course-level advanced">Advanced</span>
                            <h3 className="course-title">CIRCLES STAGES 1-5</h3>
                        </div>
                        <div className="course-body">
                            <p className="course-description">
                                Deep dive into confidential tokens, cERC20s, real-world use cases,
                                and building applications with Inco.
                            </p>
                            <div className="course-meta">
                                <span>{advancedModules.length} stages • {advancedModules.reduce((sum, m) => sum + m.lessons.length, 0)} lessons</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
