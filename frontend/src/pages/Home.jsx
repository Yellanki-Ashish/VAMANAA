import Greeting from "../dashboard/Greeting";
import SearchBar from "../dashboard/SearchBar";
import QuickActions from "../dashboard/QuickActions";
import DailyQuote from "../dashboard/DailyQuote";
import ContinueReading from "../dashboard/ContinueReading";
import FeaturedScriptures from "../dashboard/FeaturedScriptures";
import TrendingTopics from "../dashboard/TrendingTopics";
import DailyChallenge from "../dashboard/DailyChallenge";
import DailySloka from "../components/home/DailySloka";

function Home() {
  return (
    <>
      <Greeting />
      <SearchBar />
      <QuickActions />
      <DailyQuote />
      <ContinueReading />
      <FeaturedScriptures />
      <TrendingTopics />
      <DailyChallenge />
      <DailySloka />
    </>
  );
}

export default Home;