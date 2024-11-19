import './App.css';

function App() {
  return (
    <div>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark page-navbar gradient">
          <div className="container">
      <a className="navbar-brand logo" href="#">F.P</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item item">
          </li><li className="nav-item item">
            <a className="nav-link" href="#portofolio">Portofolios</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link" href="#hobbies">Hobbies</a>
          </li>
        </ul>
      </div>
      <a href="#" className="btn btn-success download-template" role="button" aria-disabled="true">Download</a>
    </div>
  </nav>
  <main className="page cv-page">
    <section className="cv-block block-intro border-bottom">
      <div className="container">
        <div className="avatar">
          <img className="img-fluid rounded-circle" src="./assets/img/avatar.jpg" />
        </div>
        <p>Hello! I am <strong>Fredrick Palangan</strong>.I am a student at the Faculty of Computer Science at
          Universitas Klabat, majoring in Informatics. I have
          a strong interest in design and web.</p>
        <a href="#" className="btn btn-outline-success">Hire Me</a>
      </div>
    </section>
    <section className="cv-block info">
      <div className="container">
        <div className="work-experience group" id="portofolio">
          <h2 className="text-center">Portofolio</h2>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>UI System Information Laundry</h3>
                <h4 className="organization">UI Laundry</h4>
              </div>
              <div className="col-md-6">
                <time className="period">2024</time>
              </div>
            </div>
            <p className="text-muted">I created the UI System Information Laundry in 2024 to streamline the laundry management process, providing an intuitive and efficient user interface. This platform is designed to cater to laundry service providers by offering seamless user navigation, detailed order tracking, and a secure transaction system to ensure reliable operations.</p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>Web Noodle Shop</h3>
                <h4 className="organization">Noodle Shop.</h4>
              </div>
              <div className="col-md-6">
                <time className="period">2023</time>
              </div>
            </div>
            <p className="text-muted">I created the Noodle Shop website in 2023 using only HTML and CSS to provide a simple and user-friendly platform for noodle lovers. The website showcases a clean layout, attractive design, and easy navigation to ensure a pleasant experience for visitors.</p>
          </div>
        </div>
        <div className="education group" id="education">
          <h2 className="text-center">Education</h2>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>Vocational High School Graduate</h3>
                <h4 className="organization">SMA Advent Makassar</h4>
              </div>
              <div className="col-md-6">
                <time className="period">2019 - 2022</time>
              </div>
            </div>
            <p className="text-muted">I completed my education at SMA Advent Makassar, In high school, I chose the science track because I was fascinated by natural sciences and exploring various aspects of it. However, what truly excited me was the computer subject. I loved learning about technology, understanding how software works, and experimenting with new things in the field of computers. This is where my passion for computers began to grow, and it has become one of my favorite fields to this day.</p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>Student of Informatics&lt;</h3>
                <h4 className="organization">Universitas Klabat</h4>
              </div>
              <div className="col-md-6">
                <time className="period">2022-2026</time>
              </div>
            </div>
            <p className="text-muted">I'm currently pursuing my studies in Informatics at Universitas Klabat. This program has helped me develop skills in creating websites and designing with Figma. Through my education, I am enhancing my technical and creative abilities, preparing me for a career in the dynamic field of web development and design.</p>
          </div>
        </div>
        <div className="group" id="skills">
          <div className="row">
            <div className="col-md-6">
              <div className="skills info-card">
                <h2>Skills</h2>
                <h3>HTML</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                  </div>
                </div>
                <h3>FIGMA</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                  </div>
                </div>
                <h3>JavaScript</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info info-card">
                <h2>Contact Info</h2>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-android-calendar icon" />
                  </div>
                  <div className="col-9">
                    <span>18 June 2004</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-person icon" />
                  </div>
                  <div className="col-9">
                    <span>Fredrick Palangan</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-ios-telephone icon" />
                  </div>
                  <div className="col-9">
                    <span>0898057884</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-at icon" />
                  </div>
                  <div className="col-9">
                    <span>s22210431@Student.unklab.ac.id</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hobbies group" id="hobbies">
          <h2 className="text-center">Hobbies</h2>
          <p className="text-center text-muted">My main hobby is playing the piano. I really enjoy listening to classical and hymnal music, which inspires my passion for playing. In addition, I have a great love for spending time on the computer, exploring new things and enhancing my skills. These hobbies bring joy and creativity to my life.</p>
        </div>
      </div>
    </section>
    <footer className="page-footer">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.facebook.com/fdrickplgn"><i className="ion-social-facebook" title="Facebook" /></a>
          <a href="https://www.instagram.com/fdricck/"><i className="ion-social-instagram-outline" title="Instagram" /></a>
        </div>
      </div>
    </footer>
  </main></div>
    </div>
  );
};

export default App;
