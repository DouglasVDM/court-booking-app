# Court Booking App

## [Auth0 Developer Hub on Github](https://github.com/auth0-developer-hub/spa_react_javascript_hello-world/blob/basic-authentication/src/services/external-api.service.js)


## Git Branching Naming Convention

### Regular Branches

#### main
The default production branch in a Git repository that needs to be permanently stable. Developers can merge changes into the master branch only after code review and testing. All collaborators on a project must keep the master branch stable and updated.

#### develop

The main development branch that serves as a central hub for developers to integrate new features, bug fixes, and other changes. Its primary purpose is to be the place for making changes to keep the developers from implementing them directly in the master branch. Developers test, review, and merge the changes from the dev into the master branch.

#### test
The branch that contains all the code ready for QA and automation testing. QA testing is necessary before implementing any change in the production environment to maintain a stable codebase.


## Branch Category Words
- ### Bugfix branch.
  
  The bugfix branch contains the code with bugs that require prompt fixes. It can be the rejected code from feature branches that needs fixing before implementation.
- ### hotfix branch.
  The hotfix branch is a place for implementing a temporary solution into a buggy code without adhering to the usual procedure. The hotfix branch is used in an emergency and when a fast fix is needed. Developers merge the hotfix branch directly into the production branch and later into the development branch.
- ### feature branch. 
  A feature branch serves to add, reconfigure, or remove a feature. The feature branch is based on the development branch. After the changes are made, developers merge the feature branch back into the development branch.
- ### Experimental branch. 
  This branch serves as a place for developing new features or ideas that are not part of a release or a sprint. It is a branch for trying out new things.
- #### WIP branch.
  Devs use WIP (work in progress) b
ranches to develop or try out new features. These branches may not necessarily be part of the regular development workflow. WIP branches are project-specific and often informal, with no specific or standardized rules.
- ### Merging branch. 
  A merging branch is a temporary branch used for resolving merge conflicts. Conflicts can arise when merging the latest development and a feature or hotfix branch into another branch. The merging branch is also useful when combining two branches of a feature developed by multiple contributors. This process involves merging, verifying, and finalizing the changes.

Keep branch names lowercase and separating the words with hyphens or slashes.
Using Hyphens and Slashes as Separators

Example: `douglasvdm/feature/booking-form`
<github username>/<category word>/<short-description-separated-by-hyphens>

