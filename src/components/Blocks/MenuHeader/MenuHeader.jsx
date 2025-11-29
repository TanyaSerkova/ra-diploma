import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Menu } from '../Menu/Menu';

//обертка строки меню в шапке сайте
export function MenuHeader(props) {
    const location = useLocation();

    return (
        <div className="collapse navbar-collapse" id='vavbarMain'>
            <Menu typeMenu='menu' classMenu={props.classMenu} menuItems={props.menuItems} activePage={location.pathmane} />
        </div>
    )
};

MenuHeader.propTypes = {
    classMenu: PropTypes.string,
    menuItems: PropTypes.array,
}