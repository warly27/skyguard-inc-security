import React from 'react';
import logo from '../../assets/images/skyguard-logo.png'
import { BackTop } from 'antd';
import { SafetyCertificateTwoTone, MobileTwoTone, MailTwoTone, ScheduleTwoTone, ShopTwoTone, PhoneTwoTone } from '@ant-design/icons';

const AppFooter = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="skyguard-head-logo"><img src={logo} alt='logo' />&nbsp;&nbsp;</i>
          <a href="/">Skyguard Security Agency Inc.</a>
          <p><ShopTwoTone /> &nbsp;UNIT 11 4/F EXANNE BLDG., ONE ASIA BUSINESS CENTER SAN ANTONIO, BIÑAN CITY, 4024 <br />
          <PhoneTwoTone /> &nbsp; 049-501-4357 <br />
            <MobileTwoTone /> &nbsp;0968-267-9278/0917-575-0445 <br />
            <MailTwoTone /> &nbsp;skyguard.sai@gmail.com <br />
            <ScheduleTwoTone /> &nbsp;Monday to Friday - 9AM to 5PM</p>
            <p><SafetyCertificateTwoTone/>&nbsp; LTO #: PSA-T-04-02191-2022<br />
            <SafetyCertificateTwoTone/>&nbsp;BPLO Permit No. 2022-03235<br />
            <SafetyCertificateTwoTone/>&nbsp;ROIVA-LPO-DO174-0322-024-N<br />
            <SafetyCertificateTwoTone/>&nbsp;SEC#2021100029467-02<br />
            <SafetyCertificateTwoTone/>&nbsp;PADPAO##2022-0224-11<br />
            </p>
        </div>
        <div className="copyright blue">Copyright &copy; 2022 Skyguard Security Inc.</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;