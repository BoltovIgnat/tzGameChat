import { Layout, Select } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import './header.css';

function IbcHeader() {
    const { Option } = Select;

    return (
        <Layout>
            <Header>
                <div className="back">
                    <span className="menu-item-active">ОБЩИЙ</span>
                    <span className="menu-item">КЛАН</span>
                    <span className="menu-item">ДРУЗЬЯ</span>
                </div>
                <Select defaultValue="RU" bordered={false} className="">
                    <Option value="RU">RU</Option>
                    <Option value="EN">EN</Option>
                    <Option value="ZHO">ZHO</Option>
                </Select>
                <div className='icon'>
                    <img src='/img/icon-1.png' alt='Icon-1' />
                    <img src='.././img/icon-2.png' alt='Icon-2' className='icon-2' />
                </div>
            </Header>
        </Layout>
    )
}
export default IbcHeader;