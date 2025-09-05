import { Post } from '~/layouts/post';

export function HelloWorld() {
  return (
    <Post 
      title="Hello world: how I built this site"
      date="2022-04-21"
      banner="/static/hello-world-banner.jpg"
      timecode="00:05:03:99"
    >
      <h2>How it all started</h2>
      <p>Back in 2020 I needed to update my portfolio site (as designers are wont to do). I thought I'd steer away from current trends and build a site that tapped into the 80s and 90s Cyberpunk aesthetic. The genre contains some of my favorite movies like Ghost in the Shell (1995), The Matrix (1999), and Akira (1988). That's where I borrowed few visual motifs like the bold katakana lettering on the homepage and the text decoding effect as a homage to the Matrix's "Digital rain" effect, which was itself inspired by Ghost in the Shell's opening credits. There's even a nod to Ghost in the Shell on my 404 page.</p>
      
      <h2>The first iteration</h2>
      <p>I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship.</p>
      
      <p>The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage.</p>
      
      <h2>Related Articles</h2>
      <p>If you're interested in diving deeper into the technologies and patterns I use for full-stack development, check out these articles:</p>
      <ul>
        <li><a href="/articles/advanced-react-patterns">Advanced React Patterns and TypeScript</a></li>
        <li><a href="/articles/fullstack-nodejs-architecture">Full Stack Architecture with Node.js</a></li>
      </ul>
    </Post>
  );
}