const objectDotParser = require("../src");

describe("Object Dot Parser", () => {
  const data = {
    "person.name": "Luis",
    "person.age": 74,
    "person.address.city": "Atlanta",
    "person.address.street.name": "St. Joseph",
    "person.address.street.number": "#34-46",
    "person.position": "Software Engineer",
    "social.instagram": "luisfuentech",
    "social.twitter": "luisfuentech",
    "social.github": "luisfuentech"
  };
  const expectedData = {
    person: {
      name: "Luis",
      age: 74,
      address: {
        city: "Atlanta",
        street: {
          name: "St. Joseph",
          number: "#34-46"
        }
      },
      position: "Software Engineer"
    },
    social: {
      instagram: "luisfuentech",
      twitter: "luisfuentech",
      github: "luisfuentech"
    }
  };

  it("Should parses an object with dotted keys string", () => {
    const objectParsed = objectDotParser(data);

    expect(typeof objectParsed).toEqual("object");
    expect(objectParsed).toMatchObject(expectedData);
  });

  it("Should parses an array of objects with dotted keys string", () => {
    const objectParsed = objectDotParser([data]);

    expect(typeof objectParsed).toEqual("object");
    expect(objectParsed).toMatchObject([expectedData]);
    expect(objectParsed).toBeInstanceOf(Array);
  });

  it("Should return undefined when the param is no object or array", () => {
    const objectParsed = objectDotParser();

    expect(objectParsed).toBeUndefined();
  });
});
