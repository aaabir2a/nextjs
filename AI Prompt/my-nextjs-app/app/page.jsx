import '@components/Feed'
import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className="w-full flex-center flex-col" >
      <h1 className ="head-text text-center">
        Discover and Share
        <br className="max-md:hidden"/>
        <span className="orange-gradient text-center">Ai-Powered Prompt</span>
      </h1>
      <p>shafdguhr iahreoigf</p>
      <Feed/>
    </section>
  )
}

export default Home