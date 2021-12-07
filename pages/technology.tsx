import React from 'react'
import { Layout } from '../components/layout/Layout'; 
import { fetchAPI } from '../lib/api';

import ImageMobile from '/public/assets/technology/background-technology-mobile.jpg' 
import ImageDesktop from '/public/assets/technology/background-technology-desktop.jpg' 
import ImageTablet from '/public/assets/technology/background-technology-tablet.jpg' 

export const Technology = ({ technology }: { technology: TTechnology[] }) => {
	const bgImageList: TBgImageList = {
		mobile: ImageMobile.src,
		tablet: ImageTablet.src,
		desktop: ImageDesktop.src,
	}

	console.log(technology);
	

	return (
		<Layout title="Technology" bgImageList={bgImageList}>  
			<p>Technology</p>
		</Layout>
	)
}
  
export async function getServerSideProps() {
	const technology: TTechnology[] = await fetchAPI('technologies');  
	return {
	  props: {
		technology,
	  },
	}
  }


export default Technology;