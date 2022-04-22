import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FiHeadphones, FiCreditCard } from 'react-icons/fi';
import SVG from '../../assets/svg';

import styles from './MainLayout.module.scss';
import { ROUTING } from '../../constants';

const activeLink = (isActive: boolean) =>
  isActive ? styles['active-link'] : '';

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <div className={styles['menu__logo']}>{SVG.logo}</div>
        <div className={styles['menu__container']}>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to="/"
              >
                {ROUTING.ACCOUNT_LOGO}
                Личный кабинет
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to={`/${ROUTING.SERVICES}`}
              >
                {ROUTING.SERVICES_LOGO}
                Услуги
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to={`/${ROUTING.FINANCE}`}
              >
                <FiCreditCard />
                Финансы
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to={`/${ROUTING.DEVICE}`}
              >
                {ROUTING.DEVICE_LOGO}
                Оборудование
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to={`/${ROUTING.SUPPORT}`}
              >
                <FiHeadphones />
                Поддержка
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to={`/${ROUTING.SETTINGS}`}
              >
                {ROUTING.SETTINGS_LOGO}
                Настройки
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to={`/${ROUTING.COUPONS}`}
              >
                {ROUTING.COUPONS_LOGO}
                Купономания
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>
        <Outlet />
      </main>
      {/* By looking at the code above, you may have noticed that React Router supports nested routing
            where you can define routes for different parts of your application with different layouts.
            This is possible because of the <Outlet /> component, which is a placeholder for the elements
            that should be rendered on the child routes / paths. */}
    </div>
  );
};

export default MainLayout;
