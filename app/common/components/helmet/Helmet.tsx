import { Helmet } from 'react-helmet-async';

interface MetaTitleProps {
  title?: string;
  description?: string;
}

export const MetaTitle = ({ title = '', description = '' }: MetaTitleProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | The best Apple devices` : undefined}
      defaultTitle="Apple Core"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
