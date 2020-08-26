// import App from 'next/app'

// Global Styles
import '../styles/Global.css'

// Components
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout>
          <Component {...pageProps} />
        </Layout>
}

export default MyApp