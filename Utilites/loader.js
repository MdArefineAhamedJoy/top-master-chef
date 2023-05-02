const handelDetails = async (id) => {
  let storeData = [];
  const chefId = id.id;
  console.log(chefId);

  const response = await fetch(`http://localhost:5000/chefDetails`);
  const data = await response.json();
  const findData = data.find((da) => parseInt(da.id) === parseInt(chefId));

  

  return findData;
};

export { handelDetails };
