import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: [
    { id: 1, title: "About", content: "" },
    { id: 2, title: "Skills", content: "" },
    { id: 3, title: "Experience", content: "" },
    { id: 4, title: "Education", content: "" },
    { id: 5, title: "Contact", content: "" },
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