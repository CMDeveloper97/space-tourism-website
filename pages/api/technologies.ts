import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../database/db'

const getTechnologies = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const db = new DB()
		const result = await db.getAllTechnologies();
		res.status(200).json(result)

	} catch (error) {
		console.error(error)
		res.status(404).end()
	}
}

export default getTechnologies;