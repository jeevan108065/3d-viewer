//#region imports
import {
  Avatar,
  Body1,
  Caption1,
  Card,
  CardHeader,
  makeStyles,
} from "@fluentui/react-components";
import { CubeRegular } from "@fluentui/react-icons";
import React from "react";
import User from "../UserPage/User";
import { ReactComponent as AppLogo } from "../../Assets/white-logo-2.svg";
//#endregion

//#region interfaces & types
//#endregion

//#region Component Styles
const useStyles = makeStyles({
  card: {
    margin: "0",
    width: "100lvw",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
//#endregion

//#region Function Component
const AppHeader: React.FC = ({}) => {
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
    <Card className={classNames.card}>
      <CardHeader
        image={<AppLogo style={{ height: "3rem" }} />}
        // image={<CubeRegular fontSize={36} />}
        // header={
        //   <Body1>
        //     <b>{"{Application Name}"}</b>
        //   </Body1>
        // }
        // description={<Caption1>{"Application caption"}</Caption1>}
      />
      <User
        color="colorful"
        activeAppearance="ring-shadow"
        active="active"
        name="User"
      />
    </Card>
  );
  //#endregion
};
//#endregion

//#region Component export
export default AppHeader;
//#endregion
