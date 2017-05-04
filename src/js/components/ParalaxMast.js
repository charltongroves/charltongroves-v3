import React from 'react';
import First from '../../img/first.png';
import Second from '../../img/second.png';
import Third from '../../img/third.png';
import Fourth from '../../img/fourth.png';
import Fifth from '../../img/fifth.png';
import Sixth from '../../img/sixth.png';
import About from './About.js'
export default() =>
    <div className="parallax">
        <div className="easeIn parallax__layer parallax__layer__1">
            <img alt="" src={Sixth}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__2">
            <div className="hero-text-cont">
                <h1>hello,</h1>
                <h2>I'm charlie.</h2>
                <h3>I write software and make it look cool.</h3>
                <h4>scroll down to read more</h4>
                </div>
            <img alt="" src={Fifth}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__3">
            <img alt="" src={Fourth}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__4">
            <img alt="" src={Third}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__5">
            <img alt="" src={Second}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__6">
            <img alt="" src={First}/>
        </div>
        <div className="parallax__cover">
            <About />
        </div>
    </div>