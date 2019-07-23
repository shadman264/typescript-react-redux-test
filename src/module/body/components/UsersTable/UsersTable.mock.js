const createData = (name, email, city, company) => {
  return { name, email, city, company };
}

export const tableHead = [
  'Name',
  'Email',
  'City',
  'Company'
]
export const tableData = [
  createData('Leanne Graham', 'Sincere@april.biz', 'Gwenborough', 'Romaguera-Crona'),
  createData('Ervin Howell', 'Shanna@melissa.tv', 'Wisokyburgh', 'Deckow-Crist'),
  createData('Zebra Stripes	', 'Nathan@yesenia.net', 'McKenziehaven', 'Romaguera-Jacobson')
];