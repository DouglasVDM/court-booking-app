import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "../components/PageLayout";

const ProfilePage = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="content-layout">
        <div className="profile__headline">
          <h2 className="profile__title">{user.name}</h2>
          <span className="profile__description">{user.email}</span>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProfilePage;
