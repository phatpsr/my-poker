import { useState } from "react";
import NameList from "../components/NameList";
import PokeResult from "../components/PokeResult";
import Icon from "../components/Icon";

function Poker() {
  const points = [
    { name: "Shirtless", value: 0 },
    { name: "S", value: 1 },
    { name: "M", value: 2 },
    { name: "L", value: 3 },
    { name: "XL", value: 5 },
    { name: "XXL", value: 8 },
    { name: "XXXL", value: 13 },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [myPoint, setMyPoint] = useState(0);

  return (
    <body>
      <div className="container mt-5">
        <div className="row">
          <div className="col d-grid gap-2 d-md-flex">
            <h1>Poke Your Point</h1>
          </div>
        </div>
        <div className="row mb-5 mt-2">
          <div className="col d-grid gap-2 d-md-flex">
            {points.map((point, index) => (
              <button
                type="button"
                key={point.name}
                className={
                  selectedIndex === index
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
                onClick={() => {
                  setSelectedIndex(index);
                  setMyPoint(point.value);
                }}
              >
                {point.name}
              </button>
            ))}
          </div>
          <div className="col d-grid gap-2 d-md-flex justify-content-end">
            <button type="button" className="btn btn-warning">
              <Icon name="lightning" /> Show Results
            </button>
            <button type="button" className="btn btn-warning">
              <Icon name="trash" /> Reset Points
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <NameList name="Tai" point={myPoint} />
          </div>
          <div className="col">
            <PokeResult />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Poker;
