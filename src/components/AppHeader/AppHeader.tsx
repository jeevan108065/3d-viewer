//#region imports
import React from "react";
//#endregion

//#region interfaces & types
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
  const AppHeaderRootDivStyles: React.CSSProperties = {
    height: "3rem",
    width: "100lvw",
    position: "fixed",
    boxShadow: "0px 0px 5px 0px grey",
    display: "flex",
    alignItems: "center",
    paddingLeft: "1rem",
    justifyContent: "space-between"
  };

  const ApplicationNameStyles: React.CSSProperties = {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1rem",
    minWidth: "20lvw",
  };

  const UserProfile: React.CSSProperties = {
    width: "2rem",
    aspectRatio: "1",
    borderRadius: "50%",
    backgroundColor: "grey",
    content: "U",
    float: "right",
    marginRight: "2.5rem",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold"
  };
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
    <div style={AppHeaderRootDivStyles}>
      <div>
        <span style={ApplicationNameStyles}>{"{ Application Name }"}</span>
      </div>
      <span style={UserProfile}>{"U"}</span>
    </div>
  );
  //#endregion
};
//#endregion

//#region Component export
export default AppHeader;
//#endregion
