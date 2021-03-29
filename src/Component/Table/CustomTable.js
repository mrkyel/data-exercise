/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Table } from "antd";
import CustomPagination from "Component/Pagination/CustomPagination";
import React, { useState } from "react";
import { getPatientList } from "../../apis/CommonApis";
import { Tablecolumns } from "./TableColumns";

function CustomTable() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const getData = async () => {
    setLoading(true);
    const params = {
      page: 1,
      length: 10,
    };
    const res = await getPatientList(params);
    setLoading(false);
    console.log(res);
    setData(res.patient);
    setPagination((prev) => ({ ...prev, total: res.patient.totalLength }));
  };

  async function onChange(_, filters, sorter) {
    if (data.length <= 0) {
      alert("조회버튼을 먼저 눌러주세요");
      return false;
    }
    console.log(filters);
    if (sorter.length > 0) {
      const params = {
        page: pagination.current,
        length: pagination.pageSize,
        order_column:
          sorter.field === "personID"
            ? "person_id"
            : sorter.field === "birthDatetime"
            ? "birth"
            : sorter.field === "isDeath"
            ? "death"
            : sorter.field.toLowerCase(),
        order_desc: sorter.order === "ascend" ? false : true,
      };
      const res = await getPatientList(params);
      setData(res.patient);
    }

    if (filters.gender) {
      const params = {
        page: pagination.current,
        length: pagination.pageSize,
        gender: filters.gender[0],
        order_desc: sorter.order === "ascend" ? false : true,
      };
      const res = await getPatientList(params);
      setData(res.patient);
    }
  }

  const paginationOnChange = async (page, pageSize) => {
    console.log(page, pageSize);
    setLoading(true);
    const params = {
      page: page,
      length: pageSize,
    };
    const res = await getPatientList(params);
    console.log(res);
    setLoading(false);
    setData(res.patient);
    setPagination({
      current: page,
      pageSize: pageSize,
      total: res.patient.totalLength,
    });
  };

  if (loading) return <div>Loading . . .</div>;
  return (
    <>
      <TableWrapper>
        <Button css={ButtonStyle} onClick={getData}>
          조회
        </Button>
        <Table
          columns={Tablecolumns}
          rowKey={(record) => record.personID}
          dataSource={data.list}
          onChange={onChange}
          pagination={false}
        />
        <CustomPagination
          total={pagination.total}
          current={pagination.current}
          pageSize={pagination.pageSize}
          onChange={paginationOnChange}
        />
      </TableWrapper>
    </>
  );
}

export default CustomTable;

const TableWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 70px;
`;

const ButtonStyle = css`
  float: right;
  margin: 10px;
`;
