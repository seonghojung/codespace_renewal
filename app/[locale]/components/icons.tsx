import Image from "next/image";
import logoIconMobile from "../../../public/svgs/logo_icon.svg";
import logoIconPC from "../../../public/images/logo.png";
import arrowIcon from "../../../public/svgs/arrow_icon.svg";
import arrowIconWhite from "../../../public/svgs/arrow_icon-white.svg";
import bestIcon from "../../../public/svgs/best.svg";
import blueDotIcon from "../../../public/svgs/blue_dot_icon.svg";
import blueDotIconMb from "../../../public/svgs/blue_dot_mb.svg";
import closeIcon from "../../../public/svgs/close.svg";
import hamburgerIcon from "../../../public/svgs/hamburger.svg";

export const LogoIconMobile = () => <Image src={logoIconMobile} alt="모바일 코드스페이스 로고 아이콘" />;
export const LogoIconPC = () => <Image src={logoIconPC} alt="피씨 코드스페이스 로고 아이콘" />;
export const ArrowIcon = ({ color }: { color?: string }) =>
  color === "white" || color === "#fff" || color === "#FFF" ? <Image src={arrowIconWhite} alt={"화살표 아이콘"} /> : <Image src={arrowIcon} alt={"화살표 아이콘"} />;
export const BestIcon = () => <Image src={bestIcon} alt={"파란색 엄지척 아이콘"} />;
export const BlueDotIcon = () => <Image src={blueDotIcon} alt={"파란 점 아이콘"} />;
export const BlueDotIconMb = () => <Image src={blueDotIconMb} alt={"파란 점 아이콘"} />;
export const CloseIcon = () => <Image src={closeIcon} alt={"닫기 아이콘"} />;
export const HamburgerIcon = () => <Image src={hamburgerIcon} alt={"햄버거 아이콘"} />;
