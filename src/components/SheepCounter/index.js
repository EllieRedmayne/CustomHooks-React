import useCounter from "../../hooks/useCounter";
import sheep from "./sheep.svg";

function SheepCounter() {
  const [count, increment, decrement] = useCounter();

  return (
    <div>
      <h4>Sheep Counter</h4>
      <button onClick={decrement}>Less</button>
      <button onClick={increment}>More</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {Array(count)
          .fill()
          .map((_, i) => {
            return (
              <img
                src={sheep}
                key={i}
                alt={`sheep number ${i + 1}`}
                style={{ width: "50px" }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SheepCounter;
