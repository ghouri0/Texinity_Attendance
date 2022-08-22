import { Button, Form, message, Steps } from 'antd';
import React, { useState } from 'react';

import Form1 from './Form'
import Form2 from './Form2'
import Form3 from './Form3'

// import './AddUser.css'

const { Step } = Steps;
const steps = [
  {
    title: 'First',
    content: <Form1 />,
  },
  {
    title: 'Second',
    content: <Form2 />,
  },
  {
    title: 'Last',
    content: <Form3 />,
  },
];

const App = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div style={{margin: '25px', backgroundColor: '#121212', padding: '25px'}}>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default App;