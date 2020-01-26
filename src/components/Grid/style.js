import styled from '@emotion/styled/macro'

const Grid = styled.div`
  background-image: linear-gradient(0deg, transparent 0, rgba(88, 190, 255, 0.8) 1px, transparent 2px),
    linear-gradient(90deg, transparent 0, rgba(88, 190, 255, 0.8) 1px, transparent 2px);
  background-size: 33px 33px;
  color: #58beff;
  background-color: transparent;
  height: 363px;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    height: 198px;
  }
`
export default Grid
