import React, { Component } from "react";
import styled from "styled-components";
import { Typography, Button } from "../elements";
import { Item, Box, Container, Area } from "../layout";

const StyledBlogModal = styled.div`
  margin: 0 auto;
  width: 62%;
  height: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: ${p => p.theme.breakpoint.desktopL}) {
    width: 81%;
  }

  @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
    width: 100%;
  }

  .container-design-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.color.light};
    opacity: 0.95;
    z-index: 100;
  }

  .container-button-close {
    position: absolute;
    top: ${p => p.theme.size.s};
    right: ${p => p.theme.size.base};
    z-index: 102;
  }

  .area-content {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    z-index: 101;
    padding-bottom: ${p => p.theme.incrementFixed(6)};
  }

  .container-content {
    width: 62%;
    margin: 0 auto;

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      width: 81%;
    }

    @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
      width: 100%;
    }
  }

  .container-photo {
    width: 100%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

export class BlogModal extends Component {
  render() {
    const { handleToggleModal } = this.props;

    return (
      <StyledBlogModal>
        <Container name="design-overlay" />
        <Container name="button-close">
          <Button variant="text" onClick={handleToggleModal}>
            Close
          </Button>
        </Container>

        <Area name="content" padding="inset-base">
          <Container name="content">
            <Item margin="stack-base">
              <Typography variant="display-1">Blog Title</Typography>
            </Item>

            <Item margin="stack-l">
              <Typography variant="display-2">Blog Date</Typography>
            </Item>

            <Container name="photo" margin="stack-l">
              <Item margin="stack-m">
                <img
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </Item>

              <Item>
                <Typography variant="caption">
                  Labore duis elit commodo incididunt aliquip dolor ea tempor.
                </Typography>
              </Item>
            </Container>

            <Item margin="stack-l">
              <Typography variant="body">
                Esse in culpa duis qui duis esse sit nostrud esse nisi et irure
                duis eiusmod. Lorem nulla labore quis irure adipisicing non
                Lorem officia est officia fugiat aliqua aliqua. Id commodo
                ullamco cupidatat Lorem. Ipsum officia exercitation sit laboris
                commodo aliquip cupidatat Lorem sint magna.
              </Typography>
            </Item>

            <Item margin="stack-l">
              <Typography variant="body">
                Duis ex minim consectetur id do laboris irure ipsum nostrud non
                commodo minim amet. Sunt nisi eu ex ipsum. Minim esse quis
                mollit consectetur ullamco pariatur labore sit minim aliqua.
                Elit exercitation anim reprehenderit aliquip esse adipisicing
                mollit voluptate elit culpa non culpa. Labore ad esse
                consectetur qui consectetur culpa velit culpa. Tempor ullamco
                reprehenderit sunt duis in et. Anim proident dolore id pariatur
                elit magna pariatur qui.
              </Typography>
            </Item>

            <Item margin="stack-l">
              <Typography variant="body">
                Ut culpa ipsum elit nisi non tempor sint enim ea deserunt do
                ipsum. Dolor dolor proident cupidatat elit enim voluptate nulla
                reprehenderit veniam dolor cupidatat do. Anim consequat id ex
                amet voluptate deserunt ullamco reprehenderit officia.
              </Typography>
            </Item>

            <Container name="photo" margin="stack-l">
              <Item margin="stack-m">
                <img
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </Item>

              <Item>
                <Typography variant="caption">
                  Labore duis elit commodo incididunt aliquip dolor ea tempor.
                </Typography>
              </Item>
            </Container>

            <Item margin="stack-l">
              <Typography variant="body">
                Ut culpa ipsum elit nisi non tempor sint enim ea deserunt do
                ipsum. Dolor dolor proident cupidatat elit enim voluptate nulla
                reprehenderit veniam dolor cupidatat do. Anim consequat id ex
                amet voluptate deserunt ullamco reprehenderit officia.
              </Typography>
            </Item>
          </Container>
        </Area>
      </StyledBlogModal>
    );
  }
}

export default BlogModal;
