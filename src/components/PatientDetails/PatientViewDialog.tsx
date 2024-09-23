//#region imports
import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Field,
  Input,
  makeStyles,
  Text,
} from "@fluentui/react-components";
import React from "react";
import ThreeDViewer from "../ThreeDViewer";
import TrackingComponent from "../Tracking/TrackingComponent";
//#endregion

//#region test data
const items = [
  {
    id: "1",
    name: "Rejendra Prasad",
    age: "43",
    recordType: "Right Hand",
    Height: "165cm",
    weigh: "75kg",
    width: "85cm",
    Parameter1: "",
    Parameter2: "",
  },
  {
    id: "2",
    name: "Sunil Kumar",
    age: "45",
    recordType: "Right Hand",
    Height: "165cm",
    weigh: "75kg",
    width: "85cm",
    Parameter1: "",
    Parameter2: "",
  },
  {
    id: "3",
    name: "Rahul Ratnam",
    age: "43",
    recordType: "Right Hand",
    Height: "165cm",
    weigh: "75kg",
    width: "85cm",
    Parameter1: "",
    Parameter2: "",
  },
  {
    id: "4",
    name: "Akhil Kumar Soleti",
    age: "43",
    recordType: "Right Hand",
    Height: "165cm",
    weigh: "75kg",
    width: "85cm",
    Parameter1: "",
    Parameter2: "",
  },
];
//#endregion

//#region interfaces & types
export interface IPatientViewDialogProps {
  actionButtonProps?: ButtonProps;
  name: string;
  id: string;
  objData?: {
    id: string;
    image: string;
    obj: string;
    scale: number;
  };
  children?: React.ReactNode;
}
//#endregion

const useStyles = makeStyles({
  root: { width: "80lvw" },
});
//#region Function Component
const PatientViewDialog: React.FC<IPatientViewDialogProps> = ({
  children,
  ...props
}) => {
  //#region Component states
  const [mountRef, setMountRef] =
    React.useState<React.RefObject<HTMLDivElement>>();

  const [viewModel, setViewModel] = React.useState<boolean>(false);
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
  const classNames = useStyles();
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
          <Button appearance="secondary" {...props.actionButtonProps}>
            {"View Record"}
          </Button>
        </DialogTrigger>
        <DialogSurface className={classNames.root}>
          <DialogBody>
            <DialogTitle>Patient Details - {props.name}</DialogTitle>
            <DialogContent style={{ minHeight: "70lvh" }}>
              <div>
                <TrackingComponent />
                {viewModel ? (
                  <ThreeDViewer
                    gltfUrl={props.objData?.obj}
                    scale={props.objData?.scale}
                    onRefChange={(ref) => {
                      setMountRef(ref);
                    }}
                  />
                ) : (
                  <div>
                    {Object.entries(
                      items.find((i) => i.id === props.id) ?? items[0]
                    ).map((data) => {
                      const [label, value] = data;
                      return (
                        <Field
                          style={{ display: "flex", gap: "1rem" }}
                          label={{
                            size: "medium",
                            weight: "semibold",
                            children: `${label.toUpperCase()}:`,
                          }}
                          size="medium"
                        >
                          <Text>{value}</Text>
                        </Field>
                      );
                    })}
                  </div>
                )}
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                appearance="secondary"
                onClick={() => setViewModel(!viewModel)}
              >
                {viewModel ? "View Details" : "View Model"}
              </Button>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Close</Button>
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
export default PatientViewDialog;
//#endregion
