import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';

class Layout extends Component {
    render() {
        return (
            <div id="main">
                {style}
                <Header header={this.props.header} title={this.props.title} />
                {this.props.children}
                <Footer footer="copyright YU-YAMA."/>
            </div>
        );
    }
}
export default Layout;