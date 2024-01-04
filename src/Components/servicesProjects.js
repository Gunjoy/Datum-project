import React, { useState } from "react";
import "./servicesProjcts.css";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";


export default function ServProj() {
    const [oneService, setOneService] = useState({
      nameOneServ: ""
    })
    const [arrService, setArrService] = useState([])

    const handleAddArrServ = (e) => {
      setArrService((prevstate) => [...prevstate,oneService])
      setOneService({
        nameOneServ: ""
      })
    }
    console.log("МАССИВ УСЛУГ ПОПОЛНИЛСЯ", arrService)
  
   const [projectServ, setProjService] = useState({
    nameProject: "" 
  })
  const [addedProjectServ, setAddedProjectServ] = useState([])

  const handleSubmitProjectServ = (e) => {
      e.preventDefault();
      setAddedProjectServ((prevState) => [...prevState, projectServ])
      setProjService({
        nameProject: ""
      })
  }
  //  console.log("Добавляемый проект" ,addedProjectServ)
      console.log("Добовляемая услуга", oneService)
  
  return (
    <div>
      <div>
        <Form onSubmit={handleSubmitProjectServ}>
          <div>
            <div>
              <input placeholder="Ведите имя проетка" onChange={(e) =>{
                setProjService((prevState) => ({
                  ...prevState,
                    nameProject: e.target.value
                }))
              }}
              value={projectServ.nameProject}
                >

              </input>
            </div>
            <div>
              <Button type="reset" >Отчистить</Button>  
              <Button type="submit" >Добавить</Button>
            </div>
          </div>
        </Form>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Проект</th>
              <th>Добавление услгуи</th>
              <th>Услуги</th>
            </tr>
          </thead>
          <tbody>
            {addedProjectServ.map((elem, index) => {
              
              return(
                <tr>
                  <td>{elem.nameProject}</td>
                  <td>
                    <input placeholder="Имя услуги" onChange={(e) => {
                      setOneService((prevstate) => ({
                        ...prevstate,
                        nameOneServ: e.target.value
                      }))
                    }} 
                    value={oneService.nameOneServ}/>
                    <Button onClick={handleAddArrServ}>Добавить</Button>
                  </td>
                  <td>{arrService.map((elemen, index) => {
                    return(
                      <div className="FirstDivForArrServ">
                        <div className="SecDivForArrServ">
                          <h3>{elemen.nameOneServ}, {index}</h3>
                        </div>
                      </div>
                    )
                  })}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
