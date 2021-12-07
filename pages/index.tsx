import type { NextPage } from "next"; 
import {Layout } from "../components"; 

import ImageMobile from '/public/assets/home/background-home-mobile.jpg' 
import ImageDesktop from '/public/assets/home/background-home-desktop.jpg' 
import ImageTablet from '/public/assets/home/background-home-tablet.jpg' 

const Home: NextPage = () => {
  const bgImageList: TBgImageList = {
    mobile: ImageMobile.src,
    tablet: ImageTablet.src,
    desktop: ImageDesktop.src,
  }

  console.log(bgImageList);
  

  return (
    <Layout title="Home" bgImageList={bgImageList}> 
      <div className="home-container">
        <div className="home-container__text">
          <h5>So, you want to travel to</h5>
          <h1>space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-container__button-container"> 
          <div className="button-container__button"><h4>Explore</h4></div>
        </div>

      </div>
    </Layout>
  );
};

export default Home;
