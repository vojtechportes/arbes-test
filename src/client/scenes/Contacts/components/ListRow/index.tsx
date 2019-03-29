import * as React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import { IStoreContacts } from "src/client/store/index";
import styled from "src/client/theme/index";

interface IProps {
  item: IStoreContacts;
}

const StyledTableRow: any = styled(TableRow)`
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray1};
  }
`;

export const ListRow = ({ item }: IProps) => {
  return (
    <StyledTableRow>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.name} {item.surname}</TableCell>
      <TableCell>{item.phoneNumber}</TableCell>
      <TableCell>{item.note}</TableCell>
    </StyledTableRow>
  );
};
