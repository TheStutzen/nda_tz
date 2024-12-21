import * as swaggerJSDoc from 'swagger-jsdoc'

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NDA-TZ API',
      version: '0.0.1',
      description: 'API Documentation for NDA service'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./src/routes/index.ts']
})

export default swaggerSpec
