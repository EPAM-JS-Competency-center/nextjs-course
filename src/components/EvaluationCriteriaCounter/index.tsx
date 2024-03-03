import React, { useState } from "react";

function EvaluationCriteriaCounter({ criteriaWithPercentages }) {
  // Initialize counts for each criterion passed via props, along with its percentage
  const initialCounts = criteriaWithPercentages.reduce((acc, { criterion }) => {
    acc[criterion] = 0;
    return acc;
  }, {});

  const [counts, setCounts] = useState(initialCounts);

  // Function to increment count for a criterion
  const incrementCount = (criterion) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [criterion]: prevCounts[criterion] + 1,
    }));
  };

  return (
    <div>
      <h2>Evaluation Criteria Counter</h2>
      <ul>
        {criteriaWithPercentages.map(({ criterion, percentage }) => (
          <li key={criterion}>
            {criterion} ({percentage}%): {counts[criterion]}{" "}
            <button onClick={() => incrementCount(criterion)}>Increment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EvaluationCriteriaCounter;
