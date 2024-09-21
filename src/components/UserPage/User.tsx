//#region imports
import {
  Avatar,
  AvatarProps,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  useRestoreFocusSource,
} from "@fluentui/react-components";
import { ArrowExitFilled, DismissRegular } from "@fluentui/react-icons";
import React from "react";
//#endregion

//#region interfaces & types
//#endregion

//#region Function Component
const User: React.FC<AvatarProps> = ({ ...props }) => {
  //#region Component states
  const [isOpen, setIsOpen] = React.useState(false);
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

  const restoreFocusSourceAttributes = useRestoreFocusSource();
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
    <>
      <Avatar {...props} onClick={() => setIsOpen(true)} />
      <Drawer
        {...restoreFocusSourceAttributes}
        type={"overlay"}
        separator
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
        position="end"
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<DismissRegular fontSize={24} />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            User
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <Button
            appearance="secondary"
            icon={<ArrowExitFilled fontSize={24} />}
            onClick={() => {
              setIsOpen(false);
              sessionStorage.setItem("isAuthenticated", "false");
              window.location.reload();
            }}
          >
            {"Log out"}
          </Button>
        </DrawerBody>
      </Drawer>
    </>
  );
  //#endregion
};
//#endregion

//#region Component export
export default User;
//#endregion
