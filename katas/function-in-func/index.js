
const func = (obj) => {
  console.log(`func: `, obj);
};

const styled = () => ((f) => f({
  root: {
    field: `string`
  }
}))(func);

styled();
