export const User = ({ user }) => (
  <section key={user.id} className="user" style={{ marginBottom: "1rem" }}>
    <div>
      <h2>Username: {user.username}</h2>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Email: {user.email}</p>
    </div>
    <div className="user-footer">
      <div className="footer-button">Edit</div>
      <div className="footer-button">Delete</div>
    </div>
  </section>
);
