import { React } from 'react';
import { Input, Space } from 'antd';


const { Search } = Input;

const onSearch = (value, _e, info) => {
  console.log(info === null || info === undefined ? undefined : info.source, value)
};

function InputSearch() {
    return(
  <Space direction="vertical">
    <Search size='large' placeholder="Usuário" onSearch={onSearch} enterButton  onCL/>
  </Space>
  );
}

export default InputSearch;