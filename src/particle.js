import utils from './utils'


class Particle {

  constructor(x, y, radius, color, width, height, draw, resolveCollision, init) {


      this.x = x;
      this.y = y;
      this.velocity = {
        x: (Math.random() - 0.5) * 2.5,
        y: (Math.random() - 0.5) * 2.5
      };
      this.radius = radius;
      this.color = color;
      this.mass = 1;
      this.innerWidth = width;
      this.innerHeight = height;
      this.draw = draw;
      this.resolveCollision = resolveCollision;
      this.mouse = {
          x: 0,
          y: 0
      };
      this.opacity = 0;
      this.init = init;

      this.componentDidMount();
  }

  componentDidMount() {
    window.addEventListener('mousemove', event => {
      this.mouse = {
          x: event.clientX,
          y: event.clientY
        }
    })

    // window.addEventListener('resize', event => {
    //   // console.log('here', this.refs.canvas)
    //
    //   this.innerWidth = window.innerWidth;
    //   this.innerHeight = window.innerHeight;
    //   // this.init()
    // })
  }

  update(particles) {


      this.draw(this)
      // let { x, y, velocity, radius, color, mass } = this.state

      for (var i = 0; i < particles.length; i++) {
        if (this === particles[i]) continue;
        if (utils.distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {

          this.resolveCollision(this, particles[i])
        }
      }

      if (this.x - this.radius <= 0 || this.x + this.radius >= this.innerWidth) {
        this.velocity.x = -this.velocity.x;
      }
      if (this.y - this.radius <= 0 || this.y + this.radius >= this.innerHeight) {
        this.velocity.y = -this.velocity.y;
      }

      // console.log('mmm', utils.distance(this.mouse.x, this.mouse.y, this.x,this.y) < 30)
      // console.log('mmm', this.mouse.x)

      if (utils.distance(this.mouse.x, this.mouse.y, this.x, this.y) < 100 && this.opacity < 0.2) {
        // console.log('mmm', this.mouse.x)
        this.opacity += 0.02
      } else if (this.opacity > 0) {
          this.opacity -= 0.02
          this.opacity = Math.max(0, this.opacity)
      }

      this.x += this.velocity.x
      this.y += this.velocity.y
    }
}


export default Particle;
