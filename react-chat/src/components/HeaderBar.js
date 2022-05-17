const DEFAULT_USER_NAMES = [null, "Penguin", "Parrot", "Zebra"]

//define the HeaderBar component
export default function HeaderBar(props) {

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    const userObj = {
      userId: whichUser.toLowerCase() || null,
      userName: whichUser || null
    }
    console.log(userObj);
    //do something with userObj!
  }

  //convenience
  const userButtons = DEFAULT_USER_NAMES.map((userName) => {
    return (
      <button className="btn user-icon" key={userName} 
        name={userName} onClick={handleClick}
      >
        <img src={'img/' + userName + '.png'} alt={userName + " avatar"} />
      </button>
    )
  })

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Messenger</h1>
      <div>
        {userButtons}
      </div>
    </header>
  )

}