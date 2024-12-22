import QuestionsAnswers from './questions-answers';

const Faq = ({ title, faq, description }) => {
  console.log(faq, 'faqfaqfaqfaq');
  return (
    <section className="py-8 md:py-12">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full 2xl:w-1/3 p-4 text-center md:text-left">
            {title && (
              <h5 className="font-heading font-heading text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta mb-6">
                {title}
              </h5>
            )}
            {description && (
              <p className="text-lg font-jakarta max-w-xs">{description}</p>
            )}
          </div>
          <div className="w-full 2xl:w-2/3 p-4">
            <QuestionsAnswers items={faq} />
          </div>
        </div>
      </div>
    </section>
  );
};

Faq.defaultProps = {};

export default Faq;
