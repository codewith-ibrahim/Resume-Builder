import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "../features/editor/editorSlice";
import themeReducer from "../features/theme/themeSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        editor: editorReducer,
        theme: themeReducer,
        auth: authReducer,
    },
});