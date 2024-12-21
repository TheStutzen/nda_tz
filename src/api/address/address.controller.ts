import { AddressService } from './address.service'

export class AddressController {
  addressService = new AddressService()

  async mostChangedBalance(req: any, res: any) {
    try {
      const result = await this.addressService.mostChangedBalance(req)

      res.status(200).json(result)
    } catch {
      res.status(500).json({ message: req.__('HTTP.500') })
    }
  }
}
