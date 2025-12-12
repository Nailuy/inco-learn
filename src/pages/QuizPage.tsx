import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getModuleById, modules } from '../data/courses';
import { getQuizByModuleId } from '../data/quizzes';
import { saveQuizScore, getQuizScore } from '../utils/progress';
import ProgressBar from '../components/ProgressBar';
import mascotQuiz from '../assets/mascots/cloud__1_.webp';
import gifBad from '../assets/mascots/nuh-uh.gif';
import gifGood from '../assets/mascots/Inco_Resized_SIGMA_animanted.gif';
import gifPerfect from '../assets/mascots/Inco_RESIZED_ColorDance_Animated.gif';

function QuizPage() {
    const { moduleId } = useParams<{ moduleId: string }>();

    const module = moduleId ? getModuleById(moduleId) : undefined;
    const quiz = moduleId ? getQuizByModuleId(moduleId) : undefined;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
    const [showResult, setShowResult] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    const previousScore = moduleId ? getQuizScore(moduleId) : undefined;

    if (!module || !quiz) {
        return (
            <div className="fade-in" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
                <h2>Quiz not found</h2>
                <p>The requested quiz could not be found.</p>
                <Link to="/courses" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
                    Back to Courses
                </Link>
            </div>
        );
    }

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const progressPercent = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

    const handleSelectAnswer = (optionIndex: number) => {
        if (showFeedback) return;
        setSelectedAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: optionIndex
        }));
        setShowFeedback(true);
    };

    const handleNext = () => {
        setShowFeedback(false);
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            const correctCount = quiz.questions.reduce((count, q) => {
                return count + (selectedAnswers[q.id] === q.correctIndex ? 1 : 0);
            }, 0);
            const score = Math.round((correctCount / quiz.questions.length) * 100);
            if (moduleId) {
                saveQuizScore(moduleId, score);
            }
            setShowResult(true);
        }
    };

    const handleRetry = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowResult(false);
        setShowFeedback(false);
    };

    const currentModuleIndex = modules.findIndex(m => m.id === moduleId);
    const nextModule = currentModuleIndex < modules.length - 1
        ? modules[currentModuleIndex + 1]
        : undefined;

    if (showResult) {
        const correctCount = quiz.questions.reduce((count, q) => {
            return count + (selectedAnswers[q.id] === q.correctIndex ? 1 : 0);
        }, 0);
        const score = Math.round((correctCount / quiz.questions.length) * 100);
        const passed = score >= 60;

        // Select GIF based on score
        const getResultGif = () => {
            if (score < 60) return gifBad;
            if (score >= 90) return gifPerfect;
            return gifGood;
        };

        const getResultMessage = () => {
            if (score < 60) return 'Keep Learning!';
            if (score >= 90) return 'Perfect Score!';
            return 'Great Job!';
        };

        return (
            <div className="fade-in">
                <div className="quiz-container">
                    <div className="results-card">
                        <div className="results-mascot">
                            <img src={getResultGif()} alt="Result" />
                        </div>
                        <h2 style={{ marginBottom: 'var(--space-md)' }}>
                            {getResultMessage()}
                        </h2>
                        <div className="results-score">{score}%</div>
                        <p className="results-text">
                            You got {correctCount} out of {quiz.questions.length} questions correct
                        </p>
                        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button onClick={handleRetry} className="btn btn-secondary">
                                Retry Quiz
                            </button>
                            {passed && nextModule ? (
                                <Link
                                    to={`/lesson/${nextModule.id}/${nextModule.lessons[0].id}`}
                                    className="btn btn-primary"
                                >
                                    Next: {nextModule.title}
                                </Link>
                            ) : (
                                <Link to="/courses" className="btn btn-primary">
                                    Back to Courses
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fade-in page-with-mascots">
            {/* Decorative Mascot */}
            <div className="mascot mascot-quiz-bottom">
                <img src={mascotQuiz} alt="" />
            </div>

            <div className="quiz-container">
                <div className="quiz-header">
                    <Link
                        to={`/lesson/${module.id}/${module.lessons[module.lessons.length - 1].id}`}
                        style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}
                    >
                        ← Back to {module.title}
                    </Link>
                    <h1 style={{ marginTop: 'var(--space-md)' }}>{quiz.title}</h1>
                    {previousScore !== undefined && (
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Previous best: {previousScore}%
                        </p>
                    )}
                </div>

                <div className="quiz-progress">
                    <div className="quiz-progress-text">
                        <span>Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
                        <span>{Math.round(progressPercent)}%</span>
                    </div>
                    <ProgressBar progress={progressPercent} />
                </div>

                <div className="question-card">
                    <div className="question-number">Question {currentQuestionIndex + 1}</div>
                    <h2 className="question-text">{currentQuestion.question}</h2>
                    <div className="options-list">
                        {currentQuestion.options.map((option, index) => {
                            const isSelected = selectedAnswers[currentQuestion.id] === index;
                            const isCorrect = index === currentQuestion.correctIndex;
                            const showCorrect = showFeedback && isCorrect;
                            const showIncorrect = showFeedback && isSelected && !isCorrect;
                            return (
                                <button
                                    key={index}
                                    className={`option-btn ${isSelected ? 'selected' : ''} ${showCorrect ? 'correct' : ''} ${showIncorrect ? 'incorrect' : ''}`}
                                    onClick={() => handleSelectAnswer(index)}
                                    disabled={showFeedback}
                                >
                                    <span className="option-letter">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {showFeedback && (
                    <div className="quiz-actions">
                        <button onClick={handleNext} className="btn btn-primary">
                            {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'See Results'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default QuizPage;
