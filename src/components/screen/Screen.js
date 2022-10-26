import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
// import { VscSearch } from "react-icons/vsc";
// import {RiCheckDoubleFill} from "react-icons/ri"
import Chat from "../chat/Chat";
import "./screen.css";

function Screen() {
  const [data] = useState([
    {
      image:
        "https://www.talk-business.co.uk/wp-content/uploads/2019/02/shutterstock_563534299.jpg",
      name: "Maya Kasuma",
      time: "3:48 PM",
      msg: "Yes OK!",
      // msg: `Yes OK! ${<RiCheckDoubleFill />} `               ,
      seen: 1,
      count: 1,
    },
    {
      image:
        "https://www.trickscity.com/wp-content/uploads/2018/06/anonymous-dp-for-boys.jpg",
      name: "Steve Ballmer",
      time: "2:45 PM",
      msg: "Developers, developers, develo...",
      count: 4,
    },
    {
      image: "https://sguru.org/wp-content/uploads/2017/06/rohit-800x533.jpg",
      name: "Stasa Benko",
      time: "10:04 AM",
      msg: "Call me when you can because...",
      count: 1,
    },
    {
      image:
        "https://www.whatsappimages.in/wp-content/uploads/2021/01/Mast-Dp-For-Whatsapp-Pics-Images.jpg",
      name: "Alice Whiteman",
      time: "6:13 PM",
      msg: "Yes that's my fave too",
      count: "",
      checkedd: 1,
      seen: 1,
      statues: "send",
    },
    {
      image:
        "https://i0.wp.com/cultofdigital.com/wp-content/uploads/2020/02/attractive-whatsapp-dp-5.jpg",
      name: "Clippy",
      time: "12:32 AM",
      msg: "Are you there?",
      count: "",
    },
    {
      image: "https://i.ytimg.com/vi/UggjNb5HlBs/maxresdefault.jpg",
      name: "Henry Starchan",
      time: "05/11",
      // msg: "typing...",
      count: "",
      seen: 1,
      statues: "typing",
    },
    {
      image:
        "https://www.teahub.io/photos/full/249-2492468_awesome-images-for-whatsapp-dp-profile-cute-dp.jpg",
      name: "Jihoon Seo",
      time: "05/11",
      msg: "Big jump",
      count: "",
      seen: 1,
      statues: "send",
    },
    {
      image:
        "https://www.wylieisd.net/cms/lib/TX01918453/Centricity/Domain/15323/20181004_195737.jpg",
      name: "Big Bakes Club",
      time: "05/11",
      msg: "Rebecca: Yum! Is it a cheesecake?",
      count: "",
    },
    {
      image:
        "https://www.trickscity.com/wp-content/uploads/2017/09/attitude-dp-for-girls.jpg",
      name: "Joao Pereira",
      time: "04/11",
      msg: "Opened",
      count: "",
      seen: 1,
      statues: "send",
    },
    {
      image:
        "https://cdn2.momjunction.com/wp-content/uploads/2019/07/Whatsapp-DP22.jpg",
      name: "Marty Yates",
      time: "05/11",
      msg: "hey, how are you?",
      count: "",
    },
    // {
    //   image: "h",
    //   name: "name",
    //   time: "time",
    //   msg: "hey, i m good",
    //   count: 2,
    // },
    // {
    //   image: "h",
    //   name: "name",
    //   time: "time",
    //   msg: "hey, i m good",
    //   count: 2,
    // },
    // {
    //   image: "h",
    //   name: "name",
    //   time: "time",
    //   msg: "hey, i m good",
    //   count: 2,
    // },
    // {
    //   image: "h",
    //   name: "name",
    //   time: "time",
    //   msg: "hey, i m good",
    //   count: 2,
    // },
    // {
    //   image: "h",
    //   name: "name",
    //   time: "time",
    //   msg: "hey, i m good",
    //   count: 2,
    // },
  ]);

  return (
    <div className="left-screen">
      <div className="left-heading">
        <span>Whatsapp Beta</span>
      </div>
      <div className="chat">
        <div className="chat-nav">
          <span className="logo">Chats</span>
          <div className="setting-logo">
            {/* <span>+</span> */}
            <span>
              <MdAdd />
            </span>
            <span>
              <FiSettings />
            </span>
            {/* <span>settings</span> */}
          </div>
        </div>
        <div className="left-search">
          <input
            type="text"
            // placeholder=`{'{Search or start new chat                                 L}'}''
            placeholder="Search or start new chat                                 L"
          />
        </div>
      </div>
      <div className="chat-main-content">
        {data.map((item) => {
          return <Chat items={item} />;
        })}

        {/* <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat /> */}
      </div>
    </div>
  );
}

export default Screen;
