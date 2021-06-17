import React from "react";
//added
import {useState} from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectProjectApp,
  setCreateNewModelForm,
  createModel
} from "../../redux/projectAppSlice";

//added
var tempArrayAll=new Array();
var tempData={} as any;
//added
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const ModelForm = () => {
  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();
  const fieldRef= React.createRef() as any;
  const typeRef= React.createRef() as any;
  const projectId = projectAppState.project.projectId;
  //added
  //1. change input boxes to empty on on addRow() DONE
  //2. send tempData JSON to modelData through dispatch
  //3. add overflow DONE AUTOMACTICALLY
  //4. changed the invocation to formChangeHandler to be call once on submission.
  //5. check for duplicate name submissions. DONE
  const forceUpdate = useForceUpdate();
  var tempArray=new Array();



  //added
  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewModelForm({ fieldName, value }));
  };

  const addModel = () => {
    if (
      projectAppState.createNewModelForm.modelName === "" ||
      tempData === {}
    ) {
      console.log("ERROR: There is nothing to add.");
    } else {
      const model = {
        modelName: projectAppState.createNewModelForm.modelName,
        modelMetadata: tempData,
        projectId: projectId,
      };
      dispatch(createModel(model));
      tempArrayAll=new Array();
      tempData={} as any;
      tempArray=new Array();
    }
  };

  const addRow = () => {
    if(tempArray.length<2){
      alert("You must fill out all fields before submitting.");
      tempArray=[];
      fieldRef.current.value="";
      typeRef.current.value="";
      return;
    }

    else if(tempArray[0] in tempData){
      alert("Field name already exists. All names must be unique.");
      tempArray=[];
      fieldRef.current.value="";
      typeRef.current.value="";
      return;
    }

    tempArrayAll.push(tempArray);
    tempData[tempArray[0]]=tempArray[1];
    for(var key in tempData){ /*alert("key: "+key+" , value: "+tempData[key]);*/}
    forceUpdate();
    tempArray=[];
    fieldRef.current.value="";
    typeRef.current.value="";
  }

  var generateAddedRows = () => {
    var rows=tempArrayAll.map((i) => <tr><th style={{color: "lightslategray"}}>{i[0]}</th> <th style={{color: "lightslategray"}}>{i[1]}</th></tr>);
    return rows
  }

  var addField=(event: any)=>{tempArray[0]=event.target.value;}

  var addType=(event: any)=>{tempArray[1]=event.target.value;}

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Model Name</Form.Label>
          <Form.Control
            name="modelName"
            type="text"
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Table id="metadataTable" striped bordered hover size="sm">

            {generateAddedRows()}

            <tr>
              <th>Field</th>
              <th>Type</th>
            </tr>
            <tr>
              <td>
                <Form.Control
                  ref={fieldRef}
                  name="field"
                  type="text"
                  onChange={addField}
                />
              </td>
              <td>
                <Form.Control
                  ref={typeRef}
                  name="type"
                  type="text"
                  onChange={addType}
                />
              </td>
              <td>
                <Button onClick={addRow}> + </Button>
              </td>
            </tr>
          </Table>
        </Form.Group>
        <Button onClick={addModel}>Save</Button>
      </Form>
    </div>
  );
};

export default ModelForm;
