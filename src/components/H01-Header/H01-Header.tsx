import React, { Component } from 'react';

interface PropTypes {
    title: string,
    navigation: [{ label: string, href: string }]
}

class H01Header extends Component<PropTypes, {}> {

    render() {
        const { title, navigation } = this.props;

        return (
            <div className="H01-Header">
                <div className="H01-Header__wrapper">
                    <a href="/">{ title }</a>
                    <nav className="H01-Header__navigation">
                        {
                            navigation.map((item, index) => <a href={item.href} key={`navItem-${index}`}>{ item.label }</a>)
                        }
                    </nav>
                </div>
            </div>
        );
    }
}

export default H01Header;