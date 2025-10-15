import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const HOOK_NAME = "useUserContext";
const MUST_USE_CONTEXT = "UserContext";

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      `${HOOK_NAME} must be used within a <${MUST_USE_CONTEXT}.Provider>`
    );
  }

  return context;
}
