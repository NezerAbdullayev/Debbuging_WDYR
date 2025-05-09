import { ChildCom } from "./ChildCom";
import { Row } from "./Row";

export const Parent = () => {
  return (
    <>
      <Row>Parent Component</Row>
      <Row>
        <ChildCom />

        <hr />
      </Row>
    </>
  );
};
