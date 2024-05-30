// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "React-Project",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "React-Project",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "React-Project",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
   
//   ];

//   const projects_ds = [
//     {
//       title: "React-Project",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "React-Project",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "React-Project",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
   
//   ];
//   const projects_others = [
//     {
//       title: "React-Project",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "React-Project",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "React-Project",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
   
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Let's look into some of my projects till now.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Web Development</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Machine Learning</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Python</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row >
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                     <Row >
//                         {
//                           projects.map((projects_ds, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...projects_ds}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                     <Row >
//                         {
//                           projects.map((projects_others, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...projects_others}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>                    
//                       </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="bgimgryt"></img>
//     </section>
//   )
// }


import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "React-Project",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "React-Project",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "React-Project",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const projects_ds = [
    {
      title: "ML-Project",
      description: "Machine Learning",
      imgUrl: projImg1,
    },
    {
      title: "ML-Project",
      description: "Machine Learning",
      imgUrl: projImg2,
    },
    {
      title: "ML-Project",
      description: "Machine Learning",
      imgUrl: projImg3,
    },
  ];

  const projects_others = [
    {
      title: "Python-Project",
      description: "Python Development",
      imgUrl: projImg1,
    },
    {
      title: "Python-Project",
      description: "Python Development",
      imgUrl: projImg2,
    },
    {
      title: "Python-Project",
      description: "Python Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Let's look into some of my projects till now.</p>
                  <>
                  </>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Machine Learning</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Python</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects_ds.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects_others.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}

