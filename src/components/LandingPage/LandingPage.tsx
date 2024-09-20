//#region imports
import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import face from "../../Assets/models/face/preview.png";
import leg from "../../Assets/models/leg/preview.png";
import hand from "../../Assets/models/hand/preview.png";
import Card from "../Card/Card";
import ThreeDViewer from "../ThreeDViewer";
import { useGLTF } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import { type ObjectMap } from "@react-three/fiber";
import TrackingComponent from "../Tracking/TrackingComponent";
//#endregion

//#region interfaces & types
//#endregion

//#region Function Component
const LandingPage: React.FC = ({}) => {
  //#region Component states
  const [selectedObj, setSelectedObj] = React.useState<string>();
  const [selectedScale, setSelectedScale] = React.useState<number>();

  const cardsList = [
    {
      image: face,
      title: "FACE",
      obj: `${window.location.origin}/3d-viewer/Assets/models/face/LeePerrySmith.glb`,
      scale: 10,
    },
    {
      image: leg,
      title: "LEG",
      obj: `${window.location.origin}/3d-viewer/Assets/models/leg/leg_prosthesis.glb`,
      scale: -1,
    },
    {
      image: hand,
      title: "HAND",
      obj: `${window.location.origin}/3d-viewer/Assets/models/hand/hand.glb`,
      scale: 50,
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
    <div>
      <AppHeader />
      {!selectedObj && (
        <div style={{ display: "flex" }}>
          {cardsList.map((item) => {
            return (
              <Card
                imageUrl={item.image}
                title={item.title}
                onClick={() => {
                  setSelectedObj(item.obj);
                  setSelectedScale(item.scale);
                }}
              />
            );
          })}
        </div>
      )}
      {selectedObj && (
        <div>
          <TrackingComponent />
          <ThreeDViewer gltfUrl={selectedObj} scale={selectedScale} />
          <button
            style={{ position: "absolute", top: "3.5rem", right: "1rem" }}
            onClick={() => setSelectedObj(undefined)}
          >
            {"Close Model"}
          </button>
        </div>
      )}
    </div>
  );
  //#endregion
};
//#endregion

//#region Component export
export default LandingPage;
//#endregion
