import React, { Component } from "react";
import styled from "styled-components";
import { Button, Typography } from "../elements";
import { Item, Box, Container, Area } from "../layout";
import { BlogItem, BlogModal } from "../compounds";

const StyledIndex = styled.div`
  height: 100%;

  > .container-main {
    /* border: 1px solid magenta; */
    width: 62%;
    min-height: 100%;
    margin: 0 auto;
    /* background-color: ${p => p.theme.color.light}; */
    position: relative;
  }

  .area-header {
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
  }

  .item-profile {
    border-radius: 1000em;
    overflow: hidden;
    width: ${p => p.theme.increment(8)};
    height: ${p => p.theme.increment(8)};

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .item-intro-text {
    width: 62%;
  }

  .box-blog {
  }

  .item-blog-item {
    overflow: hidden;
    width: 33.333333%;
    height: ${p => p.theme.incrementFixed(12)};
    /* border: 1px solid magenta; */

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .area-footer {
    background-color: ${p => p.theme.color.dark};
    color: ${p => p.theme.color.light};
    text-align: center;
  }

  .container-blog-modal {
    /* border: 1px solid magenta; */
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export default class extends Component {
  render() {
    return (
      <StyledIndex>
        <Container name="main">
          <Area name="header" as="header" padding="inset-base">
            <Item name="profile" margin="stack-base">
              <img src="/static/images/profile.jpg" alt="" />
            </Item>

            <Item margin="stack-l">
              <Typography variant="display-1" as="h1">
                Tilda Swinton's Blog
              </Typography>
            </Item>

            <Item name="intro-text">
              <Typography variant="body" as="p">
                Mollit excepteur cupidatat do ut ad elit tempor officia minim et
                cupidatat aliquip. Sit tempor non dolore ipsum velit sint
                deserunt anim officia dolore in id adipisicing. Anim sint enim
                Lorem laborum ea velit excepteur anim proident. Qui esse sint
                laboris et cupidatat. Eu nostrud do elit officia.
              </Typography>
            </Item>
          </Area>

          <Box name="blog" wrap>
            <Item name="blog-item" as="a">
              <BlogItem photo="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a">
              <BlogItem photo="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a">
              <BlogItem photo="https://images.unsplash.com/photo-1547191084-52b07edfa63d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a">
              <BlogItem photo="https://images.unsplash.com/photo-1547195072-65d33400f09b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a">
              <BlogItem photo="https://images.unsplash.com/photo-1546882595-3423093cedff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a">
              <BlogItem photo="https://images.unsplash.com/photo-1545102241-f661847de562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a">
              <BlogItem photo="https://images.unsplash.com/photo-1545949139-bb90937876ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a">
              <BlogItem photo="https://images.unsplash.com/photo-1545966239-6fe31602f152?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a">
              <BlogItem photo="https://images.unsplash.com/photo-1540206395-913144f5875c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
          </Box>

          <Area name="footer" padding="inset-base">
            <Typography>&copy; 2019 Leandro J. Esparrago</Typography>
          </Area>

          {/* <Container name="blog-modal">
            <BlogModal />
          </Container> */}
        </Container>
      </StyledIndex>
    );
  }
}
