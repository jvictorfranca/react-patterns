import Pokemons from "./Pokemons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


const TanstackQuery_Impl_Pokemons = () => {

  return (

          <QueryClientProvider client={queryClient}>
            <Pokemons />
          </QueryClientProvider>

  );
};

export default TanstackQuery_Impl_Pokemons;