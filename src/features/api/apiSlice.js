import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://alibackend.duckdns.org',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth?.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: ['User', 'Order', 'Product'], // Example, change based on endpoints
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login', // use the actual endpoint from Postman
                method: 'POST',
                body: credentials,
            }),
        }),
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Product'],
        }),
        // Add more endpoints based on the collection
    }),
});

export const { useLoginMutation, useGetProductsQuery } = apiSlice;
