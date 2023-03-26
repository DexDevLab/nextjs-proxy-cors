import "styles/globals.css";

/**
 * Componente estrutural padrão para carregar e
 * inicializar componentes renderizados.
 *
 * @param {*} Component Componente React.
 *
 * @param {Props} pageProps Props de Componente React.
 *
 * @returns Componente renderizado como página.
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
