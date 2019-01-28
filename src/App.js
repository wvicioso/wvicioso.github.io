import React, { Component } from 'react';
import './App.css';
import Particle from './particle.js'


const colors = [
  '#80deea90',
  '#4dd0e190',
  '#26c6da90',
  '#00bcd490',
  '#00acc190',
  '#0097a790',
  '#00838f90',
  '#00606490'
]


class App extends Component {

  constructor() {
    super();
    // let num = this.getRandomInt(700)
    this.state = {
      particles: [],
      canvas: {
        width: 0,
        height: 0
      },
      c: '',
    }
    this.animate = this.animate.bind(this);

  }

  componentDidMount() {
    let canvas = this.refs.canvas
    let c = canvas.getContext('2d');

    this.setState({
      c: c,
      canvas: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    })

    window.addEventListener('resize', event => {
      this.setState({
        canvas: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      })
      this.refs.canvas.width = window.innerWidth;
      this.refs.canvas.height = window.innerHeight;
      this.init()
    })
    let _this = this
    setTimeout(function(){
      _this.init()
      _this.animate()
    }, 10);
  }

  randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
  }

  randomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)]
  }

  distance(x1, y1, x2, y2) {
      const xDist = x2 - x1
      const yDist = y2 - y1

      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
  }


  rotate(velocity, angle) {
      const rotatedVelocities = {
          x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
          y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
      };

      return rotatedVelocities;
  }

  resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

      // Grab angle between the two colliding particles
      const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

      // Store mass in var for better readability in collision equation
      const m1 = particle.mass;
      const m2 = otherParticle.mass;

      // Velocity before equation
      const u1 = this.rotate(particle.velocity, angle);
      const u2 = this.rotate(otherParticle.velocity, angle);

      // Velocity after 1d collision equation
      const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
      const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

      // Final velocity after rotating axis back to original location
      const vFinal1 = this.rotate(v1, -angle);
      const vFinal2 = this.rotate(v2, -angle);

      // Swap particle velocities for realistic bounce effect
      particle.velocity.x = vFinal1.x;
      particle.velocity.y = vFinal1.y;

      otherParticle.velocity.x = vFinal2.x;
      otherParticle.velocity.y = vFinal2.y;
    }
  }

  draw(state) {
    let { c } = this.state
    c.beginPath();
    c.arc(state.x, state.y, state.radius, 0, Math.PI * 2, false);
    c.strokeStyle = state.color;
    c.save();
    c.globalAlpha = state.opacity;
    c.fillStyle = state.color;
    c.fill();
    c.restore();
    c.stroke();
    c.closePath();
  }

  init() {
    let particles = [];
    let { width, height } = this.state.canvas
    let num = (width * height) / 7000

    for (let i = 0; i < num; i++) {
      const color = this.randomColor(colors)
      const radius = 25
      let x = this.randomIntFromRange(radius, width - radius);
      let y = this.randomIntFromRange(radius, height - radius);

      if (i !== 0) {
        for (let j = 0; j < particles.length; j++) {
          if (this.distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
            x = this.randomIntFromRange(radius, width - radius);
            y = this.randomIntFromRange(radius, height - radius);

            j = -1
          }
        }
      }

      particles.push(new Particle(x, y, radius, color, width, height, this.draw.bind(this), this.resolveCollision.bind(this), this.init.bind(this) ));

    }
    this.setState({
      particles
    })
  }

  animate() {
    requestAnimationFrame(this.animate)
    let c = this.state.c
    let canvas = this.state.canvas
    let particles = this.state.particles
    c.clearRect(0, 0, canvas.width, canvas.height)

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    particles.forEach(particle => {
      particle.update(particles);
    });

  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight} style={{ background: '#fff'}}></canvas>
          <div className="main-text">
            <h1>Wellington Vicioso</h1>
            <h2>Full-Stack Software Developer</h2>
            <p>Under Construction...</p>
          </div>
      </div>
    );
  }
}

export default App;

//
// renderLanguages() {
//
// }
//
// getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }




// {this.renderStars(50)}
// {this.renderLanguages()}

// <div className="App">
//   <header className="App-header">
//     <h1>Wellington Vicioso</h1>
//     <h2>New York City</h2>
//     <h2>Software Developer</h2>
//   </header>
// </div>
