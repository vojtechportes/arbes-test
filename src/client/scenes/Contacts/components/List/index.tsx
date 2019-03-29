import * as React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";
import { StringsContext } from "src/client/strings/index";
import { IStore, IStoreContacts } from "src/client/store/index";
import { ListRow } from "../ListRow/index";


export class List extends React.PureComponent<IStore> {
  public render() {
    return (
      <StringsContext.Consumer>
        {({
          strings: {
            scenes: {
              contacts: {
                components: { list }
              }
            }
          }
        }) =>
          list && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{list.id}</TableCell>
                  <TableCell>{list.name}</TableCell>
                  <TableCell>{list.phoneNumber}</TableCell>
                  <TableCell>{list.note}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.contacts.map(
                  (item: IStoreContacts, key) => {
                    return (
                      <ListRow
                        item={item}
                        key={key}
                      />
                    );
                  }
                )}
              </TableBody>
            </Table>
          )
        }
      </StringsContext.Consumer>
    );
  }
}
