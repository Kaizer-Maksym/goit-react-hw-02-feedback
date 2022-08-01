import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
`;

export const ButtonListItem = styled.li`
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const StatisticBtn = styled.button`
  width: 80px;
  height: 30px;
  cursor: pointer;
  border: solid 2px #f6ecec;
  border-radius: 4px;

  background-color: #ffffff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  text-align: center;
  font-weight: 600;
  font-size: 14px;
`;
