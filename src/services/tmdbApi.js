import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
    reducerPath: "tmdbApi",
    baseQuery: fetchBaseQuery({  
    baseUrl: "https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles",
    prepareHeaders: (headers) => {
    headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPIDAPI_KEY);
        headers.set(
            "X-RapidAPI-Host",
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        );
        return headers;
    },
    }),
    endpoints: (builder) => ({
        getMovies: builder.query({ query: () => "" }),
    }),
}); 
