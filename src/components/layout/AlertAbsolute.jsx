const AlertAbsolute = ({ message }) => {
  return (
    <div
      className="alert alert-primary fade-in position-absolute top-50 start-50 translate-middle"
      role="alert">
      {message}
    </div>
  );
};

export default AlertAbsolute;
