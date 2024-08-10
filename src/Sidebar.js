import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li>Government Overview <i class="bi bi-chevron-right"></i></li>
                <li> <i class="bi bi-person-circle"> </i>Institute Registry <i class="bi bi-chevron-right"></i></li>
                <li> <i class="bi bi-clipboard-data"> </i>Academics <i class="bi bi-chevron-right"></i></li>
                <li> <i class="bi bi-people"></i> Institute Inspection <i class="bi bi-chevron-right"></i></li>
                <li> <i class="bi bi-clipboard-data"></i> Raise a Ticket <i class="bi bi-chevron-right"></i></li>
                <li> <i class="bi bi-globe"></i>Communication <i class="bi bi-chevron-right"></i></li>
                <li><i class="bi bi-person-circle"></i> Profile <i class="bi bi-chevron-right"></i></li>
            </ul>
        </aside>
    );
};

export default Sidebar;