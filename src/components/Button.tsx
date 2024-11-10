import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
      <button className='bg-[#55DDE0] p-[.66rem_3rem_.66rem_3rem] text-[black] rounded-[.5rem] text-[1.3rem] hover:bg-[#428e8e]'>{props.textName}</button>
    </>
  )
}

export default Button