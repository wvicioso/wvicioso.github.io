(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,i,e){t.exports=e(19)},15:function(t,i,e){},17:function(t,i,e){},19:function(t,i,e){"use strict";e.r(i);var n=e(0),a=e.n(n),o=e(6),s=e.n(o),h=(e(15),e(2)),r=e(3),c=e(8),l=e(7),d=e(9),u=e(1),y=(e(17),e(4)),v=e.n(y),m=function(){function t(i,e,n,a,o,s,r,c,l){Object(h.a)(this,t),this.x=i,this.y=e,this.velocity={x:2.5*(Math.random()-.5),y:2.5*(Math.random()-.5)},this.radius=n,this.color=a,this.mass=1,this.innerWidth=o,this.innerHeight=s,this.draw=r,this.resolveCollision=c,this.mouse={x:0,y:0},this.opacity=0,this.init=l,this.componentDidMount()}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("mousemove",function(i){t.mouse={x:i.clientX,y:i.clientY}})}},{key:"update",value:function(t){this.draw(this);for(var i=0;i<t.length;i++)this!==t[i]&&v.a.distance(this.x,this.y,t[i].x,t[i].y)-2*this.radius<0&&this.resolveCollision(this,t[i]);(this.x-this.radius<=0||this.x+this.radius>=this.innerWidth)&&(this.velocity.x=-this.velocity.x),(this.y-this.radius<=0||this.y+this.radius>=this.innerHeight)&&(this.velocity.y=-this.velocity.y),v.a.distance(this.mouse.x,this.mouse.y,this.x,this.y)<100&&this.opacity<.2?this.opacity+=.02:this.opacity>0&&(this.opacity-=.02,this.opacity=Math.max(0,this.opacity)),this.x+=this.velocity.x,this.y+=this.velocity.y}}]),t}(),f=["#80deea90","#4dd0e190","#26c6da90","#00bcd490","#00acc190","#0097a790","#00838f90","#00606490"],w=function(t){function i(){var t;return Object(h.a)(this,i),(t=Object(c.a)(this,Object(l.a)(i).call(this))).state={particles:[],canvas:{width:0,height:0},c:""},t.animate=t.animate.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(i,t),Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=this,i=this.refs.canvas.getContext("2d");this.setState({c:i,canvas:{width:window.innerWidth,height:window.innerHeight}}),window.addEventListener("resize",function(i){t.setState({canvas:{width:window.innerWidth,height:window.innerHeight}}),t.refs.canvas.width=window.innerWidth,t.refs.canvas.height=window.innerHeight,t.init()});var e=this;setTimeout(function(){e.init(),e.animate()},10)}},{key:"randomIntFromRange",value:function(t,i){return Math.floor(Math.random()*(i-t+1)+t)}},{key:"randomColor",value:function(t){return t[Math.floor(Math.random()*t.length)]}},{key:"distance",value:function(t,i,e,n){var a=e-t,o=n-i;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2))}},{key:"rotate",value:function(t,i){return{x:t.x*Math.cos(i)-t.y*Math.sin(i),y:t.x*Math.sin(i)+t.y*Math.cos(i)}}},{key:"resolveCollision",value:function(t,i){var e=t.velocity.x-i.velocity.x,n=t.velocity.y-i.velocity.y;if(e*(i.x-t.x)+n*(i.y-t.y)>=0){var a=-Math.atan2(i.y-t.y,i.x-t.x),o=t.mass,s=i.mass,h=this.rotate(t.velocity,a),r=this.rotate(i.velocity,a),c={x:h.x*(o-s)/(o+s)+2*r.x*s/(o+s),y:h.y},l={x:r.x*(o-s)/(o+s)+2*h.x*s/(o+s),y:r.y},d=this.rotate(c,-a),u=this.rotate(l,-a);t.velocity.x=d.x,t.velocity.y=d.y,i.velocity.x=u.x,i.velocity.y=u.y}}},{key:"draw",value:function(t){var i=this.state.c;i.beginPath(),i.arc(t.x,t.y,t.radius,0,2*Math.PI,!1),i.strokeStyle=t.color,i.save(),i.globalAlpha=t.opacity,i.fillStyle=t.color,i.fill(),i.restore(),i.stroke(),i.closePath()}},{key:"init",value:function(){for(var t=[],i=this.state.canvas,e=i.width,n=i.height,a=e*n/7e3,o=0;o<a;o++){var s=this.randomColor(f),h=this.randomIntFromRange(25,e-25),r=this.randomIntFromRange(25,n-25);if(0!==o)for(var c=0;c<t.length;c++)this.distance(h,r,t[c].x,t[c].y)-50<0&&(h=this.randomIntFromRange(25,e-25),r=this.randomIntFromRange(25,n-25),c=-1);t.push(new m(h,r,25,s,e,n,this.draw.bind(this),this.resolveCollision.bind(this),this.init.bind(this)))}this.setState({particles:t})}},{key:"animate",value:function(){requestAnimationFrame(this.animate);var t=this.state.c,i=this.state.canvas,e=this.state.particles;t.clearRect(0,0,i.width,i.height),e.forEach(function(t){t.update(e)})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("canvas",{ref:"canvas",width:window.innerWidth,height:window.innerHeight,style:{background:"#fff"}}),a.a.createElement("div",{className:"main-text"},a.a.createElement("h1",null,"Wellington Vicioso"),a.a.createElement("h2",null,"Full-Stack Software Developer"),a.a.createElement("p",null,"Under Construction...")))}}]),i}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},4:function(t,i){t.exports={randomIntFromRange:function(t,i){return Math.floor(Math.random()*(i-t+1)+t)},randomColor:function(t){return t[Math.floor(Math.random()*t.length)]},distance:function(t,i,e,n){var a=e-t,o=n-i;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2))}}}},[[10,2,1]]]);
//# sourceMappingURL=main.56da12ba.chunk.js.map