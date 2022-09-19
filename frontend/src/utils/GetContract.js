import Constants from '../Constants'
import Web3 from 'web3'
const VAHAN_CONTRACT_BUILD = require('../build/Vahan.json')
const NETWORK_ID = "5777"

export const web3 = new Web3(Constants.RPC_PROVIDER)

const GetContract = () => {
    const CONTRACT_ADDRESS = VAHAN_CONTRACT_BUILD.networks[NETWORK_ID].address

    const Vahan = new web3.eth.Contract(VAHAN_CONTRACT_BUILD.abi, CONTRACT_ADDRESS)
    return { success: true, data: { Vahan } }
}

export default GetContract