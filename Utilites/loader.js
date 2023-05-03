const handelDetails = async (id) => {
  const chefId = id.id;
  const response = await fetch(`http://localhost:5000/chefDetails`);
  const data = await response.json();
  const findData = data.find((da) => parseInt(da.chef_id) === parseInt(chefId));
 
  return findData;
};

export { handelDetails };
