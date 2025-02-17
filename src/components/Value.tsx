import "../styles/Value.css"

const Value: React.FC = () => {
  return (
    <div className="value-container">
      <div className="header">OUR <span>VALUES</span></div>
      <div className="values">
        <div className="value">
          <div className="icon"><i className="fa-solid fa-lightbulb"></i></div>
          <div className="title">Innovation</div>
          <div className="desc">Staying at the forefront of technology to keep you ahead of the competition.</div>
        </div>

        <div className="value">
          <div className="icon"><i className="fa-solid fa-user-shield"></i></div>
          <div className="title">Security</div>
          <div className="desc">Implementing the highest standards of cybersecurity to protect your information.</div>
        </div>

        <div className='value'>
          <div className="icon"><i className="fa-solid fa-users-viewfinder"></i></div>
          <div className="title">Customer Focus</div>
          <div className="desc">Building strong relationships and delivering solutions that make a difference.</div>
        </div>

        <div className='value'>
          <div className="icon"><i className="fa-solid fa-heart"></i></div>
          <div className="title">Integrity</div>
          <div className="desc">Operating with honesty, transparency, and accountability in everything we do.</div>
        </div>
      </div>
    </div>
  )
}

export default Value