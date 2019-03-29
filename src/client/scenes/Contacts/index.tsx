import * as React from "react";
import { StringsContext } from "src/client/strings/index";
import { Typography } from "@material-ui/core";
import { Container } from "src/client/components/index";
import { connect } from "react-redux";
import { IStore } from "src/client/store/index";
import { List } from "./components/List/index";

const mapStateToProps = (state: IStore) => ({
  contacts: state.contacts
});
@(connect(
  mapStateToProps
) as any)
class Contacts extends React.PureComponent<IStore> {
  public render() {
    return (
      <StringsContext.Consumer>
        {({
          strings: {
            scenes: { contacts }
          }
        }) =>
          contacts && (
            <Container>
              <Typography variant="h4" color="inherit">
                {contacts.hd}
              </Typography>
              <List contacts={this.props.contacts} />
            </Container>
          )
        }
      </StringsContext.Consumer>
    );
  }
}

export default Contacts;
