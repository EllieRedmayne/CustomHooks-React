import usePersistentState from "../../hooks/usePersistentState";

function ControlledInput() {
  const [text, keepPersistent] = usePersistentState();

  return (
    <div>
      <h4>You can refresh, but I will remain!!</h4>
      <input
        type="text"
        onChange={keepPersistent}
        value={text}
        placeholder="text in here..."
      />
    </div>
  );
}

export default ControlledInput;
