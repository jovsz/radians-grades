const Input = ({ func, val }) => {
    return <input className="input" onChange={func} value={val} />;
  };
  
  export default Input;
  