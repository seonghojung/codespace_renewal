import Link from "next/link";
import { styled } from "styled-components";
import RightArrowIcon from "../(home)/icon/RightArrowIcon";

interface IStyle {
  theme: string;
}
const Address = styled.span<IStyle>`
  display: inline-flex;
  align-items: center;
  text-decoration-line: none;
  position: relative;
  cursor: pointer;
  width: auto;
  height: auto;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    z-index: 1;
    background: ${(props) => (props.theme === "white" ? "#bbc4d2" : "currentColor")};
    transform: scaleX(0);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: 0 50%;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    z-index: 0;
    background-color: ${(props) => (props.theme === "white" ? "#56616a" : "#bbc4d2")};
    transform: scaleX(1);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: 0 50%;
  }
  &:hover:before {
    transform: scaleX(1);
  }
  svg {
    left: 14px;
    position: absolute;
    width: 24px;
    height: 24px;
    circle,
    path {
      stroke: #8f99aa;
    }
  }
  &:hover {
    svg {
      circle,
      path {
        transition: 0.5s;
        stroke: black;
      }
    }
  }
  font-size: 16px;
  line-height: 22px;
  @media (min-width: 768px) {
    line-height: 24px;
  }
  @media (min-width: 1280px) {
    font-size: 22px;
    line-height: 26px;
    svg {
      left: 18px;
      width: 40px;
      height: 40px;
    }
  }
  @media (min-width: 1920px) {
    font-size: 26px;
    line-height: 38px;
  }
`;

// TODO. 메인페이지에서 자세히 알아보기 클릭 시 새창 이동하는 부분 수정

const UnderLineLink = ({ children, theme = "dark", href }: { href: string; theme?: "dark" | "white" | undefined; children: React.ReactNode }) => {
  return (
    <Link href={href} target="_blank">
      <Address theme={theme}>
        {children}
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <RightArrowIcon />
        </div>
      </Address>
    </Link>
  );
};

export default UnderLineLink;
