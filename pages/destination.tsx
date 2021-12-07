import React from 'react'
import { Layout } from '../components';
import { Seo } from '../components/seo';

import ImageMobile from '/public/assets/destination/background-destination-mobile.jpg' 
import ImageDesktop from '/public/assets/destination/background-destination-desktop.jpg' 
import ImageTablet from '/public/assets/destination/background-destination-tablet.jpg' 

const Destination = () => {
	const bgImageList: TBgImageList = {
		mobile: ImageMobile.src,
		tablet: ImageTablet.src,
		desktop: ImageDesktop.src,
	  }

	return (
		<Layout title="Destination" bgImageList={bgImageList}> 
			<Seo title="Destination"/>
			<p>Destionation</p>
		</Layout>
	)
}

export default Destination;