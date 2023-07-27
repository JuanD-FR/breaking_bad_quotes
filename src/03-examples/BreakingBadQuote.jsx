import { useLayoutEffect, useRef, useState } from "react"

export const BreakingBadQuote = ({author, quote}) => {

  const pRef = useRef();
  const [boxSize, setBoxsize] = useState({width: 0, height: 0})
  useLayoutEffect(() => {
    const { width, height} = pRef.current.getBoundingClientRect();
    setBoxsize({ width, height })
  }, [quote])

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{display: 'flex'}}
        >
          <p ref={ pRef } className="mb-2"> { quote } </p>
          <footer className="blockquote-footer">{ author }</footer>
      </blockquote>

    </>
    
  )
}
