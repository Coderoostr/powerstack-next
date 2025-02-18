import '~/ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalLayout } from '~/ui/layouts/global-layout.components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  )
}

export default MyApp
