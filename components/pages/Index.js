import React, { Component } from "react";
import styled from "styled-components";
import { Button, Typography } from "../elements";
import { Item, Box, Container, Area } from "../layout";
import { BlogItem, BlogModal } from "../compounds";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import { Transition } from "react-spring";

const StyledIndex = styled.div`
  height: 100%;

  > .container-main {
    /* border: 1px solid magenta; */
    width: 62%;
    min-height: 100%;
    margin: 0 auto;
    background-color: ${p => p.theme.color.light};
    position: relative;

    @media (max-width: ${p => p.theme.breakpoint.desktopL}) {
      width: 100%;
    }
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

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      width: 100%;
    }
  }

  .box-blog {
  }

  .item-blog-item {
    /* border: 1px solid magenta; */
    overflow: hidden;
    width: 33.333333%;
    height: ${p => p.theme.incrementFixed(12)};

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      width: 50%;
    }

    @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    height: 100vh;
  }

  .container-button-back-area {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`;

export default class extends Component {
  state = {
    isModalOpen: false
  };

  targetRef = React.createRef();
  modalRef = null;

  componentDidMount() {
    this.modalRef = this.targetRef.current;
  }

  handleToggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen }, () => {
      if (this.state.isModalOpen === true) {
        disableBodyScroll(this.modalRef);
      } else {
        enableBodyScroll(this.modalRef);
      }
    });
  };

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <StyledIndex>
        <Container name="main">
          <Area name="header" as="header" padding="inset-base" margin="stack-s">
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
            <Item name="blog-item" as="a" onClick={this.handleToggleModal}>
              <BlogItem photo="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a" onClick={this.handleToggleModal}>
              <BlogItem photo="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a" onClick={this.handleToggleModal}>
              <BlogItem photo="https://images.unsplash.com/photo-1547191084-52b07edfa63d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a" onClick={this.handleToggleModal}>
              <BlogItem photo="https://images.unsplash.com/photo-1547195072-65d33400f09b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a" onClick={this.handleToggleModal}>
              <BlogItem photo="https://images.unsplash.com/photo-1546882595-3423093cedff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a" onClick={this.handleToggleModal}>
              <BlogItem photo="https://images.unsplash.com/photo-1545102241-f661847de562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a" onClick={this.handleToggleModal}>
              <BlogItem photo="https://images.unsplash.com/photo-1545949139-bb90937876ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a" onClick={this.handleToggleModal}>
              <BlogItem photo="https://images.unsplash.com/photo-1545966239-6fe31602f152?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
            <Item name="blog-item" as="a" onClick={this.handleToggleModal}>
              <BlogItem photo="https://images.unsplash.com/photo-1540206395-913144f5875c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Item>
          </Box>

          <Area name="footer" padding="inset-base">
            <Typography>&copy; 2019 Leandro J. Esparrago</Typography>
          </Area>

          <Transition
            items={isModalOpen}
            native
            from={{ transform: "translateY(110vh)" }}
            enter={{ transform: "translateY(0)" }}
            leave={{ transform: "translateY(-110vh)" }}
          >
            {isModalOpen =>
              isModalOpen &&
              (props => (
                <Container
                  name="blog-modal"
                  animate={props}
                  ref={this.modalRef}
                >
                  <BlogModal handleToggleModal={this.handleToggleModal} />
                  <Container
                    name="button-back-area"
                    onClick={this.handleToggleModal}
                  />
                </Container>
              ))
            }
          </Transition>
        </Container>
      </StyledIndex>
    );
  }
}
