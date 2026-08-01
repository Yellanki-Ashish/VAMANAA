import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import DailyVerse from "../components/landing/DailyVerse";
import ExploreScriptures from "../components/landing/ExploreScriptures";
import Testimonials from "../components/landing/Testimonials";
import CallToAction from "../components/landing/CallToAction";

function Landing() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DailyVerse />
      <ExploreScriptures />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Landing;