export const Tablecolumns = [
  {
    title: "환자 ID",
    dataIndex: "personID",
    sorter: true
  },
  {
    title: "성별",
    dataIndex: "gender",
    sorter: true
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
    sorter: true
  },
  {
    title: "민족",
    dataIndex: "ethnicity",
    sorter: true
  },
  {
    title: "사망 여부",
    dataIndex: "isDeath",
    render: (text) => text === false ? '아니오' : '예',
    sorter: true
  },
];
