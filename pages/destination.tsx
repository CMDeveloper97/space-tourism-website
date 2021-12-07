import React from 'react'
import { Layout } from '../components';
import { Seo } from '../components/seo'; 

import ImageMobile from '/public/assets/destination/background-destination-mobile.jpg' 
import ImageDesktop from '/public/assets/destination/background-destination-desktop.jpg' 
import ImageTablet from '/public/assets/destination/background-destination-tablet.jpg' 
import { fetchAPI } from '../lib/api';

const Destination = ({ destinations }: { destinations: TDestinations[] }) => {
	const bgImageList: TBgImageList = {
		mobile: ImageMobile.src,
		tablet: ImageTablet.src,
		desktop: ImageDesktop.src,
	}
 
	console.log(destinations); 

	return (
		<Layout title="Destination" bgImageList={bgImageList}> 
			<Seo title="Destination"/>
			<p>Destionation</p>
		</Layout>
	)
}

export async function getServerSideProps() {
	const destinations: TDestinations[] = await fetchAPI('destinations'); 

	return {
	  props: {
		destinations,
	  },
	}
  }

export default Destination; 