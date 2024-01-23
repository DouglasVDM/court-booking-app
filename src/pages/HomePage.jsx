import Auth0Features from "../components/Auth0Features";
import HeroBanner from "../components/HeroBanner";
import PageLayout from "../components/PageLayout";

const HomePage = () => (
  <PageLayout>
    <HeroBanner />
    <Auth0Features />
  </PageLayout>
);

export default HomePage;
