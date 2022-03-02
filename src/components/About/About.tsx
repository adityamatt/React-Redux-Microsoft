import React from 'react'

import { TOKEN_LIST_URL } from '@jup-ag/core'
import { useJupiter } from '@jup-ag/react-hook'
import { PublicKey, Connection } from '@solana/web3.js'
import { Stack, Text } from '@fluentui/react'

interface IHome {
  loggedIn: boolean
}

const ENV = 'mainnet-beta'
export interface Token {
  chainId: number // 101,
  address: string // 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  symbol: string // 'USDC',
  name: string // 'Wrapped USDC',
  decimals: number // 6,
  logoURI: string // 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW/logo.png',
  tags: string[] // [ 'stablecoin' ]
}

const connection = new Connection('https://solana-api.projectserum.com')

export const About = (props: IHome) => {
  const [tokens, setTokens] = React.useState<Token[]>([])
  const TokenAmount = 1 * 10 ** 6
  const [inputMint] = React.useState<PublicKey>(new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v')) //USDT
  const [outputMint] = React.useState<PublicKey>(new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB')) //USDC
  const jupiter = useJupiter({
    amount: TokenAmount, // raw input amount of tokens
    inputMint,
    outputMint,
    slippage: 1, // 1% slippage
    debounceTime: 250, // debounce ms time before refresh
  })

  React.useEffect(() => {
    // Fetch token list from Jupiter API
    fetch(TOKEN_LIST_URL[ENV])
      .then((response) => response.json())
      .then((result) => setTokens(result))
  }, [])

  console.log(jupiter)

  return (
    <Stack>
      <Stack.Item styles={{ root: { height: '60vh' } }} verticalFill>
        <div>Tokens Amount: {TokenAmount}</div>
        <div>Number of tokens: {tokens.length}</div>
        <div>Number of input tokens {jupiter.allTokenMints.length}</div>
        <div>Possible number of routes: {jupiter.routes?.length}</div>
        <div>Best quote: {jupiter.routes ? jupiter.routes[0].outAmount : ''}</div>
      </Stack.Item>
      <Stack.Item>
        {jupiter.lastRefreshTimestamp && (
          <Text>Last Refreshed at {new Date(jupiter.lastRefreshTimestamp).toString()}</Text>
        )}
      </Stack.Item>
    </Stack>
  )
}

export default About
