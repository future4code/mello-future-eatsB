import styled from 'styled-components'

export const Bar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #b8b8b8;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  margin-bottom: 16px;
`;

export const BarContent = styled.div`
  flex: 1;
  display: flex;
  padding: 16px;
`

export const Title = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`