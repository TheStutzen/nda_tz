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

    app.get(
      '/api/mostChangedBalance',
      async (req: any, res: any) =>
        await this.addressController.mostChangedBalance(req, res)
    )

  }
}
