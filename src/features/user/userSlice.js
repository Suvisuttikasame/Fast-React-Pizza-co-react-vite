import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAddress from "../../services/apiGeocoding";

const initialState = {
  userName: "",
  status: "",
  position: {},
  address: "",
  error: "",
};

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const fetchAddress = createAsyncThunk("user/fetchAddress", async function () {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longtitude: positionObj.coords.longtitude,
  };

  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city}, ${addressObj?.postcode}, ${addressObj?.countryName}`;

  return { position, address };
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
