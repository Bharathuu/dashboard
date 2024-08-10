import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">

                <div>
                    <h2>Bare Kaab</h2>
                    <i className="bi bi-person-circle icon-large"></i>
                    
                </div>
                
                <div>
                    <nav className='nav-bar'>
                        <form>
                        <i class="bi bi-search"></i>
                            <input type="search" placeholder='Search here' className='search-icon' aria-label="search"/>
                            
                        </form>
                    </nav>
                </div>
                <div className="user-info">
                    
                    <i className="bi bi-chat"></i>
                    <i className="bi bi-bell"></i>
                    <i className="bi bi-upc-scan"></i>
                    <span>Super Admin</span>
                    <i className="bi bi-person"></i>
                    <p>Admin@test.com</p>
                    
                </div>
            </div>
        </header>
    );
};

export default Header;