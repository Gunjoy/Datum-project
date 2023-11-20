import React, { useState } from "react";
import "./servicesProjcts.css";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function formInTable() {
  return (
    <div>
      <Form>
        <div className="TableInput">
          <div>
            <input />
          </div>
          <div>
            <input />
          </div>
          <div>
            <input />
          </div>
        </div>
      </Form>
    </div>
  );
}

const startValue = {
  nameProject: "",
};
export default function ServProj() {
  const [arrInputs, setArrInputs] = useState([formInTable]);

  const [project, setProject] = useState(startValue);
  const [projInTable, setProjInTable] = useState([]);

  const handleSubmitProject = (e) => {
    e.preventDefault();
    setProjInTable((prevState) => [...prevState, project]);
    setProject(startValue);
  };
  console.log("Project_IN_TABLE:", projInTable);
  console.log("project", project);
  // console.log("projcetHUI:", project);
  return (
    <div>
      <div>
        <h1 className="titleServisesProjects">Услуги Проектов</h1>
        <div>
          <div>
            <Form onSubmit={handleSubmitProject}>
              <div>
                <Button type="submit" className="creatServProjets">
                  Добавить услуги проекта
                </Button>
              </div>
              <input
                placeholder="Ведите имя проетка"
                onChange={(e) =>
                  setProject((prevState) => ({
                    ...prevState,
                    nameProject: e.target.value,
                  }))
                }
                value={project.nameProject}
              />
            </Form>
          </div>
          <Table className="tableServises">
            <thead>
              <tr>
                <th>Проект</th>
                <th>Добавление услгуи</th>
                <th>Услуги</th>
              </tr>
            </thead>
            <tbody>
              {projInTable.map((proj, index) => {
                return (
                  <tr>
                    <td>{proj.nameProject}</td>
                    <td></td>
                    <td>
                      <h1></h1>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
