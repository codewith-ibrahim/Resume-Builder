// src/features/editor/editorSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  sections: [
    { id: 1, title: "About", content: "" },
    { id: 2, title: "Skills", content: [] },       // array of strings
    { id: 3, title: "Experience", content: [] },   // array of objects
    { id: 4, title: "Education", content: [] },    // array of objects
    { id: 5, title: "Contact", content: {} },      // object {name,email,phone,link}
  ],
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    updateAbout: (state, action) => {
      const about = state.sections.find((s) => s.title === "About");
      if (about) about.content = action.payload;
    },
    addSkill: (state, action) => {
      const skills = state.sections.find((s) => s.title === "Skills");
      if (skills) skills.content.push(action.payload);
    },
    removeSkill: (state, action) => {
      const skills = state.sections.find((s) => s.title === "Skills");
      if (skills) skills.content = skills.content.filter((_, i) => i !== action.payload);
    },

    // <-- ADD THIS: updateSkill -->
    updateSkill: (state, action) => {
      // action.payload = { index, value }
      const skills = state.sections.find((s) => s.title === "Skills");
      if (!skills) return;
      const { index, value } = action.payload;
      if (typeof index === "number" && index >= 0 && index < skills.content.length) {
        skills.content[index] = value;
      }
    },

    addExperience: (state, action) => {
      const exp = state.sections.find((s) => s.title === "Experience");
      if (exp) exp.content.push({ id: nanoid(), ...action.payload });
    },
    updateExperience: (state, action) => {
      const { id, field, value } = action.payload;
      const exp = state.sections.find((s) => s.title === "Experience");
      if (!exp) return;
      const job = exp.content.find((j) => j.id === id);
      if (job) job[field] = value;
    },
    removeExperience: (state, action) => {
      const exp = state.sections.find((s) => s.title === "Experience");
      if (exp) exp.content = exp.content.filter((j) => j.id !== action.payload);
    },

    addEducation: (state, action) => {
      const edu = state.sections.find((s) => s.title === "Education");
      if (edu) edu.content.push({ id: nanoid(), ...action.payload });
    },
    updateEducation: (state, action) => {
      const { id, field, value } = action.payload;
      const edu = state.sections.find((s) => s.title === "Education");
      if (!edu) return;
      const ed = edu.content.find((e) => e.id === id);
      if (ed) ed[field] = value;
    },
    removeEducation: (state, action) => {
      const edu = state.sections.find((s) => s.title === "Education");
      if (edu) edu.content = edu.content.filter((e) => e.id !== action.payload);
    },

    updateContact: (state, action) => {
      const contact = state.sections.find((s) => s.title === "Contact");
      if (contact) {
        contact.content = {
          ...contact.content,
          ...action.payload,
        };
      }
    },
  },
});

export const {
  updateAbout,
  addSkill,
  removeSkill,
  updateSkill,           // <-- exported action
  addExperience,
  updateExperience,
  removeExperience,
  addEducation,
  updateEducation,
  removeEducation,
  updateContact,
} = editorSlice.actions;

export default editorSlice.reducer;
