import React, { useState } from 'react';
import data from './data';
import Question from './Question';

function App() {
  const [questions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}></Question>
            );
          })}
        </section>
      </div>
    </main>
  );
}
export default App;