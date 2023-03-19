import { NextApiRequest } from 'next'
import { NextApiResponse } from 'next/types'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_D1BhqWC6mjyp6WqIAFDaiyIiIlts22mbs7QzgfLhUGc',
})

const databaseId = 'c38dd781f0a748fab5246609619e00b3'

async function getProduct(id: number) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'price',
          direction: 'ascending',
        },
      ],
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

interface IHandle {
  item?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHandle>
) {
  const { id } = req.query

  if (!id) return res.status(400).json({ message: 'no id' })
  try {
    const response = await getProduct(Number(id))
    console.log(123, response?.results)
    res.status(200).json({ item: response?.results, message: `success` })
  } catch (error) {
    return res.status(400).json({ message: 'failed' })
  }
}
