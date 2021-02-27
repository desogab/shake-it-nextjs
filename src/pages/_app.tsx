import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
//_app apesar de ser reaproveitado entre as páginas
// ele ainda assim exige um processamento para recalcular
// as formas de acordo com cada página.
function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp;