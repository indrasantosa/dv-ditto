import { FC } from 'react';

import { Alert } from '../../lib';
import { CodeExample, DemoPage } from './DemoPage';

const AlertsPage: FC = () => {
  const alertText = (
    <span>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </span>
  );

  const examples: CodeExample[] = [
    {
      title: 'Default alert',
      code: <Alert variant="error">{alertText}</Alert>,
    },
    {
      title: 'Alerts with icon',
      code: <Alert variant="info">{alertText}</Alert>,
    },
    {
      title: 'Dismissible alerts',
      code: (
        <Alert variant="success" onDismiss={() => alert('Alert dismissed!')}>
          {alertText}
        </Alert>
      ),
      codeStringifierOptions: { functionValue: (fn) => fn },
    },
    {
      title: 'Rounded',
      code: <Alert variant="warning">{alertText}</Alert>,
    },
  ];

  return <DemoPage examples={examples} />;
};

export default AlertsPage;
