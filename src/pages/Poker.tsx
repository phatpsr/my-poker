import { useState } from "react";
import NameList from "../components/NameList";
import PokeResult from "../components/PokeResult";

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

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [myPoint, setMyPoint] = useState(-1);

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lightning-charge-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
              </svg>{" "}
              Show Results
            </button>
            <button type="button" className="btn btn-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>{" "}
              Reset Points
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
