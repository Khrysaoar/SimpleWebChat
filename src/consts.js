import storage from "redux-persist/lib/storage";
import { red, orange, grey } from "@mui/material/colors";

export const excludedActions = ["persist/PERSIST", "persist/REHYDRATE"];

export const persistConfig = {
  key: "root",
  storage,
};

export const styles = {
  cardStyle: {
    overflow: "hidden",
  },
  cardContentStyle: {
    background: red[50],
    height: "400px",
    overflowY: "auto",
    marginRight: "-15px",
  },
  bgGradient: {
    background: `linear-gradient(to left, ${red[400]}, ${orange[300]})`,
    color: grey[100],
  },
};