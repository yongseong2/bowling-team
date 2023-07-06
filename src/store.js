import { configureStore,createSlice } from '@reduxjs/toolkit'

const firstTeamMember = createSlice({
  name: "firstTeamMember",
  initialState:[]
})


export default configureStore({
  reducer: {
    firstTeamMember:firstTeamMember.reducer
  }
}) 