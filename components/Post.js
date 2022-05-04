import React from "react"
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"

// function Post({ id, username, userImg, img, caption }) {
const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          src="https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5"></DotsHorizontalIcon>
      </div>

      {/* Images */}
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className="object-cover w-full"
        alt=""
      />

      {/* Button */}
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <HeartIcon className="btn"></HeartIcon>
          <ChatIcon className="btn"></ChatIcon>
          <PaperAirplaneIcon className="btn"></PaperAirplaneIcon>
        </div>
        <BookmarkIcon className="btn"></BookmarkIcon>
      </div>

      {/* caption */}
      <div className="">
        <p className="p-5 truncate">
          <span className="font-bold mr-1">{username} </span>
          {caption}
        </p>
      </div>

      {/* comments */}

      {/* input */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7"></EmojiHappyIcon>
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  )
}

export default Post
