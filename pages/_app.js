import App from 'next/app';
import ErrorPage from 'next/error';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'tailwindcss/tailwind.css';
import { getStrapiURL } from '../utils';
import { getLocalizedParams } from '../utils/localize';
import { Plus_Jakarta_Sans } from 'next/font/google';

const queryClient = new QueryClient();

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  if (global === null) {
    return (
      <div className={jakarta.variable}>
        <ErrorPage statusCode={404} />
      </div>
    );
  }

  return (
    <div className={jakarta.variable}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { locale } = getLocalizedParams(appContext.ctx.query);

  const appProps = await App.getInitialProps(appContext);

  try {
    const res = await fetch(
      getStrapiURL(
        `/global?populate[navigation][populate][rightButton][populate]=*&populate[navigation][populate][leftButton][populate]=*&populate[navigation][populate][links][populate][deepLinks][populate]=*&populate[footer][populate][footerColumns][populate]=*&populate[footer][populate][socialNetworks][populate]=*&populate[footer][populate][logo][populate]=*&locale=${locale}`
      )
    );
    const globalData = await res.json();
    const globalDataAttributes = globalData.data.attributes;

    return { ...appProps, pageProps: { global: globalDataAttributes } };
  } catch (error) {
    return { ...appProps };
  }
};

export default MyApp;
