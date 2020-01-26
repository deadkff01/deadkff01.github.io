import styled from '@emotion/styled/macro'
import { tronBlue } from '../../consts'

export const ListContainer = styled.div`
  display: flex;
  @media (max-width: 478px) {
    display: block;
  }
`

export const List = styled.div`
  width: 50%;
  font-size: 24px;
  font-family: 'tr2ntr2n';
  font-weight: normal;
  margin: 0 0 20px 0;
  text-shadow: 0px 0px 2px ${tronBlue};
  text-align: center;
  padding: 0 15px;

  a {
    text-decoration: none;
    color: ${tronBlue};
    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 478px) {
    width: 100%;
  }
`

export const ListTitle = styled.h1`
  font-size: 40px;
  border-bottom: 4px solid ${tronBlue};
  font-family: 'tr2ntr2n';
  font-weight: normal;
  margin: 0 0 10px 0;
  text-shadow: 0px 0px 3px ${tronBlue};
`
