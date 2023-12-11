import React from 'react'

const Content = () => {
   const handleNameChange = () => {
        const names = ['Kiana','Kaylani','Amy','Andrew'];
        const int = Math.floor(Math.random() * 4);
        return names[int];
      }
      
    const handleClick = () => {
      console.log('You clicked it')
    }

    const handleClick2 = (name) => {
      console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {
      console.log(e.target.innerText)
    }

    return (
    <main>
        <p onDoubleClick={handleClick}>
          Hello {handleNameChange()}, Lets learn to code!
        </p>
        <button onClick={handleClick}>Click It</button>
        <button onClick={() => handleClick2(`Josh`)}>Click It</button>
        <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  )
}

export default Content
