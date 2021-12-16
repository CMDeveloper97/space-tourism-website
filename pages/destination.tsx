import React, { useState } from "react";
import { Layout, PageHeader } from "../components";
import { fetchAPI } from "../lib/api";
import Image from "next/image";

import ImageMobile from "/public/assets/destination/background-destination-mobile.jpg";
import ImageDesktop from "/public/assets/destination/background-destination-desktop.jpg";
import ImageTablet from "/public/assets/destination/background-destination-tablet.jpg";

const Destination = ({ destinations }: { destinations: TDestinations[] }) => {
	const bgImageList: TBgImageList = {
		mobile: ImageMobile.src,
		tablet: ImageTablet.src,
		desktop: ImageDesktop.src,
	};

	const [menuOption, setMenuOption] = useState(0);

	return (
		<Layout title="Destination" bgImageList={bgImageList}> 
			<div className="destination-container">
				<div className="destination-container__image">
					<div className="image-container">
						<Image
							src={destinations[menuOption].images.png.substring(1)}
							alt="Landscape picture"
							className="image"
							layout="fill"
						/>
					</div>
				</div>

				<div className="destination-container__content">
					<div className="content__destinations">
						{destinations.map((destination, idx) => (
							<p
								onClick={() => setMenuOption(idx)}
								key={idx}
								className={`NavText ${menuOption === idx && "NavText--active "
									} `}
							>
								{destination.name}
							</p>
						))}
					</div>

					<h2>{destinations[menuOption].name}</h2>
					<p className="description">{destinations[menuOption].description}</p>

					<div className="content__distances">
						<div className="distances__distance">
							<p className="subH2">AVG. DISTANCE</p>
							<p className="subH1">{destinations[menuOption].distance}</p>
						</div>
						<div className="distances__travel-time">
							<p className="subH2">EST. TRAVEL TIME</p>
							<p className="subH1">{destinations[menuOption].travel}</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export async function getServerSideProps() {
	const destinations: TDestinations[] = await fetchAPI("destinations");

	return {
		props: {
			destinations,
		},
	};
}

export default Destination;
