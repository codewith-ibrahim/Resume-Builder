import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: [
    { id: "about", title: "About Me", content: "Write something here..." },
    { id: "skills", title: "Skills", content: "" },
  ],
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    addSection: (state, action) => {
      state.sections.push(action.payload);
    },
    updateSection: (state, action) => {
      const { id, content } = action.payload;
      const section = state.sections.find((sec) => sec.id === id);
      if (section) section.content = content;
    },
    deleteSection: (state, action) => {
      state.sections = state.sections.filter(
        (sec) => sec.id !== action.payload
      );
    },
  },
});

export const {addSection, updateSection, deleteSection} = editorSlice.actions;
export default editorSlice.reducer;