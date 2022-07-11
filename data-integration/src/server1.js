//  curl "localhost:3000/products?name=laptop"
import { createServer } from 'node:http'
import {  parse } from 'node:url'
import { randomUUID } from 'node:crypto'

const PORT = 3000
async function handler(request, response) {
  if(
    request.method === 'GET' && 
    request.url.includes('products')
  )
  {
    const { query: { name } }  = parse(request.url, true)
    const item = {
      product: name,
      id: randomUUID()
    }

    return response.end(JSON.stringify(item))
  }


  return response.end(`hey!`)
}

createServer(handler)
.listen(PORT)
.on('listening', () => {
  console.log(`products API is running at ${PORT}`)
})