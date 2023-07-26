import { useParams } from 'react-router-dom';
import { lessons } from './lessons';

function Lesson() {
    const { id } = useParams();
    const lessonIndex = Number(id) - 1; // Convert id to a number
    const lesson = lessons[lessonIndex];

    return (
        <div className="card">
            <h1 className="cardTitle">{lesson.title}</h1>
            <h2>{lesson.subtitle}</h2>
            <div>{lesson.content}</div>
        </div>
    );
}

export default Lesson;
