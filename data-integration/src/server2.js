//  curl -X POST "localhost:4000/cart" --data '{"id": "123"}'

import { createServer } from 'node:http'
import { once } from 'node:events'

const PORT = 4000
async function handler(request, response) {
  if(
    request.method === 'POST' && 
    request.url.includes('cart')
  )
  {
    const data = await once(request, 'data')
    const item = JSON.parse(data)
    console.log('received', item)

    return response.end(`process succeeded for ${item.id}`)
  }
  return response.end(`hey!`)
}

createServer(handler)
.listen(PORT)
.on('listening', () => {
  console.log(`cart API is running at ${PORT}`)
})