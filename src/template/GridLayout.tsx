import ResizableBox from "components/ResizableBox";
import styled from "styled-components";

export default function GridLayout({
  isVertical = false,
  datas = [
    { id: "box0", width: 1, height: 2, row: 1, col: 1 },
    { id: "box1", width: 1, height: 2, row: 1, col: 2 },
    { id: "box2", width: 1, height: 1, row: 1, col: 3 },
    { id: "box3", width: 1, height: 1, row: 2, col: 3 },
  ],
}) {
  const GridContainer = styled.div`
    padding: 24px;
    display: grid;
    gap: 24px;
    grid-template-rows: ${isVertical ? "1fr 1fr 1fr" : "1fr 1fr"};
    grid-template-columns: ${isVertical ? "1fr 1fr" : "1fr 1fr 1fr"};
    ${datas.map(
      (item) => `
      & > #${item.id} {
        grid-row: ${item.row} / ${item.row + item.height};
        grid-column: ${item.col} / ${item.col + item.width};
      }
    `
    )};
  `;
  // grid-template-rows: ${isVertical
  //   ? "repeat(3, minmax(32vh, auto))"
  //   : "repeat(2, minmax(45vh, auto))"};
  const onDragStart = (e: DragEvent) => {
    console.log(e.dataTransfer);
  };
  const onDragEnter = (e: DragEvent) => {
    console.log(e.dataTransfer);
  };
  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
  };
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    console.log(e.dataTransfer);
  };
  return (
    <GridContainer>
      {datas.map((col) => (
        <ResizableBox key={col.id} {...col} id={`${col.id}`}>
          {col.id}
        </ResizableBox>
      ))}
    </GridContainer>
  );
}
