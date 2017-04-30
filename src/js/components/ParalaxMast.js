import React from 'react';
import First from '../../img/first.png';
import Second from '../../img/second.png';
import Third from '../../img/third.png';
import Fourth from '../../img/fourth.png';
import Fifth from '../../img/fifth.png';
import Sixth from '../../img/sixth.png';
export default() =>
    <div className="parallax">
        <div className="easeIn parallax__layer parallax__layer__1">
            <img src={Sixth}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__2">
            <img src={Fifth}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__3">
            <img src={Fourth}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__4">
            <img src={Third}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__5">
            <img src={Second}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__6">
            <img src={First}/>
        </div>
        <div className="parallax__cover">
        </div>
    </div>