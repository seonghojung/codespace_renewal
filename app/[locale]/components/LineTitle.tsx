import { styled } from "styled-components";

interface ILineText {
  text: string;
}

// TODO: 로직 구현 필요, 단순히 호버시 트랜지션만 적용시킴
const LineTitle = ({ text }: ILineText) => {
  return (
    <LineTitleWrap>
      <Title>{text}</Title>
    </LineTitleWrap>
  );
};

export default LineTitle;

const LineTitleWrap = styled.div``;

const Title = styled.span`
  padding: 12px 20px;
  font-size: 24px;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgb(50, 50, 50), rgb(50, 50, 50));
  background-size: 0% 0.2em;
  background-position-x: 100%;
  background-position-y: 100%;
  transition: all 0.35s ease-out;

  &:hover {
    background-size: 200% 0.2em;
  }
`;
