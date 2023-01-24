const FormHead = ({ arrayLength }) => {
  return (
    <div className="form-head sticky-head">
      <h3>Remaining cities: {10 - arrayLength}</h3>
    </div>
  );
};

export default FormHead;
