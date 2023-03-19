import { NextApiRequest } from 'next'
import { NextApiResponse } from 'next/types'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_D1BhqWC6mjyp6WqIAFDaiyIiIlts22mbs7QzgfLhUGc',
})

const databaseId = 'c38dd781f0a748fab5246609619e00b3'

async function getDetail(pageId: string, propertyId: string) {
  try {
    const response = await notion.pages.properties.retrieve({
      page_id: pageId,
      property_id: propertyId,
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
  try {
    const { pageId, propertyId } = req.query
    const response = await getDetail(String(pageId), String(propertyId))
    res.status(200).json({ item: response, message: `success` })
  } catch (error) {
    return res.status(400).json({ message: 'failed' })
  }
}
