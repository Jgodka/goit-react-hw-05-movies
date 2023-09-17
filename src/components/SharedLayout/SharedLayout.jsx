import styled from 'styled-components';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Heder, Nav } from './SharedLayout.styled';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: #ff2f00;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <Heder>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Heder>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
