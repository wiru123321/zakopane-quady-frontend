import delve from 'dlv';
import CustomButton from '../../shared/CustomButton';

const About = ({ header, button }) => {
  const title = delve(header, 'title');
  const label = delve(header, 'label');

  return (
    <section className="relative py-6 lg:py-12 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {title && (
            <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta text-black mb-8">
              {title}
            </h3>
          )}
          {label && (
            <p className="text-lg font-jakarta text-black font-medium mb-10">
              {label}
            </p>
          )}
          <CustomButton
            theme="primary"
            href={delve(button, 'href')}
            target={delve(button, 'target')}
            label={delve(button, 'label')}
            isExternal={delve(button, 'isExternal')}
            className="inline-block py-0 px-0 lg:inline-block"
            textClassName="py-4 px-10 inline-block w-full"
          />
        </div>
      </div>
    </section>
  );
};

About.defaultProps = {};

export default About;
