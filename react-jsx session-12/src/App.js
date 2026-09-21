import TrendingSongs from './TrendingSongs';
import IPLScores from './IPLScores';
import FixedCode from './FixedCode';

export default function App() {
  return (
    <div className="container py-4">
      <h2>React Error Handling Assignment</h2>

      <TrendingSongs />
      <IPLScores />
      <FixedCode />
    </div>
  );
}