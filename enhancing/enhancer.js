module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item, enhancement: item.enhancement >= 20 ? 20 : item.enhancement + 1 };
}

function fail(item) {
  let enLevel = item.enhancement
  let durLevel = item.durability

  if (enLevel < 15) {
    durLevel = item.durability - 5
  }
  else if (enLevel >= 15) {
    durLevel = item.durability - 10

    if (enLevel >= 16) {
      enLevel = item.enhancement - 1
    }
  }

  if (enLevel <= 0) {
    enLevel = 0
  }

  if (durLevel <= 0) {
    durLevel = 0
  }

  return { ...item, enhancement: enLevel, durability: durLevel };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {

  if (item.enhancement > 0) {

    return { ...item, name: `[+${item.enhancement}] ${item.name}` };
  }
  else {

    return { ...item };
  }

}
