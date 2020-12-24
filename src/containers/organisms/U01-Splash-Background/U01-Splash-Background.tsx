import React from 'react';

interface PropType {
    media: string,
    type: 'image' | 'video',
}

const U01SplashBackground = (props:PropType) => {

    const style = { backgroundImage: `url('${props.media}')` }

    return (
        <section className="background" style={style} data-type={props.type} />
    );

};

export default U01SplashBackground;