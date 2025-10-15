import { useContext } from "react";
import { ConnectedUsersContext } from "../contexts/ConnectedUsersContext";

const HOOK_NAME = "useConnectedUsersContext";
const MUST_USE_CONTEXT = "ConnectedUsersContext";

export const useConnectedUsersContext = () => {
  const ctx = useContext(ConnectedUsersContext);

  if (!ctx) {
    throw new Error(
      `${HOOK_NAME} must be used within a <${MUST_USE_CONTEXT}.Provider>`
    );
  }

  return ctx;
};
