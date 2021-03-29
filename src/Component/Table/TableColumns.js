export const Tablecolumns = [
  {
    title: "환자 ID",
    dataIndex: "personID",
    sorter: true
  },
  {
    title: "성별",
    dataIndex: "gender",
    sorter: true,
    filters: [
      {
        text : 'Male',
        value : 'M',
      },
      {
        text : 'Female',
        value : 'F'
      }
    ], 
  },
  {
    title: "생년월일",
    dataIndex: "birthDatetime",
    sorter: true
  },
  {
    title: "나이",
    dataIndex: "age",
  },
  {
    title: "인종",
    dataIndex: "race",
    sorter: true,
    filters: [
      {
        text : '기타',
        value : 'other',
      },
      {
        text : '원주민',
        value : 'native'
      },
      {
        text : '흑인',
        value : 'black'
      },
      {
        text : '백인',
        value : 'white'
      },
      {
        text : '아시아인',
        value : 'asian'
      }
    ],
  },
  {
    title: "민족",
    dataIndex: "ethnicity",
    sorter: true,
    filters: [
      {
        text : 'nonhispanic',
        value : 'nonhispanic',
      },
      {
        text : 'hispanic',
        value : 'hispanic'
      }
    ], 
  },
  {
    title: "사망 여부",
    dataIndex: "isDeath",
    render: (text) => text === false ? '아니오' : '예',
    sorter: true
  },
];
