import Icon from "./Icon";

interface NameList {
  name: string;
  point: number;
  isShowResult: boolean
}

function NameList(props: Readonly<NameList>) {
  return (
    <div>
      <h2>Participants</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Tai
          <div>{props.isShowResult ? props.point : <Icon name="check" />}</div>
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
