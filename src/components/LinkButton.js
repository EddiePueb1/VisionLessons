import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
  padding:10px;
  border-radius: 50px;
  color: ${({dark}) => (dark ? "var(--overshadow)": "var(--backgroundColor)")};
  text-decoration: none;
  // background: ${({light}) => (light ? 'var(--accentColor)' : 'var(--overshadow)')};
  background: var(--accentColor);
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;

&:hover {
  background: var(--backgroundColor)
  
}
`;