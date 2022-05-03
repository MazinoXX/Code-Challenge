const Reader = require("./../../lib/utilities/read");

describe("Prueba del reader para los partners", () => {
    test("Reading package for partners", () => {

        const partner1 = {"credits": 508, "email": "Todd@visualpartnership.xyz", "enrollments": ["Visual Thinking Intermedio", "Visual Thinking Avanzado"], "haveCertification": true, "id": "6264d5d89f1df827eb84bb23", "name": "Warren", "previousCourses": 1};

        const partner = Reader.readJsonFile("./dataTest/partner1.json");

        expect(partner[0]).toEqual(partner1);
    });
});
