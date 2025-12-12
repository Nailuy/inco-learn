import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="courses" element={<CoursesPage />} />
                <Route path="lesson/:moduleId/:lessonId" element={<LessonPage />} />
                <Route path="quiz/:moduleId" element={<QuizPage />} />
            </Route>
        </Routes>
    );
}

export default App;
