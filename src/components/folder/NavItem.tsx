import * as S from "./NavItem.styled";

interface NavItemProps {
  navName?: string;
  navId?: number;
  onClick: (navId: number) => void;
  isCurrentNav: boolean;
}

const NavItem = ({ navName, navId, onClick, isCurrentNav }: NavItemProps) => {
  const handleNavItemClick = () => {
    if (navId) {
      onClick(navId);
    }
  };

  return (
    <S.NavItem
      onClick={handleNavItemClick}
      className={isCurrentNav ? "current-nav" : undefined}
    >
      {navName}
    </S.NavItem>
  );
};

export default NavItem;
