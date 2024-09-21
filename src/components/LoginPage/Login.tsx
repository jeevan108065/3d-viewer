//#region imports
import {
  Card,
  CardHeader,
  makeStyles,
  Body1,
  Caption1,
  CardPreview,
  CardFooter,
  Button,
  Field,
  Input,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
} from "@fluentui/react-components";
import {
  ArrowEjectRegular,
  ArrowEnterRegular,
  CubeRegular,
} from "@fluentui/react-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
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
    margin: "auto",
    padding: "3rem",
    width: "500px",
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
const Login: React.FC = ({}) => {
  //#region Component states
  const [userName, setUserName] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [errorText, setErrorText] = React.useState<string>();
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

  const navigate = useNavigate();
  //#endregion

  //#region Component Styles
  const classNames = useStyles();
  //#endregion

  //#region Component validation methods
  //#endregion

  //#region Component Api methods
  //#endregion

  //#region Component feature methods
  const clearState = () => {
    setUserName(undefined);
    setPassword(undefined);
    setErrorText(undefined);
  };

  const validateLogin = () => {
    if (userName !== "admin" && password !== "admin@123") {
      setErrorText("Invalid Username/Password.");
    } else {
      sessionStorage.setItem("isAuthenticated", "true");
      setErrorText(undefined);
      window.location.reload();
    }
  };
  //#endregion

  //#region Component JSX.members
  //#endregion

  //#region Component renders
  return (
    <div className={classNames.root}>
      <Card className={classNames.card}>
        <CardHeader
          image={<CubeRegular fontSize={36} />}
          header={
            <Body1>
              <b>{"{Application Name}"}</b>
            </Body1>
          }
          description={<Caption1>{"Application caption"}</Caption1>}
        />

        <CardPreview className={classNames.previewContainer}>
          {errorText && (
            <MessageBar
              key={"error"}
              intent={"error"}
              style={{ display: "flex" }}
            >
              <MessageBarBody>
                <MessageBarTitle>Login error</MessageBarTitle>
                {errorText}
              </MessageBarBody>
            </MessageBar>
          )}
          <form>
            <Field
              label={{
                children: "Username",
                required: true,
                weight: "semibold",
                size: "medium",
              }}
              validationMessage={errorText}
            >
              <Input
                onChange={(_ev, data) => {
                  setUserName(data.value);
                }}
              />
            </Field>
            <Field
              label={{
                children: "Password",
                required: true,
                weight: "semibold",
                size: "medium",
              }}
            >
              <Input
                type="password"
                onChange={(_ev, data) => {
                  setPassword(data.value);
                }}
              />
            </Field>
          </form>
        </CardPreview>

        <CardFooter style={{ display: "flex", justifyContent: "end" }}>
          <Button
            icon={<ArrowEjectRegular fontSize={16} />}
            onClick={clearState}
          >
            {"Cancel"}
          </Button>
          <Button
            appearance="primary"
            icon={<ArrowEnterRegular fontSize={16} />}
            onClick={validateLogin}
          >
            {"Submit"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
  //#endregion
};
//#endregion

//#region Component export
export default Login;
//#endregion
