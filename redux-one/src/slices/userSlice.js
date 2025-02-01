// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный экшен с использованием createAsyncThunk
export const fetchUser = createAsyncThunk(
  'user/fetch',  // Название экшена
  async (userId) => {  // Асинхронная функция
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;  // Возвращаем данные пользователя
  }
);

// Слайс для обработки состояния пользователя
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;  // Получаем данные пользователя
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;  // Обрабатываем ошибку
      });
  }
});

export default userSlice.reducer;
