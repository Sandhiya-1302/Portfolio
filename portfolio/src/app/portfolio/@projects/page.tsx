"use client";
import React from "react";
import "./styles/port.css";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { projectDetails } from "./data";

export default function Project() {
  return (
    <>
      <section id="projects">
        <div
          className="body"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <h1
              style={{ color: "#e31e45", fontWeight: "bold", fontSize: "4rem" }}
              className="display-5"
            >
              <u>Projects</u>
            </h1>
          </div>

          <div
            className="project-div"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {projectDetails.map((project, index) => {
              return (
                <>
                  <div>
                    <Image
                      src={project.src}
                      fluid
                      className="img"
                      alt="Image"
                    />

                    <ListGroup.Item as="li" className="listItem">
                      <div className="ms-2 me-auto" style={{marginTop: '8px', fontSize: '1rem'}}>
                        <div className="fw-bold">{project.title}</div>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item as="li" className="listItem1">
                      <div className="ms-2 me-auto" style={{display: 'flex', justifyContent: 'center', fontSize: '1.2rem'}}>
                        <div>{project.description}</div>
                      </div>
                    </ListGroup.Item>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
