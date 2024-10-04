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
            <img src="/images/sai.jpg" alt=" " class="ppic" />
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
            also I was a <b>Department Coordinator</b> for the Institute
            Innovation Council (IIC) at PCCOE under the guidance of{" "}
            <a href="https://sites.google.com/view/madhuri-pagale">
              Prof. Madhuri Pagale
            </a>
            , Assistant Professor, AIML, and member of{" "}
            <a href="http://www.pccoepune.com/iic-home.php">IIC</a>.
            <br />
            <br />
            Participated in the <b>National Service Scheme (NSS)</b> , attending
            <b>the Winter Camp 2023</b> and coordinating{" "}
            <b>a Blood Donation Camp</b>.
            <br />
            <br />
            <b>Cultural & Decoration Team Lead</b> for the{" "}
            <b> Youth Conference 2024.</b>
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
            <b>
              {" "}
              Research Internship at Universiti Teknologi PETRONAS (UTP),
              Malaysia.
            </b>
            <br />
            <b>Topic</b>: Automated Detection of Diabetic Retinopathy Using
            Multiscale Residual Attention Network (MSRAN) Focused on developing
            a deep learning model (MSRAN) to classify diabetic retinopathy
            stages from retinal images, assisting in early detection to prevent
            vision loss in diabetic patients.
            <br />
            <br />
            Focused on developing a <b>deep learning model (MSRAN)</b> to
            classify diabetic retinopathy stages from retinal images, assisting
            in early detection to prevent vision loss in diabetic patients.
            <br />
            <br />
            Implemented <b>data preprocessing</b> techniques like CLAHE and
            median filtering for image enhancement and <b>data augmentation</b>{" "}
            for balanced training.
            <br />
            <br />
            Achieved <b>81.07% training accuracy</b> and{" "}
            <b>78.55% testing accuracy</b>, surpassing traditional CNN models.
            <br />
            <br />
            Gained hands-on experience in <b>PyTorch</b>, deep learning, and
            handling large-scale medical datasets.
            <br />
            <br />
            Overcame challenges related to <b>dataset imbalance,</b>{" "}
            overfitting, and computational resource constraints, refining my
            skills in model optimization.
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
            Developed the <b>' Smart Inventory & Sales Management ' system, </b>
            automating client operations and enabling real-time tracking, which
            streamlined processes and improved efficiency.
            <br />
            <br />
            Contributed to the <b>' Pharma Analytics Platform '</b>, enhancing
            pharmaceutical data analysis by implementing advanced analytics and
            reporting tools, supporting more effective decision-making.
            <br />
            <br />
            Completed an <b>Udemy course</b> on{" "}
            <b>e-commerce ASP.NET MVC application</b> as part of my training.
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
            Completed a <b>45-day industrial training program</b>, focusing on{" "}
            <b>web development</b> technologies. Developed responsive websites
            using HTML, CSS, JavaScript, and basic frameworks.
            <br />
            <br />
            Received the <b> "Problem Solver" award</b> for designing
            user-friendly and dynamic websites.
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
            <b>Diploma in Computer science</b> at{" "}
            <a href="https://gpmalvan.co.in/"> Government Polytecnic Malvan </a>
            <br />
            <br />
            <b>Girls Representative</b>, contributing to a supportive
            environment for female students.
            <br />
            <b>All-year, all-semester college topper.</b> <br />
            <br />
            Shortlisted for <b>Diploma Engineer Trainee</b> at{" "}
            <b>Larsen & Toubro (L&T)</b>.
            <br />
            <br />
            Along the way I squeezed in 2 internships at{" "}
            <a href="https://www.datastack.tech/"> Datastack </a>
            as a <b>Software developer- Grade A</b> and also at
            <a href="https://www.sumagoinfotech.com/"> Sumago Infotech </a>
            where i achived a <b>problem solver certificate</b> .
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
            <br />
            <br />
            Passed <b>CBSE exams</b> with a focus on <b>mathematics.</b>
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
            Early education at
            <a href="https://www.goldenhorizon-nashik.com/">
              {"  "}
              Golden Horizon School, Nashik{"  "}
            </a>
            <br />
            <br />
            Won a <b>Silver medal</b> for <b>Bharatnatyam</b> at the{" "}
            <b>National Level</b> and passed three Government Bharatnatyam exams
            with <b>Distinction</b>.
            <a href="https://www.cs.toronto.edu/~hinton/"> (certificates) </a>
            <br />
            <br />
            <b>Assistant Choreographer</b> for the school annual gathering.
            <br />
            <b>All-rounder in under-12 sports.</b>
            <a href="https://www.cs.toronto.edu/~hinton/">(Trophy)</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
