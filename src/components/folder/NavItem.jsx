import * as S from './NavItem.styled';

const NavItem = ({navName, navId, onClick, isCurrentNav}) => {

    const handleNavItemClick = () => {
        onClick(navId);
    }

    return (
        <S.NavItem onClick={handleNavItemClick} className={isCurrentNav ? 'current-nav' : undefined}>{navName}</S.NavItem>
    );
}

export default NavItem;