

import * as Caml_option from "./caml_option.mjs";

function test(x) {
  return x === undefined;
}

function testAny(x) {
  return x === undefined;
}

function getExn(f) {
  if (f !== undefined) {
    return f;
  }
  throw new Error("Js.Undefined.getExn");
}

function bind(x, f) {
  if (x !== undefined) {
    return f(x);
  }
  
}

function iter(x, f) {
  if (x !== undefined) {
    return f(x);
  }
  
}

function fromOption(x) {
  if (x !== undefined) {
    return Caml_option.valFromOption(x);
  }
  
}

var from_opt = fromOption;

export {
  test ,
  testAny ,
  getExn ,
  bind ,
  iter ,
  fromOption ,
  from_opt ,
  
}
/* No side effect */
