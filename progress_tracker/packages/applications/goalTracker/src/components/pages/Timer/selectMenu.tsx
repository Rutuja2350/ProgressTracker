import React from 'react';
import { Select } from 'antd';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const SelectMenu: React.FC = () => (
  <div className='h-full place-content-center'>
  <Select
    showSearch
    placeholder="What are you working on ?"
    optionFilterProp="label"
    popupMatchSelectWidth={false}
    onChange={onChange}
    onSearch={onSearch}
    options={[
      {
        value: 'react_project',
        label: 'React project',
      },
      {
        value: 'coding',
        label:  'Coding',
      },
      {
        value: 'office_extra_work',
        label: 'Office extra work',
      },
      {
        value: 'learning',
        label: 'learning',
      },
    ]}
  />
  </div>
);

export default SelectMenu;