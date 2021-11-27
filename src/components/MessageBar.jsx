import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const mapStateToProps = ({ booksCount }) => ({ booksCount });

const MessageBar = ({ booksCount }) => {
  const { t } = useTranslation();
  return (
    booksCount !== null && <p className="message-bar">{t('messages.booksFound.found', { count: booksCount })}</p>
  );
};
  
export default connect(mapStateToProps, null)(MessageBar);
