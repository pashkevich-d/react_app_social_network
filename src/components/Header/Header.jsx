import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className = {s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/c/cf/Лобос_УПНФМ_%28лого%29.png" />
        </header>
    )
}

export default Header;