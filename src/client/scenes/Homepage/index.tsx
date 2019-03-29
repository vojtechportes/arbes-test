import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { StringsContext } from "src/client/strings/index";
import { Typography, Button } from "@material-ui/core";
import { Container, Margin } from "src/client/components/index";

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
              <Margin margin="20px 0">
                <Typography variant="body1">
                  or sit amet, consectetuer adipiscing elit. Curabitur sagittis
                  hendrerit ante. Pellentesque arcu. Fusce dui leo, imperdiet
                  in, aliquam sit amet, feugiat eu, orci. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Praesent id justo in neque elementum ultrices.
                  Cras pede libero, dapibus nec, pretium sit amet, tempor quis.
                  Sed convallis magna eu sem. Vivamus luctus egestas leo. Fusce
                  nibh. Duis condimentum augue id magna semper rutrum. Aenean id
                  metus id velit ullamcorper pulvinar. Donec quis nibh at felis
                  congue commodo. Maecenas sollicitudin. Integer imperdiet
                  lectus quis justo.
                </Typography>
              </Margin>
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
