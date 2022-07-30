import React, { useState } from 'react';
import logo from '../../assets/images/skyguard-logo.png'
import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="skyguard-head-logo"><img src={logo} alt='logo' />&nbsp;&nbsp;</i>
          <a href="/">Skyguard Security Agency Inc.</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#main" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#gallery" title="Gallery" />
            <Link href="#service" title="Service" />
            <Link href="#career" title="Career" />
            {/* <Link href="#faq" title="FAQ" /> */}
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            onClick={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#main" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#gallery" title="Gallery" />
              <Link href="#service" title="Service" />
              <Link href="#career" title="Career" />
              <Link href="#faq" title="FAQ" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;