/**
 * Department and Position Registration Main Form
 * @author yaminzaw
 * @create 06/08/2022
 */
import React, { useState } from "react";
import DeptPositionShow from "./DeptPositionShow";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";

const DeptPositionRegIndex = () => {
  const [deptData, setDeptData] = useState([
    { id: 1, name: "IT" },
    { id: 2, name: "HR" },
    { id: 3, name: "Infra" },
  ]); //for dept data
  const [chooseDept, setChooseDept] = useState(""); //for depatrment choose
  const [positionData, setPositionData] = useState([
    { id: 1, name: "Admin" },
    { id: 2, name: "Leader" },
    { id: 3, name: "Member" },
  ]); //for dept data
  const [choosePosition, setChoosePosition] = useState(""); //for choose position

  /**
   * onChange function on drop down(department)
   * @author yaminzaw
   * @create 06/08/2022
   * @param e
   * set id of selected department id to chooseDept
   */
  let selectDept = (e) => {
    setChooseDept(e.target.value);
  };

  /**
   * onChange function on drop down(position)
   * @author yaminzaw
   * @create 06/08/2022
   * @param e
   * set id of selected position id to choosePosition
   */
  let selectPosition = (e) => {
    setChoosePosition(e.target.value);
  };

  return (
    <CCard className="regCard" style={{paddingBottom:"80px"}}>
      <CCardHeader className="regCard" style={{ textAlign: "center" }}>
        <h2 style={{ color: "white" }}>Department and Position Registration</h2>
      </CCardHeader>
      <CCardBody>
        <DeptPositionShow
          chooseDept={chooseDept}
          selectDept={selectDept}
          deptData={deptData}
          choosePosition={choosePosition}
          selectPosition={selectPosition}
          positionData={positionData}
        />
      </CCardBody>
    </CCard>
  );
};

export default DeptPositionRegIndex;
