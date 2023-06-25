import { Faction } from '../lists/model'

export async function downloadFile(fileId: string): Promise<Faction> {
  const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${process.env.GOOGLE_DRIVE_API_KEY}`

  const response = await fetch(url)

  if (!response.ok || !response.body) {
    throw new Error(`File download failed with status code ${response.status}`)
  }

  const reader = response.body.getReader()

  const stream = new ReadableStream({
    start(controller) {
      function push() {
        reader.read().then(({ done, value }) => {
          if (done) {
            controller.close()
            return
          }

          controller.enqueue(value)
          push()
        })
      }

      push()
    },
  })

  return await new Response(stream, {
    headers: { 'Content-Type': 'json' },
  }).json()
}
