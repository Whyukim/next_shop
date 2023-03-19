import { NextApiRequest } from 'next'
import { NextApiResponse } from 'next/types'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_D1BhqWC6mjyp6WqIAFDaiyIiIlts22mbs7QzgfLhUGc',
})

const databaseId = 'c38dd781f0a748fab5246609619e00b3'

async function addItem(name: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

interface IHandle {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHandle>
) {
  const { name } = req.query

  if (!name) return res.status(400).json({ message: 'no name' })

  try {
    await addItem(String(name))
    res.status(200).json({ message: `success ${name}` })
  } catch (error) {
    return res.status(400).json({ message: 'failed' })
  }
}
