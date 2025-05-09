import { Row } from "./Row";
import { useCount } from "./hoook";

export const ChildCom = () => {
  const { count, increment, decrement, reset } = useCount();

  return (
    <Row>
      <Row>{count}</Row>
      <Row>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <Row>
          <button onClick={reset}>reset</button>
        </Row>
      </Row>
    </Row>
  );
};
