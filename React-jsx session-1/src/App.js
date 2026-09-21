import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TrendingSong from './TrendingSong';

export default function App() {
  return (
    <div className="container py-5">
      <div className="card text-center p-4 mb-4">
        <h1>Welcome to My React Zomato App</h1>
        <TrendingSong />
      </div>

      <div className="card p-4">
        <h4>Virtual DOM</h4>
        <p>
          React creates a Virtual DOM, which is a lightweight copy of the real DOM.
          When data changes, React compares the new Virtual DOM with the previous
          one and updates only the changed elements. This reduces unnecessary DOM
          operations, making the UI faster and more efficient than updating the
          entire page.
        </p>
      </div>
    </div>
  );
}