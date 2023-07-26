import './lesson.css';
import { useLocation } from 'react-router-dom';

function Lesson2() {
    const location = useLocation();
    const lesson = location.state.lesson;

    return (
        <div className="card">
            <h1 className="cardTitle">{lesson.title}</h1>
            <h2>{lesson.subtitle}</h2>
            <div>{lesson.content}</div>
        </div>
    )
}

export default Lesson2;