import Auth0Features from "../components/Auth0Features";
import HeroBanner from "../components/HeroBanner";
import PageLayout from "../components/PageLayout";

const HomePage = () => (
  <PageLayout>
    <Auth0Features />
    <HeroBanner />
  </PageLayout>
);

export default HomePage;
