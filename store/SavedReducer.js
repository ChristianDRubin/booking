import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

const SavedSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      state.bookings.push({...action.payload});
    },
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
  },
});

export const { addPlace, setPlaces } = SavedSlice.actions;


export default SavedSlice.reducer;
