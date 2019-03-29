import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { StringsContext } from "src/client/strings/index";
import { Typography, Button } from "@material-ui/core";
import { Container } from "src/client/components/index";

class Homepage extends React.PureComponent<RouteComponentProps> {
  public render() {
    return (
      <StringsContext.Consumer>
        {({
          strings: {
            scenes: { homepage }
          }
        }) =>
          homepage && (
            <Container>
              <Typography variant="h4" color="inherit">
                {homepage.hd}
              </Typography>
              <Button
                onClick={this.handleAddContactClick}
                variant="contained"
                color="primary"
              >
                {homepage.addContact}
              </Button>
            </Container>
          )
        }
      </StringsContext.Consumer>
    );
  }

  private handleAddContactClick = () => {
    this.props.history.push("/add-contact");
  };
}

export default Homepage;
