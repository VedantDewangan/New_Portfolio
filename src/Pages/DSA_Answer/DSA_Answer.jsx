import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { allQuestionAndAnswer } from '../../assets/DSA_QuestionAndAnswer';
import CodeDisplay from '../DSA/CodeDisplay';

export default function DSA_Answer() {
  const param = useParams();

  const allAnswer = allQuestionAndAnswer.filter(
    (obj) => obj.topic === param.topic && obj.question_tag === param.question
  );

  return (
    <div
      style={{
        padding: '20px',
        margin: 'auto',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <Link
          to="/dsa"
        >
         Go Back
        </Link>
      </div>

      {allAnswer.length === 1 ? (
        <CodeDisplay data={allAnswer[0]} />
      ) : (
        <p
          style={{
            textAlign: 'center',
            color: '#555',
            fontSize: '18px',
          }}
        >
          No matching question found. Please check the topic or question.
        </p>
      )}
    </div>
  );
}
