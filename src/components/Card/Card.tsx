//#region imports
import React from "react";
//#endregion

//#region interfaces & types
//#endregion

//#region Function Component
const Card: React.FC<{ imageUrl: string; title: string; onClick?:React.MouseEventHandler<HTMLDivElement> | undefined }> = ({
  imageUrl,
  title,
  onClick,
}) => {
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
  const CardStyle: React.CSSProperties = {
    height: "10rem",
    aspectRatio: "1",
    border: "1px solid grey",
    borderRadius: "0.5rem",
    padding: ".2rem",
    margin: "0.5rem",
    boxShadow: "rgb(255 255 255) 0px 0px 0px 1px, rgb(255 255 255) 0px 2px 4px 1px",
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    justifyContent: "space-between",
  };

  const imageStyles: React.CSSProperties ={
    height: "70%",
  }
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
    <div style={CardStyle} onClick={onClick}>
      <img style={imageStyles} src={imageUrl}  alt={title} />
      <em style={{ fontSize: "2rem"}}>{title}</em>
    </div>
  );
  //#endregion
};
//#endregion

//#region Component export
export default Card;
//#endregion
