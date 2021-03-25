import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const HomeTitle = styled.h1`
  background: linear-gradient(to bottom right, yellow, black);
  color: white;
`
export const HomeSubTitle = styled.h2`
  color: white;
  background: green;
  font-size: 23px;
`

export const MyButton = styled(Button)`
  border-radius: 50px !important;
  color: red !important;
`
export default HomeTitle;