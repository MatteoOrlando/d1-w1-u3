const ButtonComponent = function (propsObj) {
  console.log('il valore di button é:', propsObj);
  return (
    //    creo il componente React padre (unico)
    <>
      <div>
        <h2>React Button!</h2>
      </div>
      <div>
        <button className="button-size">{propsObj.textToShow} </button>
      </div>
    </>
  );
};

export default ButtonComponent;
