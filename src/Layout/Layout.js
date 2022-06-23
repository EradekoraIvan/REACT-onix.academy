import { Outlet } from 'react-router-dom';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';
import Description from '../component/landing_page/description/description';
import style from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <Description />
      <Header headerStyle="header_style" />
      <main className={style.main}><Outlet /></main>           
      <Footer />
    </>
  );
}
