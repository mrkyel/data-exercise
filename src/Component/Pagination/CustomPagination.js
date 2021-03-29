import React from 'react';
import { Pagination } from 'antd';

const CustomPagination = ({ total, onChange, current, pageSize }) => {
  return (
    <Pagination
      onChange={onChange}
      total={total}
      current={current}
      pageSize={pageSize}
      style={{ textAlign: 'center', margin: 'revert' }}
      showSizeChanger
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
    />
  );
};

export default CustomPagination;
