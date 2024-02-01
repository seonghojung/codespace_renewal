import Link from "next/link";
import { styled } from "styled-components";

interface IUnderLineText {
  mbSize: number;
  pcSize: number;
  text: string;
}

interface IAddressWrap {
  $mbSize: number;
  $pcSize: number;
}

const UnderLineText = ({ mbSize, pcSize, text }: IUnderLineText) => {
  return (
    <Link href="mailto:jake@codespace.im" passHref legacyBehavior>
      <AddressWrap $mbSize={mbSize} $pcSize={pcSize} rel="noopener noreferrer" target="_blank">
        <Address>
          <span>{text}</span>
        </Address>
      </AddressWrap>
    </Link>
  );
};

export default UnderLineText;

const AddressWrap = styled.a<IAddressWrap>`
  margin-top: 10px;
  position: relative;
  font-size: ${(props) => props.$mbSize}px;
  color: #000;
  font-weight: 600;
  display: inline-block;
  transition: color 0.15s;
  line-height: 1.5;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    z-index: 1;
    background: currentColor;
    transform: scaleX(0);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: 0 50%;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.$pcSize}px;
    line-height: 1.14;
  }
`;

const Address = styled.h2`
  display: inline-flex;
  align-items: center;
  text-decoration-line: none;
  span {
    position: relative;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    z-index: 0;
    background-color: #bbc4d2;
    transform: scaleX(1);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: 0 50%;
  }
`;
