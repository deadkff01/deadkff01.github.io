import styled from '@emotion/styled/macro'
import { tronBlue } from '../../consts'

const TitleName = styled.h1`
  font-size: 146px;
  font-family: 'tr2ntr2n';
  font-weight: normal;
  margin: 0px;
  text-shadow: 0px 0px 5px ${tronBlue};

  @media (max-width: 850px) {
    font-size: 56px;
  }
`
export default TitleName
