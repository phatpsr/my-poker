interface NameList {
  name: string;
  point: number;
}

function NameList(point:Readonly<NameList>) {


  return (
    <div>
      <h2>Participant</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Tai
          <div>{point.point}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          BigM
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Poom
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </li>
      </ul>
    </div>
  );
}

export default NameList;
