import '@/styles/reset.css' // jsconfig.json icine bak //@ isareti bu n root level icindeki seyleri arar.
import '@/styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
