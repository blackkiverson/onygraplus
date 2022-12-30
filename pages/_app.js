import * as dotenv from 'dotenv'
import '../styles/globals.css'

dotenv.config();

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
