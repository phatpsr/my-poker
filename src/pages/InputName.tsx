import { useNavigate } from "react-router-dom";

function InputName() {
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/poker")
  };

  return (
    <div className="container mt-5">
      <h1>My Poker</h1>
      <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <span className="col-form-label">Name</span>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Input your name"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputName;
