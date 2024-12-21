import { Etherscan } from '../../libs/etherscan'

export class AddressService {
  etherscan = new Etherscan()

  async mostChangedBalance(req: any): Promise<any> {
    const lastBlock = await this.etherscan.eth_blockNumber()
    const block = await this.etherscan.eth_getBlockByNumber(lastBlock.result)

    if (!block.result || !block.result.transactions) {
      throw new Error(req.__('ADDRESS.mostChangedBalance.notFound'))
    }

    const transactions = block.result.transactions

    const balanceChanges: Record<string, bigint> = {}

    for (const tx of transactions) {
      const from = tx.from.toLowerCase()
      const to = tx.to?.toLowerCase() || null
      const value = BigInt(tx.value)

      balanceChanges[from] = (balanceChanges[from] || BigInt(0)) - value

      if (to) {
        balanceChanges[to] = (balanceChanges[to] || BigInt(0)) + value
      }
    }

    let mostVolatileAddress = ''
    let maxChange = BigInt(0)

    for (const [address, change] of Object.entries(balanceChanges)) {
      const absoluteChange = change < BigInt(0) ? -change : change
      if (absoluteChange > maxChange) {
        maxChange = absoluteChange
        mostVolatileAddress = address
      }
    }

    if (process.env.DEBUG === 'true') {
      console.info('Баланс изменений:', balanceChanges)
      console.info(
        'Самый изменившийся адрес:',
        mostVolatileAddress,
        'Изменение:',
        maxChange.toString()
      )
    }

    return {
      message: req.__('ADDRESS.mostChangedBalance.response', {
        address: mostVolatileAddress,
        change: maxChange.toString()
      })
    }
  }
}
