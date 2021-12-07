import allData from './data'

class Database {
	constructor() { }
	async getAllDestinations(): Promise<TDestinations[]> {
		const asArray = Object.values(allData.destinations)
		return asArray
	}
	async getAllCrew(): Promise<TCrew[]> {
		const asArray = Object.values(allData.crew)
		return asArray
	}
	async getAllTechnologies(): Promise<TTechnology[]> {
		const asArray = Object.values(allData.technologies)
		return asArray
	}

}

export default Database