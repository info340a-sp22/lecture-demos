
export default function ChannelNav(props) {

  //props.channels is an array of strings
  const newLiArray = props.channels.map((channelNameString) => {
    const elem = (
      <li className="list-item" key={channelNameString}>
        <a href="">#{channelNameString}</a>
      </li>
      );
    return elem;
  })

  return (
    <nav className="channel-list bg-secondary text-light py-3 h-100">
      <ul>
        {newLiArray}
      </ul>
    </nav>
  )
}