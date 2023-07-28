function foo() {
  const x = 10;
  if(x > 5) {
    var y = 5;
    console.log(x); // 5
  }
  console.log(y); // ReferenceError: y is not defined
}

foo();
