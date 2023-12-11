import React from 'react'

const Content = () => {
   const handleNameChange = () => {
        const names = ['Kiana','Kaylani','Amy','Andrew'];
        const int = Math.floor(Math.random() * 4);
        return names[int];
      }
      
    return (
    <main>
        <p>
          Hello {handleNameChange()}, Lets learn to code!
        </p>
    </main>
  )
}

export default Content
