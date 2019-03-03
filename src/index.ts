// This is a little useless, I suppose, but it's just here for completeness. :)
function pipeline<T1>(
  input: T1,
  fn1: (input: T1) => T1
): T1;

function pipeline<T1, T2>(
  input: T1,
  fn1: (input: T1) => T2
): T2;

function pipeline<T1, T2, T3>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3
): T3;

function pipeline<T1, T2, T3, T4>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4
): T4;

function pipeline<T1, T2, T3, T4, T5>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4,
  fn4: (input: T4) => T5
): T5;

function pipeline<T1, T2, T3, T4, T5, T6>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4,
  fn4: (input: T4) => T5,
  fn5: (input: T5) => T6
): T6;

function pipeline<T1, T2, T3, T4, T5, T6, T7>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4,
  fn4: (input: T4) => T5,
  fn5: (input: T5) => T6,
  fn6: (input: T6) => T7
): T7;

function pipeline<T1, T2, T3, T4, T5, T6, T7, T8>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4,
  fn4: (input: T4) => T5,
  fn5: (input: T5) => T6,
  fn6: (input: T6) => T7,
  fn7: (input: T7) => T8
): T8;

function pipeline<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4,
  fn4: (input: T4) => T5,
  fn5: (input: T5) => T6,
  fn6: (input: T6) => T7,
  fn7: (input: T7) => T8,
  fn8: (input: T8) => T9
): T9;

function pipeline<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4,
  fn4: (input: T4) => T5,
  fn5: (input: T5) => T6,
  fn6: (input: T6) => T7,
  fn7: (input: T7) => T8,
  fn8: (input: T8) => T9,
  fn9: (input: T9) => T10
): T10;

function pipeline<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4,
  fn4: (input: T4) => T5,
  fn5: (input: T5) => T6,
  fn6: (input: T6) => T7,
  fn7: (input: T7) => T8,
  fn8: (input: T8) => T9,
  fn9: (input: T9) => T10,
  fn10: (input: T10) => T11
): T11;

function pipeline<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4,
  fn4: (input: T4) => T5,
  fn5: (input: T5) => T6,
  fn6: (input: T6) => T7,
  fn7: (input: T7) => T8,
  fn8: (input: T8) => T9,
  fn9: (input: T9) => T10,
  fn10: (input: T10) => T11,
  fn11: (input: T11) => T12
): T12;

function pipeline<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4,
  fn4: (input: T4) => T5,
  fn5: (input: T5) => T6,
  fn6: (input: T6) => T7,
  fn7: (input: T7) => T8,
  fn8: (input: T8) => T9,
  fn9: (input: T9) => T10,
  fn10: (input: T10) => T11,
  fn11: (input: T11) => T12,
  fn12: (input: T12) => T13
): T13;

function pipeline<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4,
  fn4: (input: T4) => T5,
  fn5: (input: T5) => T6,
  fn6: (input: T6) => T7,
  fn7: (input: T7) => T8,
  fn8: (input: T8) => T9,
  fn9: (input: T9) => T10,
  fn10: (input: T10) => T11,
  fn11: (input: T11) => T12,
  fn12: (input: T12) => T13,
  fn13: (input: T13) => T14
): T14;

// 15 seems like a reasonable number of functions to stop at, but I suppose, in theory, we could go further...
function pipeline<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(
  input: T1,
  fn1: (input: T1) => T2,
  fn2: (input: T2) => T3,
  fn3: (input: T3) => T4,
  fn4: (input: T4) => T5,
  fn5: (input: T5) => T6,
  fn6: (input: T6) => T7,
  fn7: (input: T7) => T8,
  fn8: (input: T8) => T9,
  fn9: (input: T9) => T10,
  fn10: (input: T10) => T11,
  fn11: (input: T11) => T12,
  fn12: (input: T12) => T13,
  fn13: (input: T13) => T14,
  fn14: (input: T14) => T15
): T15;

function pipeline(input: any) {
  const args = [];
  for (let argumentIndex = 1; argumentIndex < arguments.length; argumentIndex++) {
    args.push(arguments[argumentIndex]);
  }
  const firstFunctionToCall = args[0];
  const outputOfFunction = firstFunctionToCall(input);
  if (args.length > 1) {
    // If there are other functions to be called, recursively call pipeline, to call the next one. 
    const remainingFunctionsToCall = args.slice(1);
    return (pipeline as any).apply(null, [
      outputOfFunction,           // The output of this function becomes input of the next function
      ...remainingFunctionsToCall // Pass along the remaining functions to call
    ]);
  } else {
    // If this is the last function, then simply return its output.
    return outputOfFunction;
  }
}

export { pipeline };