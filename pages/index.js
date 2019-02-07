import React, { Component } from "react";
import styled from "styled-components";
import { Button, Typography } from "../components/elements";
import { Item, Box, Container } from "../components/layout";

const StyledIndex = styled.div`
  background-color: ${p => p.theme.color.grey.light};
`;

export default class extends Component {
  render() {
    return (
      <StyledIndex>
        <Container padding="inset-base">
          <Container margin="stack-xl">
            <Item margin="stack-l">
              <Typography variant="display-1" as="h1">
                Buttons
              </Typography>
            </Item>

            <Item margin="stack-base">
              <Button>Button Default</Button>
            </Item>

            <Item margin="stack-base">
              <Button variant="primary">Button variant="primary"</Button>
            </Item>

            <Item margin="stack-base">
              <Button variant="secondary">Button variant="secondary"</Button>
            </Item>

            <Item margin="stack-base">
              <Button variant="text">Button variant="text"</Button>
            </Item>

            <Box margin="stack-base">
              <Item margin="inline-base">
                <Button variant="primary" icon rounded>
                  <i className="fas fa-play" />
                  <span id="hidden">Play</span>
                </Button>
              </Item>

              <Item margin="inline-base">
                <Button variant="icon" icon rounded>
                  <i className="fab fa-youtube" />
                  <span id="hidden">Youtube</span>
                </Button>
              </Item>

              <Item margin="inline-base">
                <Button variant="icon" icon rounded>
                  <i className="fab fa-css3" />
                  <span id="hidden">CSS</span>
                </Button>
              </Item>
            </Box>

            <Item grow margin="stack-base">
              <Button>
                <Item inline margin="inline-s">
                  Button with icon
                </Item>
                <i className="fas fa-play" />
              </Button>
            </Item>

            <Item margin="stack-base">
              <Button variant="primary" rounded>
                <Item inline margin="inline-s">
                  <i className="fas fa-play" />
                </Item>
                Button — Primary with icon (rounded)
              </Button>
            </Item>

            <Item margin="stack-base">
              <Button variant="primary" rounded full>
                <Item inline margin="inline-s">
                  <i className="fas fa-play" />
                </Item>
                Button — Primary with icon (full)
              </Button>
            </Item>

            <Item margin="stack-base">
              <Button variant="primary" disabled>
                <Item inline margin="inline-s">
                  <i className="fas fa-play" />
                </Item>
                Button — Primary, disabled
              </Button>
            </Item>
          </Container>

          <Container>
            <Item margin="stack-l">
              <Typography variant="display-1" as="h1">
                Typography
              </Typography>
            </Item>

            <Item margin="stack-base">
              <Typography as="p" variant="body">
                Body
              </Typography>
            </Item>

            <Item margin="stack-l">
              <Typography as="p" variant="body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Beatae, soluta officiis. Voluptate, quis deleniti vitae hic
                voluptatem repudiandae odio atque quidem veniam animi itaque
                voluptas libero commodi, porro, eos pariatur!
              </Typography>
            </Item>

            <Item margin="stack-base">
              <Typography as="h4" variant="display-4">
                Display 4
              </Typography>
            </Item>

            <Item margin="stack-l">
              <Typography as="h4" variant="display-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Beatae, soluta officiis. Voluptate, quis deleniti vitae hic
                voluptatem repudiandae odio atque quidem veniam animi itaque
                voluptas libero commodi, porro, eos pariatur!
              </Typography>
            </Item>

            <Item margin="stack-base">
              <Typography as="h3" variant="display-3">
                Display 3
              </Typography>
            </Item>

            <Item margin="stack-l">
              <Typography as="h3" variant="display-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Beatae, soluta officiis. Voluptate, quis deleniti vitae hic
                voluptatem repudiandae odio atque quidem veniam animi itaque
                voluptas libero commodi, porro, eos pariatur!
              </Typography>
            </Item>

            <Item margin="stack-base">
              <Typography as="h2" variant="display-2">
                Display 2
              </Typography>
            </Item>

            <Item margin="stack-l">
              <Typography as="h2" variant="display-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Beatae, soluta officiis. Voluptate, quis deleniti vitae hic
                voluptatem repudiandae odio atque quidem veniam animi itaque
                voluptas libero commodi, porro, eos pariatur!
              </Typography>
            </Item>

            <Item margin="stack-base">
              <Typography as="h1" variant="display-1">
                Display 1
              </Typography>
            </Item>

            <Item margin="stack-l">
              <Typography as="h1" variant="display-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Beatae, soluta officiis. Voluptate, quis deleniti vitae hic
                voluptatem repudiandae odio atque quidem veniam animi itaque
                voluptas libero commodi, porro, eos pariatur!
              </Typography>
            </Item>

            <Item margin="stack-base">
              <Typography variant="caption">Caption</Typography>
            </Item>

            <Item margin="stack-l">
              <Typography variant="caption">
                Adipisicing ut velit consequat dolore pariatur reprehenderit
                irure reprehenderit elit.
              </Typography>
            </Item>
          </Container>
        </Container>
      </StyledIndex>
    );
  }
}
