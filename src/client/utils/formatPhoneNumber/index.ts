export const formatPhoneNumber = (str: string) => {
  const regex = /\d+/gm;
  const regexPhoneNumber = /(?:(\d{3}))?(\d{3})(\d{3})(\d{3})/gm;
  let phoneNumber: RegExpMatchArray | string = str.match(regex);
  const phoneNumberGroupped: string[] = [];
  let formatedPhoneNumber: string;
  let m;

  if (phoneNumber.length > 0) {
    phoneNumber = phoneNumber.join("");

    // tslint:disable-next-line no-conditional-assignment
    while ((m = regexPhoneNumber.exec(phoneNumber)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      m.forEach((match, groupIndex) => {
        if (groupIndex === 1 && typeof match === "undefined") {
          phoneNumberGroupped.push("420");
        }

        if (typeof match !== "undefined" && groupIndex !== 0) {
          phoneNumberGroupped.push(match);
        }
      });
    }

    formatedPhoneNumber = phoneNumberGroupped.join(" ");

    return `+${formatedPhoneNumber}`;
  }

  return false;
};
