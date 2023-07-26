import { Link } from "react-router-dom";
import './App.css';
import { lessons } from './lessons';

function App() {
  return (
    <>
      <h1 className="lesson-title">Lessons</h1>
      <div className="lesson-grid">
        {lessons.map((lesson, index) => {
          return (
            <Link to={`/lesson/${index + 1}`}>
              {`Lesson ${index + 1}`}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default App;