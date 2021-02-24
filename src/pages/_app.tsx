import '../styles/global.css';
//_app apesar de ser reaproveitado entre as páginas
// ele ainda assim exige um processamento para recalcular
// as formas de acordo com cada página.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp