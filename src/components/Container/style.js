import styled from '@emotion/styled/macro'

const Container = styled.div`
  width: 100%;
  padding: 0 0px;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
    padding: 0 15px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`
export default Container
