export const QueryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000 * 5,
      retry: false,
    },
  },
};
