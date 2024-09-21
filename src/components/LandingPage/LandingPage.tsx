//#region imports
import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import face from "../../Assets/models/face/preview.png";
import leg from "../../Assets/models/leg/preview.png";
import hand from "../../Assets/models/hand/preview.png";
import ThreeDViewer from "../ThreeDViewer";
import { useGLTF } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import { type ObjectMap } from "@react-three/fiber";
import TrackingComponent from "../Tracking/TrackingComponent";
import {
  Body1,
  Caption1,
  Card,
  CardHeader,
  CardPreview,
  makeStyles,
} from "@fluentui/react-components";
import PatientDetails from "../PatientDetails/PatientDetails";
//#endregion

//#region interfaces & types
//#endregion

//#region Component Styles
const useStyles = makeStyles({
  root: {
    width: "100lvw",
    height: "100lvh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: "1rem",
    width: "12rem",
    height: "12rem",
    maxWidth: "100%",
  },
  previewContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});
//#endregion

//#region Function Component
const LandingPage: React.FC = ({}) => {
  //#region Component states
  const [selectedObj, setSelectedObj] = React.useState<string>();
  const [selectedScale, setSelectedScale] = React.useState<number>();
  const [selectedUser, setSelectedUser] = React.useState<string>("");

  const cardsList = [
    {
      image: face,
      title: "FACE",
      obj: `${window.location.origin}/3d-viewer/Assets/models/face/LeePerrySmith.glb`,
      scale: 10,
      name: "Akhil Kumar",
    },
    {
      image: leg,
      title: "LEG",
      obj: `${window.location.origin}/3d-viewer/Assets/models/leg/leg_dec_2016.glb`,
      scale: 30,
      name: "Rahul",
    },
    {
      image: hand,
      title: "HAND",
      obj: `${window.location.origin}/3d-viewer/Assets/models/hand/hand.glb`,
      scale: 50,
      name: "Vinod",
    },
  ];
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
    <div style={{ width: "100%", height: "100lvh" }}>
      <AppHeader />
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          rowGap: "0.5rem",
          width: "100%",
          height: "100%",
          padding: "0.5rem",
        }}
      >
        <PatientDetails />
        {selectedObj &&
          cardsList.map((item) => {
            return (
              <Card
                className={classNames.card}
                onClick={() => {
                  setSelectedObj(item.obj);
                  setSelectedScale(item.scale);
                  setSelectedUser(item.name);
                }}
              >
                <CardHeader
                  header={
                    <Body1>
                      <b>{item.title}</b>
                    </Body1>
                  }
                  description={<Caption1>{item.name}</Caption1>}
                />

                <CardPreview className={classNames.previewContainer}>
                  <img
                    src={item.image}
                    alt="sample img"
                    style={{ height: "7rem" }}
                  />
                </CardPreview>
              </Card>
            );
          })}
        {selectedObj && (
          <div>
            <TrackingComponent />
            <ThreeDViewer
              gltfUrl={selectedObj}
              scale={selectedScale}
              title={selectedUser}
            />
            <button
              style={{ position: "absolute", top: "3.5rem", right: "1rem" }}
              onClick={() => setSelectedObj(undefined)}
            >
              {"Close Model"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
  //#endregion
};
//#endregion

//#region Component export
export default LandingPage;
//#endregion
