// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getFromLocalStorage = (key, defaultValue) => {
  if (typeof window === "undefined") return defaultValue; // SSR fix
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
};

// -------- SIGNUP --------
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ username, email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.email === email)) {
      throw new Error("User already exists");
    }

    const user = { id: Date.now(), username, email, password };
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    const token = "fake-token-" + user.id;
    localStorage.setItem("authToken", token);
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ id: user.id, username, email })
    );

    return { id: user.id, username, email, token };
  }
);

// -------- LOGIN --------
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) throw new Error("Invalid credentials");

    const token = "fake-token-" + user.id;
    localStorage.setItem("authToken", token);
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ id: user.id, username: user.username, email })
    );

    return { id: user.id, username: user.username, email, token };
  }
);

// -------- INITIAL STATE --------
const initialState = {
  user: getFromLocalStorage("currentUser", null),
  token:
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null,
  status: "idle",
  error: null,
};

// -------- SLICE --------
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
        localStorage.removeItem("currentUser");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // signup
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = {
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
        };
        state.token = action.payload.token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // login
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = {
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
        };
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
