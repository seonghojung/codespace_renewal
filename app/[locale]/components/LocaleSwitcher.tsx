"use client";

import { usePathname, useRouter } from "@/navConfig";
import { ChangeEvent, ReactNode, useTransition } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import downDelta from "../../../public/svgs/down_delta.svg";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

interface IStyle {
  $isPending: boolean;
}
const StyledLabel = styled.label<IStyle>`
  position: relative;
  display: flex;
  align-items: center;
  color: #718096; /* You can replace this color with your desired gray color */
  ${(props) =>
    props.$isPending &&
    css`
      opacity: 0.3;
    `}
`;

const HiddenText = styled.p`
  sr-only: true;
  display: block;
  color: #ffffff;
`;

const StyledSelect = styled.select<IStyle>`
  display: inline-flex;
  border: none;
  outline: none;
  appearance: none;
  background: transparent;
  padding-left: 10px;
  color: #ffffff;
  cursor: pointer;
  ${(props) =>
    props.$isPending &&
    css`
      pointer-events: none;
    `}
`;

export default function LocaleSwitcher({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <StyledLabel $isPending={isPending} htmlFor="yourSelect">
      <HiddenText>{label}</HiddenText>
      <StyledSelect id="yourSelect" defaultValue={defaultValue} disabled={isPending} onChange={onSelectChange} $isPending={isPending}>
        {children}
      </StyledSelect>
      <Image src={downDelta} alt={"아래쪽 화살표"} />
    </StyledLabel>
  );
}
