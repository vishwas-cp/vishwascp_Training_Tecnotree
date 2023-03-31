import logo from './logo.svg';
import './App.css';
import './css/style.css';
import './css/simpleLightbox.css';

function App() {
  return (
    <>
    <div className="App">
     
     <div class="container">
    <nav class="main-nav" id="mainNav">
      <div class="nav-logo">
       
        <div class="img-logo">
          <a href="index.html">
            <img src="./img/logo.png" alt="Logo"/>
          </a>
         </div>
         <img src="./img/svg/menu.svg" id="mainMenu" alt="Menu"/>
      </div>
      <ul class="nav-links" id="mainLink">
        <li class="active"><a href="#">About</a></li>
        <li><a href="./portfolio.html">Portfolio</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>

    <header class="main-banner-about">
       <div class="overl"></div>
       <div class="title">
         <h1>I'm Vishwas Cp</h1><hr class="hr"/>
         <h2>Photographer</h2>
       </div>
    </header>
 
    <div id="about"></div><br/>
    <section class="main-section-about">
      <h5 class="title-txt">About Me<hr/></h5>
      <div class="about-me">
         <div class="about">
            <h1><em>I love photography</em></h1>
            <p>My name is Vishwas Cp  I photograph with heart and soul and love to make people happy with my photos!
            Because for me, there is nothing more beautiful than a shining customer's face. That's what I work for and that's what I love!
            Through photos, fleeting moments are preserved so that they can be experienced again at any time.</p>
         </div>

         <div class="info">
            <div class="about-info">
              <div class="my-image"></div>
              <img src="img/home-bg-2.jpg" alt="Me" class="me"/>
            </div>
            <h1>Vishwas Cp</h1>
            <div class="social">
             <a href="">
               <img src="img/social/facebook.png"/>
             </a>
              <a href="">
               <img src="img/social/twitter.png"/>
             </a>
             <a href="">
               <img src="img/social/pinterest.png"/>
              </a>
             <a href="">
               <img src="img/social/instagram.png"/>
              </a>
            </div>
            <p>Every moment, big or small, in infinitely precious and deserves to be captured. Because photos are memories - and what could be better than memories?</p>
         </div>
       </div><br/><br/><br/>
       <h5 class="title-txt">I'm really good at:<hr/></h5>
       <div class="list">
         <div class="list-item">
           <h2>Photography</h2>
           <div class="progress-bar">
              <div class="progress-val pv-95">95%</div>
           </div>
         </div>
         <div class="list-item">
           <h2>Photoshop</h2>
           <div class="progress-bar">
              <div class="progress-val pv-90">90%</div>
           </div>
         </div>
         <div class="list-item">
           <h2>Design</h2>
           <div class="progress-bar">
              <div class="progress-val pv-75">75%</div>
           </div>
         </div>
       </div>

       <div class="list-two">
         <div class="list-item">
           <h6>14+</h6>
           <h4>Partners</h4>
         </div>

         <div class="list-item">
           <h6>204+</h6>
           <h4>Projects Done</h4>
         </div>

         <div class="list-item">
           <h6>104+</h6>
           <h4>Happy Clients</h4>
         </div>

         <div class="list-item">
           <h6>1364+</h6>
           <h4>Photos</h4>
         </div>
       </div>
    </section>
    <div class="some-margin"></div>
    <footer class="main-footer">
      <h4>Vishwas Cp&copy;2023</h4>
    </footer>
  </div>
  <script src="js/jquery.min.js"></script>
  <script src="js/app.js"></script>





    </div>
    </>
  );
}


export default App;
