import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "../features/editor/editorSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
    reducer: {
        editor: editorReducer,
        theme: themeReducer,
    },
});