export const hasNumberOfDigits = (str: string, min: number, max: number) => {
  const regex = /\d+/gm;
  let m;
  let totalLength = 0;

  // tslint:disable-next-line no-conditional-assignment
  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    m.forEach((match, groupIndex) => {
      totalLength += match.length
    });
  }

  if (totalLength >= min && totalLength <= max) {
    return true;
  }

  return false;
};

export const isPhoneNumber = (str: string) => {
  if (hasNumberOfDigits(str, 9, 12)) {
    if (/^([0-9+-_\(\)\s]+)$/gm.test(str)) {
      return true;
    }

    return false;
  }

  return false;
};
