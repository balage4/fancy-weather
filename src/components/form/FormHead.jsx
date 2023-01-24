const FormHead = ({ arrayLength }) => {
  return (
    <div id="form-head">
      <h3>Your remaining city name: {10 - arrayLength}</h3>
    </div>
  );
};

export default FormHead;
