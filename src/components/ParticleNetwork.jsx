
/* Particle Network Component */
class ParticleNetwork {
  constructor(canvas, options) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.options = {
      particleColor: 'rgba(255, 255, 255, 0.5)',
      background: 'rgba(0, 0, 0, 0)',
      interactive: true,
      speed: 0.5,
      density: 10000,
      ...options
    };
    
    this.init();
  }
  
  init() {
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
    
    if (this.options.interactive) {
      this.mouse = { x: null, y: null, radius: 100 };
      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });
    }
    
    this.createParticles();
    this.animate();
  }
  
  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createParticles() {
    const particleCount = Math.floor((this.canvas.width * this.canvas.height) / this.options.density);
    this.particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      const size = Math.random() * 2 + 1;
      const speedX = (Math.random() - 0.5) * this.options.speed;
      const speedY = (Math.random() - 0.5) * this.options.speed;
      
      this.particles.push({ x, y, size, speedX, speedY });
    }
  }
  
  drawParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.options.background;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    for (let i = 0; i < this.particles.length; i++) {
      this.ctx.beginPath();
      this.ctx.arc(this.particles[i].x, this.particles[i].y, this.particles[i].size, 0, Math.PI * 2);
      this.ctx.fillStyle = this.options.particleColor;
      this.ctx.fill();
      
      // Draw connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = this.options.particleColor;
          this.ctx.lineWidth = 0.2;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
      
      // Mouse interaction
      if (this.options.interactive && this.mouse.x && this.mouse.y) {
        const dx = this.particles[i].x - this.mouse.x;
        const dy = this.particles[i].y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.mouse.radius) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = this.options.particleColor;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.stroke();
          
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (this.mouse.radius - distance) / this.mouse.radius * 2;
          
          this.particles[i].speedX += forceDirectionX * force;
          this.particles[i].speedY += forceDirectionY * force;
        }
      }
      
      // Particle movement
      this.particles[i].x += this.particles[i].speedX;
      this.particles[i].y += this.particles[i].speedY;
      
      // Bounce off edges
      if (this.particles[i].x < 0 || this.particles[i].x > this.canvas.width) {
        this.particles[i].speedX *= -1;
      }
      if (this.particles[i].y < 0 || this.particles[i].y > this.canvas.height) {
        this.particles[i].speedY *= -1;
      }
    }
  }
  
  animate() {
    requestAnimationFrame(() => this.animate());
    this.drawParticles();
  }
}