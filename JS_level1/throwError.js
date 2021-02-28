function ensure(value) {
  if (value === undefined) {
    throw true;
  } else {
    return value;
  }
}

try {
  console.log(ensure());
} catch (err) {
  console.log(err);
}

console.log(ensure());
