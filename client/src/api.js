import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Item"],
  endpoints: (b) => ({
    getItems: b.query({ query: () => "/items", providesTags: ["Item"] }),
    addItem: b.mutation({
      query: (body) => ({ url: "/items", method: "POST", body }),
      invalidatesTags: ["Item"],
    }),
    deleteItem: b.mutation({
      query: (id) => ({ url: `/items/${id}`, method: "DELETE" }),
      invalidatesTags: ["Item"],
    }),
    updateItem: b.mutation({
      query: ({ id, name }) => ({ url: `/items/${id}`, method: "PUT", body: { name } }),
      invalidatesTags: ["Item"],
    }),
    getItem: b.query({
      query: (id) => `/items/${id}`,
      providesTags: ["Item"],
    }),
  }),
});

export const { useGetItemsQuery, useAddItemMutation, useDeleteItemMutation, useUpdateItemMutation, useGetItemQuery } = api;