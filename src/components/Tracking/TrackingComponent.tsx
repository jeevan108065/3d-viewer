import React, { useState } from "react";

const TrackingComponent: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const containerStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    width: "300px",
    backgroundColor: "grey",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    zIndex: 1000,
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  };

  const contentStyle: React.CSSProperties = {
    display: isCollapsed ? "none" : "block",
    marginTop: "10px",
  };

  const progressContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px",
  };

  const circleStyle: React.CSSProperties = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as "relative",
  };

  const activeCircleStyle: React.CSSProperties = {
    backgroundColor: "#4caf50",
  };

  const lineStyle: React.CSSProperties = {
    height: "2rem",
    flexGrow: 1,
    border: "2px solid #ccc",
    position: "relative" as "relative",
  };

  const activeLineStyle: React.CSSProperties = {
    borderColor: "#4caf50",
    backgroundColor: "#4caf50",
  };

  const statuses = [
    { label: "Order Placed", completed: true },
    { label: "Shipped", completed: true },
    { label: "In Transit", completed: true },
    { label: "Out for Delivery", completed: false },
    { label: "Delivered", completed: false },
  ];

  return (
    <div style={containerStyle}>
      <div style={headerStyle} onClick={toggleCollapse}>
        <span>
          <b>Package Tracking</b>
        </span>
        <span>{isCollapsed ? "▲" : "▼"}</span>
      </div>
      <div style={contentStyle}>
        <p>
          <b>Tracking Number:</b> 123456789
        </p>
        <p>
          <b>Expected Delivery:</b> 2024-09-25
        </p>
        <div style={progressContainerStyle}>
          {statuses.map((status, index) => (
            <React.Fragment key={index}>
              <span>{status.label}</span>
              <div
                style={{
                  ...circleStyle,
                  ...(status.completed ? activeCircleStyle : {}),
                }}
              ></div>
              {index < statuses.length - 1 && (
                <div
                  style={{
                    ...lineStyle,
                    ...(statuses[index + 1].completed ? activeLineStyle : {}),
                  }}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackingComponent;
