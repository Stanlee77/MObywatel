import styled, { css } from 'styled-components';
import { ReactNode } from 'react';

const buttonStyles = css`
  border: 2px solid ${props => props.theme.colors.primary[200]};
  border-radius: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 18px;
  line-height: 21.6px;
  color: black;
  text-decoration: none;
  padding: 0 25px;
  font-weight: bold;
  padding: 15px 0;
`;

export const StyledSignButton = styled.button<{ customBgColor: string, customTextColor: string, onClick: any}>`
  && {
    ${buttonStyles}
    background-color: ${props => props.customBgColor};
    color: ${props => props.customTextColor};
  }
`;

function SignButton(props: { customBgColor: string, customTextColor: string; children?: ReactNode }) {
  return (
    <StyledSignButton
      customTextColor={props.customTextColor}
      customBgColor={props.customBgColor}
    >
      {props.children}
    </StyledSignButton>
  );
}

export default SignButton;
