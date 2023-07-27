import { useCounter, useFetch } from "../hooks";
import { BreakingBadQuote } from "./BreakingBadQuote";
import { LoadingComponent } from "./LoadingComponent";

export const MultipleCustomHooks = () => {
    
    const { counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    
    return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {
          isLoading
              ? <LoadingComponent />
              : <BreakingBadQuote author={ author } quote={ quote }/>   
        }
        <button 
          onClick={ () => increment(1) } 
          className="btn btn-primary"
          disabled={ isLoading }>
          Next quote
        </button>
    </>
  )
}
