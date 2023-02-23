/*
Deals with custom queries by converting them to appropriate database filters 
*/

const createRegex = (obj, arrayOfKeys) => {
  const queries = {};
  arrayOfKeys.forEach((key) => {
    const [field, ..._] = key.split("_");
    queries[field] = { $regex: obj[key] };
  });

  return queries;
};

const createComparitives = (obj, gtKeys, ltKeys) => {
  const queries = {};
  gtKeys.forEach((key) => {
    console.log({ $gte: +obj[key] });
    const f = key.split("_");
    queries[f.slice(0, -1).join("_")] = { $gte: +obj[key] };
  });
  ltKeys.forEach((key) => {
    const f = key.split("_");
    const field = f.slice(0, -1).join("_");
    if (queries[field]) Object.assign(queries[field], { $lte: +obj[key] });
    else queries[field] = { $lte: +obj[key] };
  });

  return queries;
};

const createLt = (obj, arrayOfKeys) => {
  const queries = {};
  arrayOfKeys.forEach((key) => {
    const f = key.split("_");
    queries[f.slice(0, -1).join("_")] = { $lte: +obj[key] };
  });

  return queries;
};

function processQueries(req, res, next) {
  const like = Object.keys(req.query).filter(
    (key) => key.split("_").pop() === "like"
  );
  const gt = Object.keys(req.query).filter(
    (key) => key.split("_").pop() === "gt"
  );
  const lt = Object.keys(req.query).filter(
    (key) => key.split("_").pop() === "lt"
  );
  const queries = {
    ...createRegex(req.query, like),
    ...createComparitives(req.query, gt, lt),
  };
  req.query = { ...req.query, ...queries }; //custom queries (with suffix) get precedence
  const { category, subCategory, sub2Category, sub3Category } = req.query;
  if (category)
    Object.assign(req.query, { "product_category_tree.0": category });
  if (subCategory)
    Object.assign(req.query, { "product_category_tree.1": subCategory });
  if (sub2Category)
    Object.assign(req.query, { "product_category_tree.2": sub2Category });
  if (sub3Category)
    Object.assign(req.query, { "product_category_tree.2": sub3Category });

  next();
}

module.exports = processQueries;
