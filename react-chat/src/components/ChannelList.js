
export default function ChannelList(props) {

  //props.channels is an array of strings
  const newLiArray = props.channels.map((channelNameString) => {
    const elem = <li key={channelNameString}>{channelNameString}</li>;
    return elem;
  })

  return (
    <nav className="bg-secondary text-light py-3 h-100">
      <ul>
        {newLiArray}
      </ul>
    </nav>
  )
}