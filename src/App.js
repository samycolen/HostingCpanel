import "./App.css";
import styled from "styled-components";

const StyledHr = styled.hr`
  height: 1.5px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
  padding: 0;
  margin: 20px 0;
  border: 0;
`;
function App() {
  return (
    <div className="App">
      <div id="dhead" className="container">
        <div className="row">
          <div id="dpic">
            <img src="/images/me_new.jpg" alt=" " class="ppic" />
          </div>
          <div id="ddesc">
            <h1> Sai Choapde </h1>
            <h2>I like to train deep neural nets on large datasets 🧠🤖💥</h2>
            <div id="dico">
              <a href="https://twitter.com/karpathy">
                <img src="/images/ctwitter.svg" alt="" className="iico" />
              </a>
              <a href="https://github.com/saichopade">
                <img src="/images/cgithub.svg" alt="" className="iico" />
              </a>
              <a href="https://www.linkedin.com/in/sai-chopade/">
                <img src="/images/crss.svg" alt="" className="iico" />
              </a>
              <a href="https://www.youtube.com/@LearnitALL-i3o">
                <img src="/images/crss.svg" alt="" className="iico" />
              </a>
              <a href={`mailto:${"sayeechopade1981@gmail.com"}`}>
                <img src="/images/cemail.svg" alt="" className="iico" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <StyledHr />

      <div id="history" className="container">
        {/*PCCOE (done)*/}
        <div className="entry row">
          <div className="timespan">2022 - </div>
          <div className="ico">
            <div className="entry-dot"></div>
            <img src="/images/pccoe.png" alt="" />
          </div>
          <div className="desc">
            Currently in the final year at{" "}
            <a href="http://www.pccoepune.com/">
              {" "}
              Pimpri Chinchwad College of Engineering{" "}
            </a>
            (PCCOE), specializing in Artificial Intelligence and Machine
            Learning.
            <br />
            <br />
            also I was a Department Coordinator for the Institute Innovation
            Council (IIC) at PCCOE under the guidance of{" "}
            <a href="https://sites.google.com/view/madhuri-pagale">
              Prof. Madhuri Pagale
            </a>
            , Assistant Professor, AIML, and member of{" "}
            <a href="http://www.pccoepune.com/iic-home.php">IIC</a>.
            <br />
            <br />
          </div>
        </div>

        {/* UTP */}
        <div className="entry row">
          <div className="timespan">2024</div>
          <div className="ico">
            <div className="entry-dot"></div>
            <img
              src="/images/UTP.png"
              alt="UTP logo"
              style={{ maxwidth: "100px" }}
            />
          </div>
          <div className="desc">
            My PhD was focused on convolutional/recurrent neural networks and
            their applications in computer vision, natural language processing
            and their intersection. My adviser was
            <a href="http://vision.stanford.edu/">Fei-Fei Li</a> at the Stanford
            Vision Lab and I also had the pleasure to work with
            <a href="https://ai.stanford.edu/users/koller/">Daphne Koller</a>,
            <a href="http://www.robotics.stanford.edu/~ang/contact.html">
              Andrew Ng
            </a>
            , <a href="http://robots.stanford.edu/"> Sebastian Thrun</a> and
            <a href="http://vladlen.info/"> Vladlen Koltun </a> along the way
            during the first year rotation program.
            <br />
            <br />I designed and was the primary instructor for the first deep
            learning class Stanford -
            <a href="http://cs231n.stanford.edu/">
              CS 231n: Convolutional Neural Networks for Visual Recognition
            </a>
            . The class became one of the largest at Stanford and has grown from
            150 enrolled in 2015 to 330 students in 2016, and 750 students in
            2017.
            <br />
            <br />
            Along the way I squeezed in 3 internships at (a baby) Google Brain
            in 2011 working on learning-scale unsupervised learning from videos,
            then again in Google Research in 2013 working on large-scale
            supervised learning on YouTube videos, and finally at DeepMind in
            2015 working on the deep reinforcement learning team.
            <br />
            <br />
          </div>
        </div>

        {/* NSS (done) */}
        <div className="entry row">
          <div className="timespan">2023</div>
          <div className="ico">
            <div className="entry-dot"></div>
            <img src="/images/NSSlogo.png" alt="" />
          </div>
          <div className="desc">
            Joined{" "}
            <a href="http://www.pccoepune.com/nss.php">
              {" "}
              National Service Scheme{" "}
            </a>
            where attended Winter Camp 2023.
            <br />
            <br />
            Also, a Co-ordinator of the Blood Donation Camp.
            <br />
            Cultural & Decoration Team Lead-Youth Conference 2024.
            <br />
            <br />
          </div>
        </div>

        {/* Datastack (done)*/}
        <div className="entry row">
          <div className="timespan">2022</div>
          <div className="ico">
            <div className="entry-dot"></div>
            <img
              src="/images/Datastack.webp"
              alt=""
              style={{ maxwidth: "100px" }}
            />
          </div>
          <div className="desc">
            At Datastack developed the 'Smart Inventory & Sales Management'
            system, which automated operations and enabled real-time tracking
            for clients. This system helped streamline business processes and
            improve efficiency.
            <br />
            <br />
            Additionally, I contributed to the 'Pharma Analytics Platform,'
            enhancing pharmaceutical data analysis by implementing advanced
            analytics and reporting tools, thus supporting more effective
            decision-making in the pharmaceutical industry.
            <br />
            <br />
            Also,did Udemy course as my training : Completed e-commerce-asp
            <a href="https://github.com/saichopade/complete-ecommerce-aspnet-mvc-application">
              {" "}
              net-mvc-application
            </a>
            <br />
            <br />
          </div>
        </div>

        {/* Sumago Infoteh (done)*/}
        <div className="entry row">
          <div className="timespan">2021</div>
          <div className="ico">
            <div className="entry-dot"></div>
            <img
              src="https://web.sumagoinfotech.com/static/media/SUMAGO%20Logo.bd27e557adf1d3fcaf02.png"
              alt=""
              style={{ maxwidth: "100px" }}
            />
          </div>
          <div className="desc">
            completed a 45-day industrial training program at
            <a href="https://www.sumagoinfotech.com/">
              {" "}
              Sumago Infotech Pvt Ltd{" "}
            </a>
            , where I focused on web development technologies. This hands-on
            experience involved building responsive websites using HTML, CSS,
            JavaScript, and basic frameworks. we solved problem irelated in
            designing user-friendly and dynamic websites.
            <br />
            <br />
            Problem solver award{" "}
            <a href="https://www.cs.toronto.edu/~hinton/"> ( certificate )</a>
            <br />
            <br />
          </div>
        </div>

        {/* Government Polytecnic Malvan (done)  */}
        <div className="entry row">
          <div className="timespan">2019 - 2022</div>
          <div className="ico">
            <div className="entry-dot"></div>
            <img src="/images/GPM.png" alt="" style={{ maxwidth: "30px" }} />
          </div>
          <div className="desc">
            Diploma in Computer science at{" "}
            <a href="https://gpmalvan.co.in/"> Government Polytecnic Malvan </a>
            where I was honored to serve as the Girls Representative, I actively
            contributed to creating an inclusive and supportive environment for
            female students. I also maintained a consistent academic track
            record as the all-year, all-semester college topper, demonstrating
            my dedication to both leadership and academic excellence.{" "}
            <a href="https://www.cs.toronto.edu/~hinton/">(Trophy)</a>
            <br />
            <br />
            shortlisted for the position of “Diploma Engineer Trainee” at Larsen
            & Toubro (L&T), one of the leading companies in the engineering
            sector. This selection marked a significant milestone in my
            professional journey, positioning me for a strong start in the
            industry.
            <br />
            <br />
            Along the way I squeezed in 2 internships at{" "}
            <a href="https://www.datastack.tech/"> Datastack </a>
            which is a Campus selection as a Software developer- Grade A and
            also at
            <a href="https://www.sumagoinfotech.com/"> Sumago Infotech </a>
            achived a problem solver certificate.
            <a href="https://www.cs.toronto.edu/~hinton/">(certificate)</a>
            <br />
            <br />
          </div>
        </div>

        {/* Rosary English School (done) */}
        <div className="entry row">
          <div className="timespan">2016 - 2019</div>
          <div className="ico">
            <div className="entry-dot"></div>
            <img
              src="/images/RESLogo.png"
              alt=""
              style={{ maxwidth: "30px" }}
            />
          </div>
          <div className="desc">
            10th std at
            <a href="https://resmalvan.com/" style={{ color: "blue" }}>
              {" "}
              Rosary English School Malvan{" "}
            </a>{" "}
            where preprared and passed CBSE exam highly focused on math.
            <br />
            <br />
            <br />
          </div>
        </div>

        {/* GHS SCHOOL (done)*/}
        <div className="entry row">
          <div className="timespan">2009 - 2016</div>
          <div className="ico">
            <div className="entry-dot"></div>
            <img
              src="/images/GHSlogo.svg"
              alt=""
              style={{ maxwidth: "55px" }}
            />
          </div>
          <div className="desc">
            Early education from 1st to 7th grade at
            <a href="https://www.goldenhorizon-nashik.com/">
              {" "}
              Golden Horizon School, Nashik
            </a>
            , where I won a Silver medal as a Bharatnatyam dancer at the
            National Level in 6th grade.
            <a href="https://www.cs.toronto.edu/~hinton/"> (certificate) </a>
            Additionally, I passed three Government Bharatnatyam exams with
            Distinction.
            <br />
            <br />
            I served as the Assistant Choreographer for the entire school during
            the annual gathering.
            <br />
            All-rounder in under-12 sports.
            <a href="https://www.cs.toronto.edu/~hinton/">(Trophy)</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
