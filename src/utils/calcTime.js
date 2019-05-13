const addZero = time => {
  if (time < 10) time = '0' + time;
  return time;
};

export const calcTime = () => {
  const today = new Date();
  const d = addZero(today.getDate());
  const m = addZero(today.getMonth());
  const y = addZero(today.getFullYear());
  const h = addZero(today.getHours());
  const min = addZero(today.getMinutes());
  const sec = addZero(today.getSeconds());

  return `${d}/${m}/${y} ${h}:${min}:${sec}`;
};
