import { configureStore } from "@reduxjs/toolkit";

import layerReducer from "./Slices/LayerSlice";
import projectReducer from "./Slices/ProjectSlice";

export const store = configureStore({
  reducer: {
    layer: layerReducer,
    project: projectReducer,
  },
});
