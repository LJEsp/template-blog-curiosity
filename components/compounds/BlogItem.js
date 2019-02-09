import React, { Component } from "react";
import styled from "styled-components";
import { Item, Container } from "../layout";
import { Spring } from "react-spring";
import { Typography } from "../elements";

const StyledBlogItem = styled.div`
  position: relative;
  overflow: hidden;

  .container-design-overlay {
    background-color: ${p => p.theme.color.dark};
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .container-blog-detail {
    /* border: 1px solid magenta; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: ${p => p.theme.color.light};
    transform: translateY(-100%);
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    pointer-events: none;
  }

  .container-design-overlay:hover ~ .container-blog-detail {
    transform: translateY(0%);
  }
`;

export default class BlogItem extends Component {
  render() {
    const { photo, title } = this.props;

    return (
      <StyledBlogItem>
        <Container name="design-overlay" />

        <img src={photo} alt={title} />

        <Container
          name="blog-detail"
          onMouseEnter={() => {
            console.log("test");
          }}
          padding="inset-base"
        >
          <Item margin="stack-m">
            <Typography variant="display-2">Blog Title</Typography>
          </Item>

          <Item margin="stack-base">
            <Typography variant="display-3">Blog Date</Typography>
          </Item>

          <Item>
            <Typography variant="body">
              Et culpa cupidatat officia aliqua et tempor.
            </Typography>
          </Item>
        </Container>
      </StyledBlogItem>
    );
  }
}
