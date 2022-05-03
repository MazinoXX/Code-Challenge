const Reader = require('./../../lib/utilities/read')
const PartnerService = require('./../../lib/services/partnerService')
const PartnerController = require('./../../lib/controller/partnerController')

describe('Pruebas del controller para los partners', () => {
    test('1. Lista de los partners', () => {
        
        const partner1 = {"credits": 508, "email": "Todd@visualpartnership.xyz", "enrollments": ["Visual Thinking Intermedio", "Visual Thinking Avanzado"], "haveCertification": true, "id": "6264d5d89f1df827eb84bb23", "name": "Warren", "previousCourses": 1}

        const partner = Reader.readJsonFile('./dataTest/partner1.json')
        expect(partner[0]).toEqual(partner1)

    })
    test('2. Emails de los partners certificated', () => {

        const partnersEmails = PartnerService.getEmailForCertificatedPartners('./dataTest/partner1.json',true)
        expect(expect.arrayContaining(partnersEmails)).toEqual(["Todd@visualpartnership.xyz", "Sexton@visualpartnership.xyz"])
    })
    test('3. partners credits above 500', () => {

        const partnerCredits = PartnerService.partnersAbove500('./dataTest/partner1.json',500)

        expect(expect.arrayContaining(partnerCredits)).toEqual(["Warren","Lucinda"])
    })
    test('4. Usando el controller para los emails', () => {

        const emails = PartnerController.EmailForCertificatedPartners(true)
        expect(expect.arrayContaining(emails)).toEqual(["Todd@visualpartnership.xyz", "Sexton@visualpartnership.xyz"])

    })
    test('5. Implementando el controller para los creditos de los partners', () => {

        const creditos = PartnerController.partnersUp500Credits(500)
        expect(expect.arrayContaining(creditos)).toEqual(["Warren","Lucinda"])


    })
})