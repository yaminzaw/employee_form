import { CCol, CRow, CLabel, CInput, CInputRadio, CSelect, CButton } from "@coreui/react";
import React from "react";

const EmployeeRegNew = (props) => {
    let {
        email,
        handleChangeEmail,
        name,
        handleChangeName,
        pwd,
        handleChangePwd,
        comfirmPwd,
        handleChangeComfirmPwd,
        genderArr,
        clickGender,
        genderId,
        chooseDept,
        selectDept,
        deptData,
        choosePosition,
        selectPosition,
        positionData,
    } = props;
    return (
        <>
            <CRow className="rowDiv">
                <CCol lg="1"></CCol>
                <CCol lg="11">
                    <h3 style={{ color: "rgb(51, 51, 153)" }}>Personal Detail</h3>
                </CCol>
            </CRow>
            <CRow >
                <CCol lg="1"></CCol>
                <CCol lg="10" style={{ border: "1px solid black", padding: "30px", backgroundColor: "rgb(242, 242, 242)",boxShadow:"5px 10px #888888"}}>
                    <CRow className="rowDiv">
                        <CCol lg="2">
                            <CLabel className="label">Name</CLabel>
                        </CCol>
                        <CCol lg="3">
                            <CInput
                                className="inputField"
                                placeholder="Please Enter Name"
                                value={name}
                                onChange={(e) => handleChangeName(e)}
                            />
                        </CCol>
                        <CCol lg="2"></CCol>
                        <CCol lg="2">
                            <CLabel className="label">Email</CLabel>
                        </CCol>
                        <CCol lg="3">
                            <CInput
                                className="inputField"
                                placeholder="Please Enter Email"
                                type="text"
                                value={email}
                                onChange={(e) => handleChangeEmail(e)}
                            />
                        </CCol>
                    </CRow>
                    <CRow className="rowDiv">
                        <CCol lg="2">
                            <CLabel className="label">Gender</CLabel>
                        </CCol>
                        <CCol lg="3">
                            <div className="ml-3" style={{ display: "flex" }}>
                                {genderArr.map((data, index) => {
                                    return (
                                        <CRow key={index}>
                                            <CCol className="radioLabel">
                                                <CInputRadio
                                                    className="Radio"
                                                    name={data.name}
                                                    value={data.id}
                                                    onChange={() => clickGender(data)}
                                                    checked={genderId == data.id ? true : false}
                                                />
                                                <CLabel className="RadioLabel">{data.name}</CLabel>
                                            </CCol>
                                        </CRow>
                                    );
                                })}
                            </div>
                        </CCol>
                        <CCol lg="7"></CCol>
                    </CRow>
                    <CRow className="rowDiv">
                        <CCol lg="2">
                            <CLabel className="label">Password</CLabel>
                        </CCol>
                        <CCol lg="3">
                            <CInput
                                className="inputField"
                                placeholder="Please Enter Password"
                                type="text"
                                value={pwd}
                                onChange={(e) => handleChangePwd(e)}
                            />
                        </CCol>
                        <CCol lg="2"></CCol>
                        <CCol lg="2">
                            <CLabel className="label">Comfirm Password</CLabel>
                        </CCol>
                        <CCol lg="3">
                            <CInput
                                className="inputField"
                                placeholder="Please Comfirm Password"
                                type="text"
                                value={comfirmPwd}
                                onChange={(e) => handleChangeComfirmPwd(e)}
                            />
                        </CCol>
                    </CRow>
                </CCol>
                <CCol lg="1"></CCol>
            </CRow>
            <CRow className="rowDiv" style={{ marginTop: "30px" }}>
                <CCol lg="1"></CCol>
                <CCol lg="11">
                    <h3 style={{ color: "rgb(51, 51, 153)" }}>Department and Position</h3>
                </CCol>
            </CRow>
            <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="10" style={{ border: "1px solid black", padding: "30px", backgroundColor: "rgb(242, 242, 242)",boxShadow:"5px 10px #888888" }}>
                    <CRow className="rowDiv">
                        <CCol lg="2">
                            <CLabel className="label">Department</CLabel>
                        </CCol>
                        <CCol lg="3">
                            <CSelect className="select" value={chooseDept} onChange={selectDept}>
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
                        <CCol lg="2"></CCol>
                        <CCol lg="2">
                            <CLabel className="label">Position</CLabel>
                        </CCol>
                        <CCol lg="3">
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
                    <CRow >
                        <CCol lg="4"></CCol>
                        <CCol lg="4" style={{ textAlign: "center" }}><CButton className="addBtn">Add</CButton></CCol>
                        <CCol lg="4"></CCol>
                    </CRow>
                    <CRow style={{ width: "100%", overflow: "auto" }} >
                        <CCol lg="1" xs="0"></CCol>
                        <CCol lg="10" xs="12">
                            <table
                                className="addTable"
                                style={{ wordBreak: "break-all", padding: "10px" }}
                            >
                                <thead>
                                    <tr style={{ border: "1px solid" }}>
                                        <th style={{ width: "350px" }} className="thAddData">
                                            Department
                                        </th>
                                        <th style={{ width: "350px" }} className="thAddData">
                                            Position
                                        </th>
                                        <th style={{ width: "150px" }} className="thAddData">
                                            Remove
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tdAddData">
                                        <td style={{ width: "350px",border:"1px solid"}} > IT Dept</td>
                                        <td style={{ width: "350px",border:"1px solid"}} >Admin</td>
                                        <td style={{ width: "150px",border:"1px solid"}} >remove</td>
                                    </tr>
                                    <tr className="tdAddData">
                                        <td style={{ width: "350px",border:"1px solid"}} >Infra Dept</td>
                                        <td style={{ width: "350px",border:"1px solid"}} >Member</td>
                                        <td style={{ width: "150px",border:"1px solid"  }} >remove</td>
                                    </tr>
                                    <tr className="tdAddData">
                                        <td style={{ width: "350px",border:"1px solid"  }}>HR Dept</td>
                                        <td style={{ width: "350px",border:"1px solid"  }}>Leader</td>
                                        <td style={{ width: "150px",border:"1px solid"  }} >remove</td>
                                    </tr>
                                </tbody>
                            </table>
                        </CCol>
                        <CCol lg="1" xs="0"></CCol>
                    </CRow>
                </CCol>
                <CCol lg="1"></CCol>
            </CRow>
        </>
    )
}

export default EmployeeRegNew;