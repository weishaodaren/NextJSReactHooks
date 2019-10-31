// import React from 'react';
import '../static/style/components/header.css'
import {Row, Col, Menu, Icon} from 'antd'

export const Header = () =>{
    return(
        <div className='header'>
            <Row type='flex' justify='center'>
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className='header-logo'>WEISHAODAREN</span>
                    <span className='header-txt'>Just Shut MotherFucker Up!!</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode='horizontal'>
                        <Menu.Item key='home'>
                            <Icon type='home'/>Home
                        </Menu.Item>
                        <Menu.Item key='video'>
                            <Icon type='video'/>Video
                        </Menu.Item>
                        <Menu.Item key='life'>
                            <Icon type='life'/>Life
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}