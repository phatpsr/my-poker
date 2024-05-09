import Icon from "./Icon";

interface NameList {
  name: string;
  point: number;
}

function NameList(point: Readonly<NameList>) {
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
          <Icon name="check" />
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Poom
          <Icon name="check" />
        </li>
      </ul>
    </div>
  );
}

export default NameList;
