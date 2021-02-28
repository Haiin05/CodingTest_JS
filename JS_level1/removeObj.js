function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  }
  return false;
}

// 객체안에 property 가 있는지 확인 후 있으면 제거
