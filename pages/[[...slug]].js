import delve from 'dlv';
import ErrorPage from 'next/error';
import Layout from '../components/layout';
import dynamic from 'next/dynamic';
import { Plus_Jakarta_Sans } from 'next/font/google';
const BlockManager = dynamic(
  () => import('../components/shared/BlockManager'),
  { ssr: false }
);
import { getData, handleRedirection } from '../utils';
import { getLocalizedParams } from '../utils/localize';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

const Universals = ({ global, pageData, preview }) => {
  if (pageData === null) {
    return (
      <div className={jakarta.variable}>
        <ErrorPage statusCode={404} />
      </div>
    );
  }

  const blocks = delve(pageData, 'attributes.blocks');
  return (
    <div className={jakarta.variable}>
      <Layout
        global={global}
        pageData={pageData}
        type="pages"
        preview={preview}
      >
        {blocks && (
          <BlockManager
            blocks={blocks}
            type="collectionType"
            contentType="page"
            pageData={pageData}
          />
        )}
      </Layout>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query);

  try {
    const data = getData(
      slug,
      locale,
      'page',
      'collectionType',
      context.preview
    );
    const res = await fetch(delve(data, 'data'));
    const json = await res.json();

    if (!json.data.length) {
      return handleRedirection(context.preview, null);
    }

    return {
      props: { pageData: json.data[0], preview: context.preview || null },
    };
  } catch (error) {
    return {
      props: { pageData: null },
    };
  }
}

export default Universals;
