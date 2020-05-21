import React from 'react';
import MainNavigation from '../../MainNavigation/MainNavigation';
import MainHeader from '../../MainHeader/MainHeader';
import Row from '../../grid-system/Col/Col';
import Col from '../../grid-system/Row/Row';
import './admin-layout.scss';

const AdminLayout = props => {
    return (
        <Row>
            <Col>
                <aside className="admin-layout__main-navigation">
                    <MainNavigation {...props} />
                </aside>
            </Col>
            <Col>
                <header className="admin-layout__main-header">
                    <MainHeader />
                </header>
                <section className="admin-layout__page-body">
                    {props.children}
                </section>
            </Col>
        </Row>
    );
};

export default AdminLayout;
