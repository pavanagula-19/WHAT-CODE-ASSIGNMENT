import React from 'react';
// import vectorLine from "../assests/Vector-1.svg";
import vector from "../assests/Vector.svg";
import humanShirt from "../assests/human-shirt.svg"
import humanLegs from "../assests/human-legs.svg"
import humanHead from "../assests/human-head.svg"
import humanHandOne from "../assests/human-hand-one.svg"
import windowGlass from "../assests/window-glass.svg"
import humanHandTwo from "../assests/human-hand-two.svg"
import humanShoes from "../assests/human-shoe.svg"
import humanLegSkin from "../assests/human-legs-skin.svg"
import shirtLogo from "../assests/shirt-logo.png"
import sideDesignRight from "../assests/side-design-right.svg"
import sideDesignRightLiner from "../assests/side-design-right-line.svg"
import sideDesignLeftLiner from "../assests/side-design-left-line.svg"
const HomeLogo = () => {
  return <>
    <div className='logo-card'>
      <div className='side-design-left'>
        <img src={vector} alt='img' />
      </div>

      <div className='door-icon'>
        <div className='door-inside'>
          <div className='window'>
            <div className='window-handle'>

            </div>
          </div>
        </div>
      </div>
      <div className='human-icon'>
        <div className='human-icon-body'>
          <img src={humanShirt} alt='shirt' />
        </div>
        <div className='human-icon-legs'>
          <img src={humanLegs} alt='legs' />
        </div>
      </div>
      <div className='human-head'>
        <div className='human-face'>
        </div>
        <div className='human-hair'>
          <img src={humanHead} alt='head' />
        </div>
      </div>
      <div className='human-hand-one'>
        <img src={humanHandOne} alt='hand' />
      </div>
      <div className='human-hand-two'>
        <img src={humanHandTwo} alt='hand' />
      </div>
      <div className='human-leg-pair-left'>
        <img src={humanShoes} alt='shoe' />
      </div>
      <div className='human-leg-pair-right'>
        <img src={humanShoes} alt='shoe' />
      </div>
      <div className='human-legs-left'>
        <img src={humanLegSkin} alt='legs' />
      </div>
      <div className='human-legs-right'>
        <img src={humanLegSkin} alt='legs' />
      </div>
      <div className='window-glass'>
        <div className='glass-line-vertical'>
          <div className='glass-line-vertical-one'>
            <img src={windowGlass} alt='glass' />
          </div>
          <div className='glass-line-vertical-two'>
            <img src={windowGlass} alt='glass' />
          </div>
        </div>
      </div>
      <div className='shirt-logo'>
        <img src={shirtLogo} alt='shirt-logo' />
      </div>
      <div className='side-design-right'>
        <img src={sideDesignRight} alt='img' />
      </div>
      <div className='side-design-right-line'>
        <img src={sideDesignRightLiner} alt='img' />
      </div>
      <div className='side-design-left-line'>
        <img src={sideDesignLeftLiner} alt='img' />
      </div>
      <div className='glass-line-horizontal-one'>

      </div>
      <div className='glass-line-horizontal-two'>

      </div>
    </div>
  </>
}

export default HomeLogo;
