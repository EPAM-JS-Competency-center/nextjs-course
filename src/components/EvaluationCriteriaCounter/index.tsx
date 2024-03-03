import clsx from "clsx";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface Criterion {
  criterion: string;
  coefficient: number;
}

interface EvaluationCriteriaCounterProps {
  criteriaWithCoefficients: Criterion[];
  minGrade?: number;
}

const EvaluationCriteriaCounter: React.FC<EvaluationCriteriaCounterProps> = ({
  criteriaWithCoefficients,
  minGrade = 60,
}) => {
  const initialCheckedState = new Array(criteriaWithCoefficients.length).fill(
    false
  );
  const [checkedState, setCheckedState] =
    useState<boolean[]>(initialCheckedState);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const calculateGrade = () => {
    const totalCoefficient = criteriaWithCoefficients.reduce(
      (total, item) => total + item.coefficient,
      0
    );
    const checkedCoefficient = criteriaWithCoefficients.reduce(
      (total, item, index) =>
        checkedState[index] ? total + item.coefficient : total,
      0
    );

    return ((checkedCoefficient / totalCoefficient) * 100).toFixed(2);
  };

  const resetEvaluation = () => {
    setCheckedState(initialCheckedState);
  };

  const grade = calculateGrade();
  const isSuccess = parseFloat(grade) >= minGrade;
  const message = isSuccess
    ? 'Please put a grade and click "Mark as passed" button.'
    : 'Minimum grade to successfully complete the course - 60%. Please provide review comments, set draft grade and click "Send back for updates" button in the Learn.';

  const gradeClassName = clsx({
    [styles.success]: isSuccess,
    [styles.danger]: !isSuccess,
  });

  return (
    <div>
      <table className={styles.container}>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Coefficient</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {criteriaWithCoefficients.map((item, index) => (
            <tr key={index}>
              <td>{item.criterion}</td>
              <td className={styles.center}>{item.coefficient}</td>
              <td className={styles.center}>
                <input
                  className={styles.checkbox}
                  id={`custom-checkbox-${index}`}
                  type="checkbox"
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
                <label
                  className={styles.checkboxLabel}
                  htmlFor={`custom-checkbox-${index}`}
                ></label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.gradeContainer}>
        <div className={styles.gradeTable}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.topic}>
                <th>Student's grade</th>
                <td className={gradeClassName}>{grade}%</td>
              </tr>
            </tbody>
          </table>
          <button className={styles.btn} onClick={resetEvaluation}>
            Reset
          </button>
        </div>
        <p className={gradeClassName}>{message}</p>
      </div>
    </div>
  );
};

export default EvaluationCriteriaCounter;
