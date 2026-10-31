import Img from './Img.jsx'
import Tilt from './Tilt.jsx'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Tilt className="about card" max={4}>
          <div className="about-copy z2">
            <h2>About <span>FoodieHub</span></h2>
            <p>We bring you the best food experience with fresh ingredients, amazing recipes and a passion for great taste. Every dish is made to order and every recipe is tested in our own kitchen.</p>
            <a href="#contact" className="btn btn-primary">Learn More</a>
          </div>
          <div className="about-img">
            <Img src="https://reluctantgourmet.com/wp-content/uploads/2024/04/modern-day-restaurant-kitchen-chefs-d3.jpg" fb="chef" alt="Head chef of FoodieHub" />
          </div>
        </Tilt>
      </div>
    </section>
  )
}
