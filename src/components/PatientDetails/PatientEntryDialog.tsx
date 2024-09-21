//#region imports
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Field,
  Input,
} from "@fluentui/react-components";
import React from "react";
//#endregion

//#region interfaces & types
//#endregion

//#region Function Component
const PatientEntryDialog: React.FC = ({}) => {
  //#region Component states
  //#endregion

  //#region Component hooks
  React.useEffect(() => {
    // Anything in here is fired on component mount.
    return () => {
      // Anything in here is fired on component unmount.
    };
  }, []);

  React.useEffect(() => {
    // Anything in here is fired on component update.
  });
  //#endregion

  //#region Component Styles
  //#endregion

  //#region Component validation methods
  //#endregion

  //#region Component Api methods
  //#endregion

  //#region Component feature methods
  //#endregion

  //#region Component JSX.members
  //#endregion

  //#region Component renders
  return (
    <>
      <Dialog>
        <DialogTrigger disableButtonEnhancement>
          <Button appearance="primary">{"Create New Record"}</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Enter Patient Details</DialogTitle>
            <DialogContent>
              <form>
                <Field label={"Patient Full Name"}>
                  <Input />
                </Field>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Field label={"Height"} style={{ width: "48%" }}>
                    <Input type="number" />
                  </Field>
                  <Field label={"weight"} style={{ width: "48%" }}>
                    <Input type="number" />
                  </Field>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Field label={"width"} style={{ width: "48%" }}>
                    <Input type="number" />
                  </Field>
                  <Field label={"Parameter 1"} style={{ width: "48%" }}>
                    <Input />
                  </Field>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Field label={"Parameter 2"} style={{ width: "48%" }}>
                    <Input />
                  </Field>
                  <Field label={"Parameter 3"} style={{ width: "48%" }}>
                    <Input />
                  </Field>
                </div>

                <Field label={"Upload Files"}>
                  <input type="file" accept=".jpg, .jpeg, .png" />
                </Field>
              </form>
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Cancel</Button>
              </DialogTrigger>
              <DialogTrigger>
                <Button appearance="primary" type="submit">
                  Submit
                </Button>
              </DialogTrigger>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </>
  );
  //#endregion
};
//#endregion

//#region Component export
export default PatientEntryDialog;
//#endregion
