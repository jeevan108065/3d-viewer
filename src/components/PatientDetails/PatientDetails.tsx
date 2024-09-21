//#region imports
import {
  Avatar,
  Button,
  PresenceBadgeStatus,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import {
  AccessibilityRegular,
  DocumentQuestionMarkRegular,
  HandLeftRegular,
  HandRightRegular,
} from "@fluentui/react-icons";
import React from "react";
import PatientEntryDialog from "./PatientEntryDialog";
import PatientViewDialog from "./PatientViewDialog";
import face from "../../Assets/models/face/preview.png";
import leg from "../../Assets/models/leg/preview.png";
import hand from "../../Assets/models/hand/preview.png";
import ThreeDViewer from "../ThreeDViewer";
//#endregion

//#region interfaces & types
//#endregion

//#region test data
const items = [
  {
    id: { label: "1" },
    name: { label: "Rejendra Prasad", status: "available" },
    age: { label: "43" },
    recordType: {
      label: "Right Hand",
      icon: <HandRightRegular />,
    },
  },
  {
    id: { label: "2" },
    name: { label: "Sunil Kumar", status: "available" },
    age: { label: "45" },
    recordType: {
      label: "Left Hand",
      icon: <HandLeftRegular />,
    },
  },
  {
    id: { label: "3" },
    name: { label: "Rahul Ratnam", status: "available" },
    age: { label: "43" },
    recordType: {
      label: "Body",
      icon: <AccessibilityRegular />,
    },
  },
  {
    id: { label: "4" },
    name: { label: "Akhil Kumar Soleti", status: "available" },
    age: { label: "43" },
    recordType: {
      label: "Unknown",
      icon: <DocumentQuestionMarkRegular />,
    },
  },
];
//#endregion

//#region Function Component
const PatientDetails: React.FC = ({}) => {
  //#region Component states
  const [selectedRecord, setSelectedRecord] = React.useState<string>();
  const [selectedObj, setSelectedObj] = React.useState<{
    id: string;
    image: string;
    obj: string;
    scale: number;
  }>();
  const columns = [
    { columnKey: "id", label: "Id" },
    { columnKey: "name", label: "Patient Name" },
    { columnKey: "age", label: "Age" },
    { columnKey: "recordType", label: "Type of Record" },
  ];

  const objList: {
    id: string;
    image: string;
    obj: string;
    scale: number;
  }[] = [
    {
      id: "3",
      image: face,
      obj: `${window.location.origin}/3d-viewer/Assets/models/face/LeePerrySmith.glb`,
      scale: 10,
    },
    {
      id: "4",
      image: leg,
      obj: `${window.location.origin}/3d-viewer/Assets/models/leg/leg_dec_2016.glb`,
      scale: 30,
    },
    {
      id: "1",
      image: hand,
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
      <Table
        arial-label="Default table"
        style={{ minWidth: "510px", margin: "0.5rem" }}
      >
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHeaderCell key={column.columnKey}>
                {column.label}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id.label}
              appearance={item.id.label === selectedRecord ? "neutral" : "none"}
              onClick={() => {
                setSelectedRecord(item.id.label);
                setSelectedObj(
                  objList.find(
                    (obj) => obj.id === item.id.label || obj.id === "1"
                  ) ?? objList[0]
                );
              }}
              onDoubleClick={() => {
                setSelectedRecord(undefined);
              }}
            >
              <TableCell>
                <TableCellLayout>{item.id.label}</TableCellLayout>
              </TableCell>
              <TableCell>
                <TableCellLayout
                  media={
                    <Avatar
                      aria-label={item.name.label}
                      name={item.name.label}
                      badge={{
                        status: item.name.status as PresenceBadgeStatus,
                      }}
                    />
                  }
                >
                  {item.name.label}
                </TableCellLayout>
              </TableCell>
              <TableCell>{item.age.label}</TableCell>
              <TableCell>
                <TableCellLayout media={item.recordType.icon}>
                  {item.recordType.label}
                </TableCellLayout>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          padding: "0.5rem",
          marginInline: "0.5rem",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <PatientEntryDialog />
        <PatientViewDialog
          actionButtonProps={{
            disabled: !selectedRecord,
            children: "View Record",
          }}
          id={selectedRecord ?? "1"}
          name={
            items.find((item) => item.id.label === selectedRecord)?.name
              .label ?? ""
          }
          objData={selectedObj}
        >
          <ThreeDViewer gltfUrl={selectedObj?.obj} scale={selectedObj?.scale} />
        </PatientViewDialog>
      </div>
    </div>
  );
  //#endregion
};
//#endregion

//#region Component export
export default PatientDetails;
//#endregion
