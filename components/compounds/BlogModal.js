import React, { Component } from "react";
import styled from "styled-components";
import { Typography } from "../elements";
import { Item, Box, Container, Area } from "../layout";

const StyledBlogModal = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;

  .container-design-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.color.light};
    opacity: 0.9;
    z-index: 100;
  }

  .area-content {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    z-index: 101;
  }

  .container-content {
    width: 62%;
    margin: 0 auto;
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
    return (
      <StyledBlogModal>
        <Container name="design-overlay" />

        <Area name="content" padding="inset-base">
          <Container name="content">
            <Item margin="stack-l">
              <Typography variant="display-1">Blog Title</Typography>
            </Item>

            <Container name="photo" margin="stack-base">
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

            <Item margin="stack-base">
              <Typography variant="body">
                Esse in culpa duis qui duis esse sit nostrud esse nisi et irure
                duis eiusmod. Lorem nulla labore quis irure adipisicing non
                Lorem officia est officia fugiat aliqua aliqua. Id commodo
                ullamco cupidatat Lorem. Ipsum officia exercitation sit laboris
                commodo aliquip cupidatat Lorem sint magna.
              </Typography>
            </Item>

            <Item margin="stack-base">
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

            <Item margin="stack-base">
              <Typography variant="body">
                Ut culpa ipsum elit nisi non tempor sint enim ea deserunt do
                ipsum. Dolor dolor proident cupidatat elit enim voluptate nulla
                reprehenderit veniam dolor cupidatat do. Anim consequat id ex
                amet voluptate deserunt ullamco reprehenderit officia.
              </Typography>
            </Item>

            <Container name="photo" margin="stack-base">
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
          </Container>
        </Area>
      </StyledBlogModal>
    );
  }
}

export default BlogModal;
