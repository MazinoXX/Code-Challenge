const PartnerService = require("./../../lib/services/partnerService");

describe("Test para el service de los partners", () => {
    test("1. Obteniendo la lista de partners", () => {

        const partner1 = {"credits": 508, "email": "Todd@visualpartnership.xyz", "enrollments": ["Visual Thinking Intermedio", "Visual Thinking Avanzado"], "haveCertification": true, "id": "6264d5d89f1df827eb84bb23", "name": "Warren", "previousCourses": 1};


        const partner = PartnerService.getListOfPartners("./dataTest/partner1.json");

        expect(partner[0]).toEqual(partner1);
    });
    test("2. Obten los emails de los partners certificados", () => {

        
        const partnersEmails = PartnerService.getEmailForCertificatedPartners("./dataTest/partner1.json",true);
        expect(expect.arrayContaining(partnersEmails)).toEqual(["Todd@visualpartnership.xyz", "Sexton@visualpartnership.xyz"]);
    });
    test("3. Lista de partners con mas de 500 creditos", () => {

        const partnerCredits = PartnerService.partnersAbove500("./dataTest/partner1.json",500);

        expect(expect.arrayContaining(partnerCredits)).toEqual(["Warren","Lucinda"]);
    });
});