import { DROP_FILE } from "./const";
export const dropFileAction = payload => {
  return {
    type: DROP_FILE,
    payload
  };
};
