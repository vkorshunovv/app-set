import "./style.css";
import data from "./data";
import { useState } from "react";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [isMultiple, setMultiple] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultipleSelection = (currentId) => {
    let copyMultiple = [...multipleSelected];
    const indexOfCurrentId = copyMultiple.indexOf(currentId);
    if (indexOfCurrentId === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(indexOfCurrentId, 1);

    setMultipleSelected(copyMultiple);
    console.log(multipleSelected);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setMultiple(!isMultiple)}>
        Set Multiple Selection
      </button>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div
            onClick={() =>
              isMultiple
                ? handleMultipleSelection(dataItem.id)
                : handleSingleSelection(dataItem.id)
            }
            className="item"
            key={dataItem.id}
          >
            <div className="title">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            <div className="expendedItem">
              {isMultiple
                ? multipleSelected.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.answer}</div>
                  )
                : selected === dataItem.id && <div>{dataItem.answer}</div>}
            </div>
          </div>
        ))
      ) : (
        <div>Data not found!</div>
      )}
    </div>
  );
};

export default Accordian;
