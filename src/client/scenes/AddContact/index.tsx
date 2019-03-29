import * as React from "react";
import { isEmpty } from "validator";
import { StringsContext } from "src/client/strings/index";
import { Container, Margin } from "src/client/components/index";
import { Formik, FormikProps } from "formik";
import { TextField, Grid, Button, FormHelperText } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { isPhoneNumber } from "src/client/utils/isPhoneNumber/index";
import { connect } from "react-redux";
import { IStore } from "src/client/store/index";
import { IActions, addContact } from "src/client/store/actions/index";
import { formatPhoneNumber } from "src/client/utils/formatPhoneNumber/index";

interface IValues {
  name: string;
  surname: string;
  phoneNumber: string;
  note?: string;
}

interface IState {
  isFormSubmitted: boolean;
}

const mapStateToProps = (state: IStore) => ({
  contacts: state.contacts
});

const mapDispatchToProps = {
  addContact
};

@(connect(
  mapStateToProps,
  mapDispatchToProps
) as any)
class AddContact extends React.PureComponent<IStore & IActions, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isFormSubmitted: false
    };
  }

  public render() {
    return (
      <Formik<IValues>
        initialValues={{
          name: "",
          surname: "",
          phoneNumber: "",
          note: ""
        }}
        onSubmit={this.handleSubmit}
        validate={this.validate}
        render={this.renderForm}
      />
    );
  }

  private handleSubmit = (values: IValues) => {
    this.props.addContact(
      values.name,
      values.surname,
      String(formatPhoneNumber(values.phoneNumber)),
      values.note
    );

    this.setState({ isFormSubmitted: true });
  };

  private validate = (values: IValues) => {
    const errors: {
      name?: string;
      surname?: string;
      phoneNumber?: string;
      note?: string;
    } = {};

    const { name, surname, phoneNumber } = values;

    // Validate name
    if (isEmpty(name)) {
      errors.name = "empty";
    }

    if (isEmpty(surname)) {
      errors.surname = "empty";
    }

    if (isEmpty(phoneNumber)) {
      errors.phoneNumber = "empty";
    }

    if (!isPhoneNumber(phoneNumber) && !isEmpty(phoneNumber)) {
      errors.phoneNumber = "invalid";
    }

    return errors;
  };

  private renderForm = ({
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
    handleReset
  }: FormikProps<IValues>) => {
    return (
      <StringsContext.Consumer>
        {({
          strings: {
            scenes: { addContact: addContactStrings }
          }
        }) =>
          addContactStrings && (
            <Container>
              {this.state.isFormSubmitted ? (
                <Redirect from="/add-contact" to="/contacts" />
              ) : (
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column">
                    <Margin margin="0 0 20px">
                      <TextField
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label={addContactStrings.form.name}
                        fullWidth
                        error={errors.name && touched.name}
                      />
                      {errors.name &&
                        touched.name && (
                          <FormHelperText>
                            {addContactStrings.form[`name_${errors.name}`]}
                          </FormHelperText>
                        )}
                    </Margin>

                    <Margin margin="0 0 20px">
                      <TextField
                        name="surname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label={addContactStrings.form.surname}
                        fullWidth
                        error={errors.surname && touched.surname}
                      />
                      {errors.surname &&
                        touched.surname && (
                          <FormHelperText>
                            {
                              addContactStrings.form[
                                `surname_${errors.surname}`
                              ]
                            }
                          </FormHelperText>
                        )}
                    </Margin>

                    <Margin margin="0 0 20px">
                      <TextField
                        name="phoneNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label={addContactStrings.form.phoneNumber}
                        fullWidth
                        error={errors.phoneNumber && touched.phoneNumber}
                      />
                      {errors.phoneNumber &&
                        touched.phoneNumber && (
                          <FormHelperText>
                            {
                              addContactStrings.form[
                                `phoneNumber_${errors.phoneNumber}`
                              ]
                            }
                          </FormHelperText>
                        )}
                    </Margin>

                    <Margin margin="0 0 20px">
                      <TextField
                        multiline
                        name="note"
                        rows="4"
                        rowsMax="4"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label={addContactStrings.form.note}
                        fullWidth
                      />
                    </Margin>

                    <Button type="submit" variant="contained" color="primary">
                      {addContactStrings.form.submit}
                    </Button>
                  </Grid>
                </form>
              )}
            </Container>
          )
        }
      </StringsContext.Consumer>
    );
  };
}

export default AddContact;
