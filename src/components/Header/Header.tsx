import style from './Header.module.css'
export const Header = () => {
  return (
    <header className={style.header}>
        <p>Tesla</p>
        <nav className={style.headerNav}>
            <button className={style.navBtn}>Menu</button>
        </nav>
    </header>
  );
};