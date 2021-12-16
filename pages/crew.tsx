import React from 'react'
import { Layout } from '../components/layout/Layout';   

import ImageMobile from '/public/assets/crew/background-crew-mobile.jpg' 
import ImageDesktop from '/public/assets/crew/background-crew-desktop.jpg' 
import ImageTablet from '/public/assets/crew/background-crew-tablet.jpg' 
import { fetchAPI } from '../lib/api';
import { PageHeader } from '../components/shared/PageHeader';

export const Crew = ({ crew }: { crew: TCrew[] }) => {
	const bgImageList: TBgImageList = {
		mobile: ImageMobile.src,
		tablet: ImageTablet.src,
		desktop: ImageDesktop.src,
	}

	console.log(crew); 

	return (
		<Layout title="Crew" bgImageList={bgImageList}>   
			<PageHeader number="2" text="Meet your crew"/> 

		</Layout>
	)
}


export async function getServerSideProps() {
	const crew: TCrew[] = await fetchAPI('crew');  
	return {
	  props: {
		crew,
	  },
	}
  }

export default Crew;