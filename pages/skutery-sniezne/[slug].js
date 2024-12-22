import delve from 'dlv';
import Layout from '../../components/layout';
import BlockManager from '../../components/shared/BlockManager';
import { getStrapiURL, handleRedirection } from '../../utils';
import { getLocalizedParams } from '../../utils/localize';

const Skuter = ({ global, pageData, preview }) => {
  const blocks = delve(pageData, 'attributes.blocks');
  return (
    <>
      <Layout global={global} pageData={pageData} preview={preview}>
        {blocks && (
          <BlockManager
            blocks={blocks}
            type="collectionType"
            pageData={pageData}
          />
        )}
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { locale } = getLocalizedParams(context.query);
  const preview = context.preview
    ? '&publicationState=preview&published_at_null=true'
    : '';
  const res = await fetch(
    getStrapiURL(
      `/skuters?filters[slug]=${context.params.slug}&locale=${locale}${preview}&populate[blocks][populate]=members.picture,header,buttons.link,items.button,items.header,items.image,items.tag,faq,blackType,whiteType,notIncludedItem.header,featuresCheck,additionalHeader,button,cards,pricingCards.perks,articles,restaurants,author.picture,images,cards.image,cards.link,image&populate=localizations&populate[seo][populate]=metaSocial.image`
    )
  );
  const json = await res.json();

  if (!json.data.length) {
    return handleRedirection(context.params.slug, context.preview, 'quads');
  }

  return {
    props: {
      pageData: json.data[0],
      preview: context.preview || null,
    },
  };
}

export default Skuter;
