import React from 'react';
import {
  ButtonList,
  ButtonListItem,
  StatisticBtn,
} from '../FeedbackOptions/FeedbackOptions.styled';

import PropTypes from 'prop-types';

function first(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ButtonList>
        {options.map((option, index) => {
          return (
            <ButtonListItem key={index}>
              <StatisticBtn
                type="button"
                onClick={() => onLeaveFeedback(option)}
              >
                {first(option)}
              </StatisticBtn>
            </ButtonListItem>
          );
        })}
      </ButtonList>
    </>
  );
};

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
