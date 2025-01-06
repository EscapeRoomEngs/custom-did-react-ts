import styled from "styled-components";
import resizeRowIcon from "../assets/icon/vaadin_resize-h.svg";
import resizeColIcon from "../assets/icon/vaadin_resize-v.svg";

interface BoxProps {
  id?: string;
  width: number;
  height: number;
  row: number;
  col: number;
  children?: any;
}
export default function ResizableBox(props: BoxProps) {
  const ResizableBoxWrapper = styled.div`
    box-sizing: border-box;
    min-width: 200px;
    min-height: 200px;
    padding: 32px;
    border: 1px solid var(--gray-300);
    border-radius: 16px;
    display: grid;
    gap: 16px;
    grid-template-rows: 1fr 24px;
  `;
  const ContentWrapper = styled.div`
    display: flex;
    gap: 16px;
    flex: auto 24px;
    & > .content {
      flex-grow: 1;
    }
    & > .resize-width-btn {
      flex-grow: 0;
    }
  `;

  const ResizeIcon = (path: string, width: string, height: string) => styled.div`
    width: ${width};
    height: ${height};
    cursor: col-resize;
    background-image: url(${path});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.25);
    opacity: 0.3;
  `;
  const ResizeWidth = ResizeIcon(resizeColIcon, "32px", "100%");
  const ResizeHeight = ResizeIcon(resizeRowIcon, "100%", "32px");

  return (
    <ResizableBoxWrapper className="resizable-box-wrapper" id={props.id}>
      {/* <ContentWrapper> */}
      <div className="content">{props.children}</div>
      {/* <ResizeWidth className="resize-width-btn" /> */}
      {/* </ContentWrapper> */}
      {/* <ResizeHeight /> */}
    </ResizableBoxWrapper>
  );
}
