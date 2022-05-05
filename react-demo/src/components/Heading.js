import React from 'react';

export default function Heading(props) {
    const content = "React Demo";
    return (
      <h1 className='bg-dark text-light p-3'>
        {content.toUpperCase()}
      </h1>
    )
  }
  