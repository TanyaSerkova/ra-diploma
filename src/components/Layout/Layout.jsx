import { Banner } from '../UI/Banner/Banner';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import bannerImg from '../../img/banner.jpg';

// базовая разметка страницы
export function Layout() {
  const bannerTxt = 'К весне готовы!';

  return (
    <div className="site-container">
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner src={bannerImg} text={bannerTxt} />
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};