[reference this doc](https://phoenixnap.com/kb/git-branch-name-convention)

October 2024
# User Stories #
Here are user stories for an MVP tennis club court booking app, incorporating both admin and member roles with the booking limitations you've mentioned:

### **Admin User Stories**

1. **As an admin,** I want to be able to manage court availability and schedule, so that I can control when courts are open for bookings.
   - **Acceptance Criteria:** 
     - Admin can set court availability for specific dates and times.
     - Admin can block out specific dates or times for maintenance or events.

2. **As an admin,** I want to view, edit, or cancel any court bookings made by members or visitors, so that I can resolve scheduling conflicts or handle cancellations.
   - **Acceptance Criteria:**
     - Admin can view all bookings.
     - Admin can modify or delete any bookings.
     - System sends notifications to members or visitors when their booking is modified or canceled.

3. **As an admin,** I want to view a summary of court usage, so that I can monitor how often courts are being booked.
   - **Acceptance Criteria:** 
     - Admin can generate reports or view dashboards showing daily, weekly, and monthly bookings.

---

### **Member User Stories**

1. **As a member,** I want to be able to book a tennis court up to 2 weeks in advance, so that I can plan my games ahead of time.
   - **Acceptance Criteria:**
     - Members can view court availability up to 14 days from the current date.
     - Members can select an available court and time slot to book.
     - System limits bookings to a 2-week window.

2. **As a member,** I want to receive confirmation of my booking via email or app notification, so that I know my reservation is confirmed.
   - **Acceptance Criteria:**
     - System sends an email or app notification confirming the booking details.
     - Notification includes date, time, and court number.

3. **As a member,** I want to cancel or modify my booking, so that I can adjust my plans if needed.
   - **Acceptance Criteria:**
     - Members can cancel their bookings through the app.
     - Members can modify their booking to select a different available time slot.
     - System sends confirmation of changes.

---

### **Visitor User Stories** (To be implemented later)

1. **As a visitor,** I want to be able to book a tennis court for the upcoming week, so that I can reserve a spot for casual play.
   - **Acceptance Criteria:**
     - Visitors can view availability and book courts only within the first 7 days from the current date.
     - Visitors cannot book more than 7 days in advance.

2. **As a visitor,** I want to receive a booking confirmation via email, so that I know my reservation is confirmed.
   - **Acceptance Criteria:**
     - System sends an email confirming the booking details (date, time, court number).

---

### **Additional User Stories for the Future**

- **As a visitor or member,** I want to be able to pay for court bookings online, so that the process is quick and easy.
  
- **As an admin,** I want to manage different membership levels, so that I can assign different booking privileges based on the member's tier.

Great! Implementing this as a **React Progressive Web App (PWA)** with a **relational database** in a **monolithic architecture** is a solid approach for an MVP. Below is a high-level breakdown of the architecture, technology stack, and steps to help guide you through building the tennis court booking app.

### **Tech Stack Overview**

1. **Frontend:**
   - **React (with PWA features):** Provides the responsive and interactive user interface.
   - **React Router:** For handling different routes such as login, booking calendar, etc.
   - **Axios/Fetch API:** For making API requests to the backend.
   - **State Management:** React Context API or Redux for managing global states like user data, bookings, and UI states.

2. **Backend:**
   - **Node.js** with **Express:** To build the server-side logic of the monolith.
   - **Sequelize or TypeORM (for Node.js):** ORM for interacting with the relational database.
   - **Relational Database:** MySQL, PostgreSQL, or SQLite (for local development).

3. **Database:**
   - **Relational Database (MySQL/PostgreSQL/SQLite):** Use tables for `Users`, `Bookings`, `Courts`, `Members`, etc., and establish relationships between these entities.

4. **Deployment:**
   - **Monolithic Backend:** Serve both the backend API and the static files (React frontend) from the same server (Node.js).
   - **Hosting:** Consider hosting on platforms like Heroku, AWS, or DigitalOcean for simplicity in deploying a monolithic Node.js app.

---

### **Key Features for the MVP**

1. **Authentication & Authorization**
   - Admin and members will have different access levels.
   - Use **JWT** (JSON Web Tokens) for authentication.
   - Admin routes (e.g., managing court schedules, deleting bookings) should be protected and accessible only to admins.

2. **Booking System Logic**
   - **Members:** Can book courts up to 2 weeks in advance.
   - **Visitors:** Only allowed to book courts up to 1 week in advance (future implementation).
   - **Admins:** Can manage bookings and court availability for any period.

3. **Database Schema Example**

```sql
-- Users table (includes members, visitors, admins)
CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin', 'member', 'visitor'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courts table
CREATE TABLE Courts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  available BOOLEAN DEFAULT TRUE
);

-- Bookings table
CREATE TABLE Bookings (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Users(id),
  court_id INT REFERENCES Courts(id),
  booking_date DATE,
  start_time TIME,
  end_time TIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **Steps to Build the App**

---

#### **Frontend (React PWA)**

1. **Set up React with PWA features:**
   - Use **Create React App** with PWA template:
     ```bash
     npx create-react-app tennis-booking-app --template cra-template-pwa
     ```
   - Enable service workers to make the app available offline, load faster, and installable on mobile.

2. **Implement Routing with React Router:**
   - Create routes like `/login`, `/bookings`, `/admin`, `/schedule`.
   - Example routing setup:
     ```jsx
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/bookings" element={<BookingCalendar />} />
         <Route path="/admin" element={<AdminDashboard />} />
       </Routes>
     </BrowserRouter>
     ```

3. **Components & State Management:**
   - Create reusable components like **Calendar** (for booking), **CourtCard**, and **BookingForm**.
   - Use **React Context API** or **Redux** to manage global state for user authentication and bookings.

4. **Booking Calendar:**
   - Use a calendar library like **react-big-calendar** or **fullcalendar-react** to display available court times.
   - Only show booking slots 2 weeks in advance for members, and 1 week for visitors.

---

#### **Backend (Node.js with Express)**

1. **Set Up Node.js with Express:**
   - Initialize the project:
     ```bash
     mkdir backend && cd backend
     npm init -y
     npm install express sequelize mysql2 jsonwebtoken bcryptjs
     ```

2. **User Authentication:**
   - Implement user registration and login using JWT for authentication.
   - **Bcrypt.js** can be used to hash passwords.

   Example login route:
   ```js
   app.post('/login', async (req, res) => {
     const { email, password } = req.body;
     const user = await User.findOne({ where: { email } });
     if (!user || !bcrypt.compareSync(password, user.password)) {
       return res.status(401).send('Invalid credentials');
     }
     const token = jwt.sign({ id: user.id, role: user.role }, 'secret_key');
     res.json({ token });
   });
   ```

3. **Booking Logic:**
   - Implement routes like:
     - `/api/bookings`: To create, modify, or delete bookings.
     - `/api/courts`: For admin to manage court availability.
     - `/api/bookings/:userId`: To fetch user-specific bookings.

   Example booking route:
   ```js
   app.post('/bookings', authenticateJWT, async (req, res) => {
     const { courtId, bookingDate, startTime, endTime } = req.body;
     const { userId, role } = req.user;

     const isMember = role === 'member';
     const isVisitor = role === 'visitor';

     const bookingLimit = isMember ? 14 : 7;
     const dateDiff = Math.ceil((new Date(bookingDate) - new Date()) / (1000 * 60 * 60 * 24));

     if (dateDiff > bookingLimit) {
       return res.status(403).send(`You can only book up to ${bookingLimit} days in advance`);
     }

     const booking = await Booking.create({ userId, courtId, bookingDate, startTime, endTime });
     res.json(booking);
   });
   ```

4. **Relational Database Setup:**
   - Use **Sequelize** (or **TypeORM**) as your ORM to manage migrations, models, and relationships.

   Example Sequelize model for `User`:
   ```js
   const User = sequelize.define('User', {
     name: { type: Sequelize.STRING, allowNull: false },
     email: { type: Sequelize.STRING, allowNull: false, unique: true },
     password: { type: Sequelize.STRING, allowNull: false },
     role: { type: Sequelize.ENUM('admin', 'member', 'visitor'), defaultValue: 'visitor' }
   });
   ```

---

### **Deployment and Scaling**

1. **Monolith Deployment:**
   - Deploy the Node.js app (serving both the API and the React frontend) on platforms like **Heroku** or **AWS Elastic Beanstalk**.
   - Use **NGINX** as a reverse proxy for handling requests to the React frontend and Node.js API.

2. **Database Hosting:**
   - Use **Amazon RDS** (for relational databases like MySQL/PostgreSQL) to handle your database.

---

By following these steps, you’ll be able to build an MVP for a tennis court booking system using React as a PWA, with a monolithic architecture in Node.js, and a relational database to handle user and booking data.

Great! Now that the domain has been purchased, you're ready to move forward with deploying the app once the development is complete. Here are the next steps to take advantage of the domain:

### **Next Steps for Domain Integration and Deployment**

1. **Set Up Hosting:**
   - Choose a hosting platform that will support your monolithic app. Some popular choices include:
     - **Heroku:** Easy deployment for monolithic apps with Node.js and React.
     - **DigitalOcean:** For more control over server configurations.
     - **Vercel:** Excellent for deploying React apps, though you may need a separate backend hosting for the Node.js server.
     - **AWS Elastic Beanstalk:** Offers a managed environment for deploying full-stack apps.

2. **Connect the Domain:**
   - Update the **DNS settings** with the hosting platform you choose. This will allow the domain to point to the server where your app is hosted.
   - Ensure you have an SSL certificate for secure HTTPS communication. Platforms like Heroku and Vercel often handle this automatically, or you can use **Let's Encrypt**.

3. **Deploy the App:**
   - Once the app is ready, deploy both the **frontend (React PWA)** and **backend (Node.js server)**.
   - If using a monolithic setup, your backend will serve the React frontend from a `/public` directory or similar setup.

4. **Domain Name Configuration:**
   - Ensure that the React app is configured with the correct base URL of the domain in the environment variables. For example, in React, you can set:
     ```bash
     REACT_APP_API_URL=https://yourdomain.com/api
     ```

5. **Testing:**
   - After deployment, thoroughly test the app for responsiveness, PWA functionality (like offline support), and overall user experience on your domain.

This process will get your court booking app live on your custom domain!

Adding payment functionality for floodlights and annual membership into the tennis court booking app can enhance the user experience and simplify the payment process for members. Here's how you can approach this feature from a technical perspective:

### **Steps for Implementing Payments for Floodlights and Membership**

#### **1. Payment Gateway Integration**

To enable payments, you'll need to integrate a payment gateway. Some popular options include:
- **Stripe** (recommended for ease of use and robust API).
- **PayPal** (widely trusted and commonly used).
- **Square** or **Braintree** (other great alternatives).

You can implement both **floodlight payments** and **membership payments** through the same payment gateway integration.

#### **2. Database Schema Updates**

You’ll need to update your database to accommodate payment records for floodlights and membership.

**Membership Payments Table:**
```sql
CREATE TABLE MembershipPayments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Users(id),
  amount DECIMAL(10, 2),
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expiry_date DATE,
  status ENUM('active', 'expired'),
  transaction_id VARCHAR(255) -- from payment gateway
);
```

**Floodlight Payments Table:**
```sql
CREATE TABLE FloodlightPayments (
  id SERIAL PRIMARY KEY,
  booking_id INT REFERENCES Bookings(id),
  user_id INT REFERENCES Users(id),
  amount DECIMAL(10, 2),
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  transaction_id VARCHAR(255) -- from payment gateway
);
```

#### **3. Membership Payment Flow**

- **Annual Membership Payment**:
  - Create a separate page where users can pay for their annual membership.
  - The page will display the membership details, amount due, and payment form.
  - Once payment is successful, store the `payment_date` and calculate the `expiry_date` (usually one year from the payment date).
  - Regularly check the `expiry_date` to determine if the membership has expired.
  - The membership renewal can be triggered by an email reminder or a notification within the app as the expiry date approaches.

**Membership Payment Flow Example:**
```js
// Stripe integration (client-side example)
const handlePayment = async () => {
  const response = await fetch('/api/create-membership-payment', { method: 'POST' });
  const { clientSecret } = await response.json();

  const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        name: 'Member Name',
      },
    },
  });

  if (result.error) {
    // Handle error
  } else {
    if (result.paymentIntent.status === 'succeeded') {
      // Handle successful payment (store in database)
    }
  }
};
```

#### **4. Floodlight Payment Flow**

- **Floodlight Payment for Bookings**:
  - When a member or visitor books a court, provide an option to pay for floodlight use if they plan to play at night.
  - Include a toggle or option for "Floodlights required" in the booking form.
  - Calculate and add the floodlight fee to the total booking cost before the user confirms and pays.
  - Store the floodlight payment separately but associate it with the booking ID.

**Floodlight Payment Flow Example:**
- When booking a night session, show the floodlight option:
  ```jsx
  const [floodlight, setFloodlight] = useState(false);
  const handleFloodlightToggle = () => setFloodlight(!floodlight);

  // In the booking total, add floodlight charge if selected
  const totalCost = floodlight ? baseCost + floodlightFee : baseCost;
  ```

#### **5. Backend Payment Processing**

Create a route in the backend for processing payments (both membership and floodlight payments):

```js
// Example: Route for processing floodlight payments
app.post('/api/process-floodlight-payment', authenticateJWT, async (req, res) => {
  const { bookingId, userId, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: 'usd',
      metadata: { integration_check: 'accept_a_payment' },
    });

    // After payment succeeds, store the transaction in the database
    await FloodlightPayment.create({
      booking_id: bookingId,
      user_id: userId,
      amount: amount,
      transaction_id: paymentIntent.id
    });

    res.send({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: 'Payment failed' });
  }
});
```

#### **6. User Interface Changes**

1. **For Floodlight Payment**:
   - Modify the **booking form** to include an option for floodlight usage.
   - Include floodlight fees in the total amount payable.
   - Display payment options at the end of the booking flow.
   
2. **For Membership Payment**:
   - Create a **Membership Page** where users can pay or renew their membership.
   - Show membership status (e.g., **active** or **expired**) and send reminders when it’s close to expiring.

#### **7. Notifications and Reminders**

- Send users **reminders** via email or in-app notifications when their **membership is about to expire**.
- After booking a court, send users **payment confirmation** emails for floodlight and membership payments.

---

### **User Stories for Payments**

1. **As a member,** I want to pay for floodlight use when booking a court, so that I can use the lights during my game.
   - **Acceptance Criteria:**
     - When booking a court in the evening, members can select an option to include floodlight usage.
     - The floodlight charge is added to the total cost.
     - The user can pay for floodlight usage through the app before arriving.

2. **As a member,** I want to pay for my annual membership through the app, so that I can maintain my membership status.
   - **Acceptance Criteria:**
     - Members can view their membership status and renewal date.
     - Members can pay for annual membership and receive a confirmation of the payment.
     - The system updates the expiry date after successful payment.

3. **As an admin,** I want to view floodlight payment transactions, so that I can track payments made for court bookings.
   - **Acceptance Criteria:**
     - Admins can view all floodlight payments associated with bookings.
     - Admins can generate reports for membership and floodlight payments.

---

By implementing this payment system, you'll enhance user experience by streamlining payments and allowing members to handle these transactions directly within the app. You can also manage memberships more efficiently and increase overall transparency for the club's financial management.

# Time Estimate #
Estimating the time required for developing a tennis club court booking app with the features can vary based on several factors, including the team's experience, the complexity of features, and the technology stack. Here's a rough breakdown of the major components along with estimated time frames:

### **Time Estimates for Each Component**

1. **Project Setup and Planning** (1-2 weeks)
   - Define requirements and finalize user stories.
   - Set up project structure and select tech stack.
   - Create wireframes or mockups for the UI.

2. **Frontend Development** (4-6 weeks)
   - **Basic UI Components** (1-2 weeks)
     - Implement layout, forms, and basic navigation.
   - **Booking System** (2-3 weeks)
     - Develop the booking calendar, booking form, and floodlight options.
     - Integrate payment gateway for floodlights.
   - **Membership Page** (1-2 weeks)
     - Create membership payment flow and integrate payment gateway.
   - **PWA Implementation** (1 week)
     - Enable offline capabilities and service worker configuration.

3. **Backend Development** (4-6 weeks)
   - **API Development** (2-3 weeks)
     - Set up authentication, user management, and booking endpoints.
   - **Payment Processing** (1-2 weeks)
     - Implement membership and floodlight payment processing routes.
   - **Database Schema Design** (1 week)
     - Design and implement database tables and relationships.

4. **Testing and QA** (2-3 weeks)
   - Unit testing for frontend and backend components.
   - Integration testing for booking and payment flows.
   - User acceptance testing with potential users.

5. **Deployment and Launch** (1-2 weeks)
   - Set up hosting, configure domain, and deploy the app.
   - Monitor for issues post-launch and perform any hotfixes.

### **Total Estimated Time: 12-19 Weeks**

### **Considerations**
- **Experience Level:** A more experienced team may complete tasks more quickly.
- **Feature Changes:** If the business logic changes significantly, this could extend the timeline.
- **Testing and Feedback:** Allow for additional time if extensive user feedback is needed or if iterative changes are planned.

### **Conclusion**
This is a rough estimate, and the actual timeline may vary based on the specific details of the project. It’s a good practice to build in some buffer time for unforeseen challenges, especially with integrations like payment gateways.
