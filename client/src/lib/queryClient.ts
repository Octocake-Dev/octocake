import toast from "react-hot-toast";

export const QueryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000 * 5,
      retry: false,

      onError: (err: any) => {
        if ("message" in (err as Error)) {
          toast.error((err as Error).message);
        }
      },
    },
  },
};
