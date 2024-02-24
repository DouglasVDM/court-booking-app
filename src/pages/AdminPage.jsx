import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";
import { getAdminResource } from "../services/message-service";

const AdminPage = () => {
  const [message, setMessage] = useState("");

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const accessToken = await getAccessTokenSilently();
      const { data, error } = await getAdminResource(accessToken);

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, [getAccessTokenSilently]);

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Admin Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves an <strong>admin message</strong> from an
              external API.
            </span>
            <span>
              <strong>
                Only authenticated users with the{" "}
                <code>read:admin-messages</code> permission should access this
                page.
              </strong>
            </span>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdminPage;
