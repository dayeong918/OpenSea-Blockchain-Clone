import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

//injecting Metamask
/**
 * The chain ID 4 represents the Rinkeby network
 * The `injected` connector is a web3 connection method used by Metamask
 */
const supportedChainId = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds = {supportedChainId}
      connectors = {connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
} 

export default MyApp
