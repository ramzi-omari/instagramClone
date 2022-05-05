import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* Left Section */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories></Stories>
        {/* Posts */}
        <Posts></Posts>
      </section>

      {/* Right Section */}
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20">
          {/* Mini Profile */}
          <MiniProfile></MiniProfile>
          {/* Suggessions */}
          <Suggestions></Suggestions>
        </div>
      </section>
    </main>
  )
}

export default Feed
