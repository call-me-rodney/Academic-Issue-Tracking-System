import { LucideActivity } from "lucide-react"

const Card = () => {
  return (
    <div>
      <section className="main">
        <div className="main-top">
          <h1>Skills</h1>
          <i className="fas fa-user-cog">
            <LucideActivity />
          </i>
        </div>
        <div className="main-skills">
          <div className="card">
            <i className="icon">
              <LucideActivity />
            </i>
            <h3>Web Development</h3>
            <p>Join over one million students</p>
            <button>Get Started</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Card

