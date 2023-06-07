import "./information.css";

const InformationTab = () => {
  return (
    <div className="information-container">
      <div className="information-header">
        <h1>About Us</h1>
      </div>
      <div className="information-topics">
        <div className="topic">
          <h1 className="topic-title">How it all started</h1>
          <p className="topic-content">
            {" "}
            We are a global online marketplace, where people come together to
            make, sell, buy and collect unique items. We're also a community
            pushing for positive change for small businesses, people, and the
            planet. Here are some of the ways we're making a positive impact,
            together.
          </p>
        </div>
        <div className="topic">
          <h1 className="topic-title">Support independent creators</h1>
          <p className="topic-content">
            {" "}
            We don't have any warehouses - just millions of people selling the
            things they love. We make the whole process easy, helping you
            connect directly with makers to find something extraordinary.
          </p>
        </div>
        <div className="topic">
          <h1 className="topic-title">Privacy Guaranteed</h1>
          <p className="topic-content">
            {" "}
            Your privacy is the highest priority of our dedicated team. And if
            you ever need assistance, we are always ready to step in for
            support.
          </p>
        </div>
      </div>
    </div>
  );
};
export default InformationTab;
