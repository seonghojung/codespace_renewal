import Link from "next/link";
import { styled } from "styled-components";

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
`;

const UnderLineLink = ({ children, theme = "dark", href }: { href: string; theme?: "dark" | "white" | undefined; children: React.ReactNode }) => {
  return (
    <Link href={href} target="_blank">
      <Address theme={theme}>{children}</Address>
    </Link>
  );
};

export default UnderLineLink;
