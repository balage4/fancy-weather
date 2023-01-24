import Alert from 'react-bootstrap/Alert';

const AlertAbsolute = ({ message }) => {
  return (
    <Alert style={{ position: 'absolute', top: '40%', left: '40%' }}>
      <Alert variant="danger">{message}</Alert>
    </Alert>
  );
};

export default AlertAbsolute;
