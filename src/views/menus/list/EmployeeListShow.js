/**
 * Employee List Show Function
 * @author yaminzaw
 * @create 06/08/2022
 */
import React from "react";
import {
  CCol,
  CRow,
  CLabel,
  CInput,
  CInputRadio,
  CSelect,
  CButton,
  CImg,
} from "@coreui/react";

const EmployeeListShow = (props) => {
  let {
    id,
    handleChangeId,
    name,
    handleChangeName,
    chooseDept,
    selectDept,
    deptData,
    choosePosition,
    selectPosition,
    positionData,
  } = props;

  return (
    <>
      <CRow>
        <CCol lg="1"></CCol>
        <CCol
          lg="10"
          style={{
            border: "1px solid black",
            padding: "30px",
            backgroundColor: "rgb(242, 242, 242)",
            boxShadow: "5px 10px #888888",
          }}
        >
          <CRow className="rowDiv">
            <CCol lg="2">
              <CLabel className="label">Employee ID</CLabel>
            </CCol>
            <CCol lg="4">
              <CInput
                className="inputField"
                placeholder="Please Enter Name"
                value={id}
                onChange={(e) => handleChangeId(e)}
              />
            </CCol>
            <CCol lg="2">
              <CLabel className="label">Employee Name</CLabel>
            </CCol>
            <CCol lg="4">
              <CInput
                className="inputField"
                placeholder="Please Enter Email"
                type="text"
                value={name}
                onChange={(e) => handleChangeName(e)}
              />
            </CCol>
          </CRow>
          <CRow className="rowDiv">
            <CCol lg="2">
              <CLabel className="label">Department</CLabel>
            </CCol>
            <CCol lg="4">
              <CSelect
                className="select"
                value={chooseDept}
                onChange={selectDept}
              >
                <option value="">---Select Department---</option>
                {deptData.map((data, index) => {
                  return (
                    <option
                      className="option"
                      key={index}
                      id={data.id}
                      value={data.id}
                    >
                      {data.name}
                    </option>
                  );
                })}
              </CSelect>
            </CCol>
            <CCol lg="2">
              <CLabel className="label">Position</CLabel>
            </CCol>
            <CCol lg="4">
              <CSelect
                className="select"
                value={choosePosition}
                onChange={selectPosition}
              >
                <option value="">---Select Position---</option>
                {positionData.map((data, index) => {
                  return (
                    <option
                      className="option"
                      key={index}
                      id={data.id}
                      value={data.id}
                    >
                      {data.name}
                    </option>
                  );
                })}
              </CSelect>
            </CCol>
          </CRow>
          <CRow>
            <CCol lg="4"></CCol>
            <CCol lg="4" style={{ textAlign: "center" }}>
              <CButton className="regBtn">Search</CButton>
            </CCol>
            <CCol lg="4"></CCol>
          </CRow>
        </CCol>
        <CCol lg="1"></CCol>
      </CRow>
    </>
  );
};

export default EmployeeListShow;
