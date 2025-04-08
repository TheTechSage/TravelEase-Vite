import {
    route,
    // layout,
    index,
    // prefix,
  } from "@react-router/dev/routes";
  
  export default [
    route("./main.jsx", [
      index("./components/hotels/Home.jsx"),
      route("resort", "./components/hotels/Resort.jsx"),
      route("chains", "./components/hotels/Chains.jsx"),
    ])
  ];
