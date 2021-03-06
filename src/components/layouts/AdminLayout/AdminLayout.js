import React, { Fragment } from 'react';
import MainNavigation from '../../MainNavigation/MainNavigation';
import Row from '../../grid-system/Col/Col';
import Col from '../../grid-system/Row/Row';
import './admin-layout.scss';

const AdminLayout = props => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <aside className="admin-layout__main-navigation">
                        <MainNavigation {...props} />
                    </aside>
                </Col>
                <Col>
                    <section className="admin-layout__page-body">
                        {props.children}
                    </section>
                </Col>
            </Row>
        </Fragment>
    );
};

export default AdminLayout;
