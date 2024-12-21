import 'dotenv/config'
import axios, { AxiosInstance } from 'axios'
import * as https from 'https'

export class Etherscan {
  private axiosInstance: AxiosInstance
  private agent = new https.Agent()
  private url: string = 'https://api.etherscan.io/api'
  private apiKey: string = process.env.ETHERSCAN_API_KEY

  constructor() {
    this.axiosInstance = axios.create({
      withCredentials: true
    })
  }

  async eth_getBlockByNumber(tag: string): Promise<any> {
    try {
      const response = await this.axiosInstance.get(
        `${this.url}?module=proxy&action=eth_getBlockByNumber&tag=${tag}&boolean=true&apikey=${this.apiKey}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          httpsAgent: this.agent
        }
      )

      if (response.data.status === 0) {
        return response.data.result
      }

      return response.data
    } catch (err) {
      return err
    }
  }

  async eth_blockNumber(): Promise<any> {
    try {
      const response = await this.axiosInstance.get(
        `${this.url}?module=proxy&action=eth_blockNumber&apikey=${this.apiKey}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          httpsAgent: this.agent
        }
      )

      return response.data
    } catch (err) {
      return err
    }
  }
}
