export default function Input(props) {
  return (
    <div>
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Type the foods here"
        id="inputLarge"
      ></input>
      <button
        className="btn btn-lg btn-primary"
        type="button"
        onClick={() => props.onClick(document.querySelector("input").value)}
      >
        Get the nutrition facts
      </button>
    </div>
  );
}
