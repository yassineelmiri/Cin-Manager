import React from 'react';
import '../../assets/css/admin.css';
import Sidebar from './SidebarAdmin';

const AdminDashbord = () => {
    return (
        <div>
            <Sidebar/>
            {/* Main Content */}
            <main className="main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="main__title">
                                <h2>Dashboard</h2>
                                <a href="/add-item" className="main__title-link">
                                    Add Item
                                </a>
                            </div>
                        </div>

                        {/* Example Stats */}
                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className="stats">
                                <span>Unique views this month</span>
                                <p>5,678</p>
                            </div>
                            <div className="stats">
                                <span>Unique views this month</span>
                                <p>5,678</p>
                            </div>
                            <div className="stats">
                                <span>Unique views this month</span>
                                <p>5,678</p>
                            </div>
                            <div className="stats">
                                <span>Unique views this month</span>
                                <p>5,678</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default AdminDashbord;