import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./TableCss.css";

const initialValuse = {
  projName: "",
  projVersion: "",
  whoUpdateProj: "",
  dateUpdateProj: "",
  prevVersionProj: "",
};
function UpperTable() {
  const [projData, setProjData] = useState(initialValuse);
  const [projects, setProjects] = useState([]);
  const [editedProjData, setEditedProjData] = useState({
    isEdit: false,
    projIndex: null,
  });
  const handlEditClick = (project, index) => {
    setProjData(project);
    setEditedProjData({
      isEdit: true,
      projIndex: index,
    });
  };
  const handlRemoveClick = (index) => {
    setProjects(
      projects.filter((project, projectIndex) => projectIndex !== index)
    );
  };
  const isFilledFields =
    projData.projName && projData.projVersion && projData.whoUpdateProj;

  const handlSubmitProject = (e) => {
    e.preventDefault();
    if (isFilledFields) {
      if (editedProjData.isEdit) {
        const editedData = projects;
        editedData.splice(editedProjData.projIndex, 1, projData);
        setProjects(editedData);
        setEditedProjData({
          isEdit: false,
          projIndex: null,
        });
      } else {
        setProjects((prevState) => [...prevState, projData]);
      }

      setProjData(initialValuse);
    }
  };

  const handlCleanProject = () => setProjData(initialValuse);

  return (
    <div className="wrapper">
      <div className="table-data">
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Проект</th>
              <th>Версия системы</th>
              <th>Кто обновил</th>
              <th>Дата обновления</th>
              <th>Прошлая версия</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => {
              return (
                <tr>
                  <td>{project.projName}</td>
                  <td>{project.projVersion}</td>
                  <td>{project.whoUpdateProj}</td>
                  <td>{project.dateUpdateProj}</td>
                  <td>{project.prevVersionProj}</td>
                  <td>
                    <div>
                      <Button
                        className="columnRowButton"
                        onClick={() => handlEditClick(project, index)}
                      >
                        Исправить
                      </Button>
                      <Button
                        className="columnRowButton"
                        onClick={() => handlRemoveClick(index)}
                      >
                        Удалить
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div>
        <form onSubmit={handlSubmitProject} onReset={handlCleanProject}>
          <input
            id="requiredFields"
            className="inputProjData"
            placeholder="Имя проекта"
            onChange={(e) =>
              setProjData((prevState) => ({
                ...prevState,
                projName: e.target.value,
              }))
            }
            value={projData.projName}
          />
          <input
            id="requiredFields"
            className="inputProjData"
            placeholder="Версия системы"
            onChange={(e) =>
              setProjData((prevState) => ({
                ...prevState,
                projVersion: e.target.value,
              }))
            }
            value={projData.projVersion}
          />
          <input
            id="requiredFields"
            className="inputProjData"
            placeholder="Кто обновил"
            onChange={(e) =>
              setProjData((prevState) => ({
                ...prevState,
                whoUpdateProj: e.target.value,
              }))
            }
            value={projData.whoUpdateProj}
          />
          <input
            className="inputProjData"
            placeholder="Дата обновления"
            onChange={(e) =>
              setProjData((prevState) => ({
                ...prevState,
                dateUpdateProj: e.target.value,
              }))
            }
            value={projData.dateUpdateProj}
          />
          <input
            className="inputProjData"
            placeholder="Прошлая версия"
            onChange={(e) =>
              setProjData((prevState) => ({
                ...prevState,
                prevVersionProj: e.target.value,
              }))
            }
            value={projData.prevVersionProj}
          />
          <div>
            <Button type="reset" className="ButtonsInput">
              Отчистить
            </Button>
            <Button
              disabled={!isFilledFields}
              type="submit"
              className="ButtonsInput"
            >
              {editedProjData.isEdit ? "Применить" : "Добавить"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default UpperTable;
