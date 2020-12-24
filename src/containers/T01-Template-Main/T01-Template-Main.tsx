import React, { Component } from 'react';

import Header from '../../components/H01-Header/H01-Header';
import Splash from '../organisms/U01-Splash-Background/U01-Splash-Background';

interface PropTypes {
    children: JSX.Element,
    navigation: [{ label: string, href: string }],
    background: {
        media: string,
        type: 'image' | 'video',
    },
}

class T01TemplateMain extends Component<PropTypes, {}> {
    render() {
        const {
            children,
            navigation,
            background: {
                media,
                type,
            },
        } = this.props;

        return (
            <>
                <Header title="Dominick Norwood Apps" navigation={ navigation } />
                <main className="template__main">
                    { children }
                </main>
                <Splash media={ media } type={ type } />
            </>
        );
    }
}

export default T01TemplateMain;