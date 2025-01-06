import { Icon } from "atom/Icon";
import styled from "styled-components";
import GridLayout from "template/GridLayout";

function App() {
  const ButtonWrapper = styled.button`
    padding: 8px;
    border-radius: 100%;
    cursor: pointer;
    background-color: var(--red-200);
  `;
  return (
    <div className="App">
      <ButtonWrapper>
        <Icon iconNm="add" iconColor="primary" />
      </ButtonWrapper>
      <GridLayout />
    </div>
  );
}

export default App;
