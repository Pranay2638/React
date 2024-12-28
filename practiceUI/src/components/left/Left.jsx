import { CiSearch } from "react-icons/ci";
function Left() {
  return (
    <div id="left">
      <div id ="profile">profile</div>
      <div id ="search">
        <input type="text" id="find" placeholder="search" />
        <div id = "searchIcon"><CiSearch /></div>
      </div>
      <div id = "chats">
        <div id ="chat">chat1</div>
        <div id ="chat">chat2</div>
        <div id ="chat">chat3</div>
        <div id ="chat">chat4</div>
        <div id ="chat">chat5</div>
        <div id ="chat">chat6</div>
        <div id ="chat">chat7</div>
        <div id ="chat">chat8</div>
      </div>
    </div>
    )
}
export default Left;