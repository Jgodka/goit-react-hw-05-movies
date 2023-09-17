import styled from 'styled-components';

export const PhotoMovie = styled.img`
  width: 300px;
  margin-bottom: 10px;
`;

export const PhotoAndDescription = styled.ul`
  display: flex;
  gap: 20px;
  border-bottom: 2px solid blue;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

export const Nav = styled.nav`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AdditionalInformation = styled.div`
  border-bottom: 2px solid blue;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  padding-top: 30px;
  padding-bottom: 20px;
`;
