import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterslice";
const store = configureStore({
  reducer: {
    count: counter,
  },
});
export { store };
