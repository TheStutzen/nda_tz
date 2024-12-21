import { AddressController } from '../api/address/address.controller'
import * as swaggerUi from 'swagger-ui-express'
import swaggerSpec from '../libs/swagger'

export class Routes {
  addressController = new AddressController()

  constructor(app: any) {
    this.registerRoutes(app)
  }

  registerRoutes(app: any) {
    // BLOCKCHAIN

    /**
     * @swagger
     * tags:
     *   - name: ADDRESS
     *     description: Address related endpoints
     * /api/mostChangedBalance:
     *   get:
     *     tags: [ADDRESS]
     *     summary: Request to the API to obtain the address whose balance has changed more than others (in absolute value) over the last 100 blocks. Based on the last block number in the network.
     *     responses:
     *       200:
     *        description: The address
     *       500:
     *        description: Internal server error
     */
    app.get(
      '/api/mostChangedBalance',
      async (req: any, res: any) =>
        await this.addressController.mostChangedBalance(req, res)
    )

    // SWAGGER
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  }
}
