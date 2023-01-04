import "./../styles/header.css";
export default function Body() {
  return (
    <div className="body">
      <div className="left-side">
        <a href="#" blank="#">
          Home
        </a>
        <p>PUBLIC</p>
        <div className="question">
          <img src="https://cdn-icons-png.flaticon.com/512/3601/3601499.png" />
          <h3>Questions</h3>
          <div></div>
        </div>
        <ul>
          <li>Tags</li>
          <li>Users</li>
          <li>Companies</li>
        </ul>
        <div className="collect">
          <p>COLLECTIVES</p>
        </div>

        <div className="star">
          <img src="https://cdn-icons-png.flaticon.com/512/3237/3237420.png" />
          <p>Explore Collectives</p>
        </div>
        <div className="team">
          <div className="team-text">
            <h4>Stack Overflow for Teams</h4>
            <p>– Start collaborating and sharing organizational knowledge.</p>
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/8421/8421995.png" />
          <button className="team-btn1">Create a free Team</button>
          <button className="team-btn2">Why Teams?</button>
        </div>
      </div>
      <div className="mid">
        <div className="mid-head  ">
          <h1>All Questions</h1>
          <button className="mid-btn1">Ask Question</button>
        </div>
        <div className="head2">
          <h3>23,366,698 questions</h3>
          <div className="head2-flexbox">
            <div>Newest</div>
            <div>Active</div>
            <div>Bountied</div>
            <div>Unanswered</div>
            <div>Mored</div>
          </div>
          <div class="dropdown">
            <span>Mouse over me</span>
            <div class="dropdown-content">
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
}
