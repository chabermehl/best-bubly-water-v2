import styled from 'styled-components';

const StyledLayout = styled.div`
  padding-left: 20%;
  padding-right: 20%;

  footer {
    padding-top: 10px;
  }

  @media only screen and (max-width: 960px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export default StyledLayout;
