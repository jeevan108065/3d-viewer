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
} from "@fluentui/react-components";
import React from "react";
import ThreeDViewer from "../ThreeDViewer";
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
            <DialogContent ref={mountRef}>
              <ThreeDViewer
                gltfUrl={props.objData?.obj}
                scale={props.objData?.scale}
                onRefChange={(ref) => {
                  setMountRef(ref);
                }}
              />
            </DialogContent>
            <DialogActions>
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
