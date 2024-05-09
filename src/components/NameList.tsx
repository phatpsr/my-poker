import Icon from "./Icon";

interface NameList {
  name: string;
  point: number;
  isShowResult: boolean
  selectedIndex: number
}

function NameList(props: Readonly<NameList>) {
  let result:any 
  if (props.selectedIndex < 0){
    result = ""
  } else if (props.isShowResult){
    result = props.point
  }
  else {
    result = <Icon name="check" />
  }
  return (
    <div>
      <h2>Participants</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Tai
          <div>{result}</div>
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
