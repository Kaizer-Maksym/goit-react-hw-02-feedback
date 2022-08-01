import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackMessage } from './Notification.styled';

export const Notification = ({ message }) => {
  return <FeedbackMessage>{message}</FeedbackMessage>;
};

Notification.prototype = {
  message: PropTypes.string,
};
