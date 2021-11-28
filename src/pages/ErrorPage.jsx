import React from 'react';
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
 const { t } = useTranslation();

 return (
    <div className="error">
      <p>
        {t('errors.networkError')}
        <br />
        <span>{t('errors.checkConnection')}</span>
      </p>
    </div>
  );
};
  

export default ErrorPage;