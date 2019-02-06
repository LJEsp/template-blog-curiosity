import React, { Component } from "react";
import styled, { css } from "styled-components";

const configs = css`
  /* >>> rounded */
  ${p =>
    p.rounded &&
    css`
      border-radius: 1000em;
    `}

  /* >>> icon */
  ${p =>
    p.icon &&
    css`
      font-size: ${p => p.theme.font.scale.body};
      padding: 0;
    `}

  /* >>> full */
  ${p =>
    p.full &&
    css`
      width: 100%;
    `}
`;

const StyledButton = styled.button`
  /* border: 1px solid magenta; */
  min-width: var(--size-button);
  min-height: var(--size-button);
  user-select: none;
  box-shadow: ${p => p.theme.shadow[0]};
  transition-property: box-shadow, background-color;
  transition-duration: 100ms;
  background-color: ${p => p.theme.color.light};
  font-size: ${p => p.theme.font.scale.base};
  padding: ${p => p.theme.size.s} ${p => p.theme.size.m};
  display: flex;
  align-items: center;
  justify-content: center;

  ${configs};

  &:hover {
    box-shadow: ${p => p.theme.shadow[1]};
  }

  &:focus {
    box-shadow: 0 0 0 var(--size-xs) ${p => p.theme.color.primary.light};
  }
`;

const StyledButtonPrimary = styled(StyledButton)`
  background-color: ${p => p.theme.color.primary.main};
  color: ${p => p.theme.color.lightFixed};
`;

export class Button extends Component {
  static defaultProps = {
    variant: ""
  };

  render() {
    const { variant, icon } = this.props;

    switch (variant) {
      case "primary":
        return (
          <StyledButtonPrimary {...this.props}>
            {this.props.children}
          </StyledButtonPrimary>
        );

      default:
        return (
          <StyledButton {...this.props}>{this.props.children}</StyledButton>
        );
    }
  }
}

export default Button;
