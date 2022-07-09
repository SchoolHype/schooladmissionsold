import Layout from '../Components/Layout'
import '../styles/globals.css'
import { UserAuthContextProvider } from '../context/userAuthContext'
import { useRouter } from 'next/router'
import { ProtectedRoutes } from '../Components/ProtectedRoutes'

const noAuthRequired = ['/', '/login/parents', '/registration/parents', 'registration/schools', '/parental-guidance']

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return <UserAuthContextProvider>
  <Layout>
  {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoutes>
          <Component {...pageProps} />
        </ProtectedRoutes>
      )}
  </Layout>
  </UserAuthContextProvider>

}

export default MyApp
