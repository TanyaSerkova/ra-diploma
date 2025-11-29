import { Link, useLocation } from 'react-router-dom';
import { Menu } from '../Blocks/Menu/Menu';
import { EmptyDiv } from '../UI/EmptyDiv/EmptyDiv';
import './Footer.css';
import { menuItemsFooter, classPaySystems, classSociaLinks, copyrightText, telLink, emailLink, contacts, scheduleText } from "../../data/constData";

// подвал интернет-страницы
export function Footer(){
    const location = useLocation();
    const activePage = location.pathname;
    const classMenu = 'nav flex-column';

    return (
        <footer className="container bg-light footer">
            <div className="row">
                <div className="col">
                    <section>
                        <h5>Информация</h5>
                        <Menu typeMenu='menu' classMenu={classMenu} menuItems={menuItemsFooter} activePage={activePage} />
                    </section>
                </div>
                <div className="col">
                    <section>
                        <h5>Принимаем к оплате:</h5>
                        <div className="footer-pay">
                            {classPaySystems.map(({ id, classname }) => {
                                <EmptyDiv key={id} className={classname} />
                            })}
                        </div>
                    </section>
                    <section>
                        <div className="footer-copyright">{copyrightText}</div>
                    </section>
                </div>
                <div className="col text-right">
                    <section className="footer-contacts">
                        <h5>Контакты:</h5>
                        <Link className='nav-link footer-contacts-phone' to={telLink}>{contacts.tel}</Link>
                        <span className="footer-contacts working-hours">{scheduleText}</span>
                        <Link className="nav-link footer-contacts-email" to={emailLink}>{contacts.email}</Link>
                        <div className="footer-social-links">
                            {classSociaLinks.map(({ id, className }) => (
                                <EmptyDiv key={id} className={className} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </footer>
            
    )
}