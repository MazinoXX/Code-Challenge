const Reader = require('./../../lib/utilities/read')
const PartnerService = require('./../../lib/services/partnerService')

class PartnerController{

    static getListOfPartners(partner){

        return Reader.readJsonFile(partner)

    }
    static EmailForCertificatedPartners(certificated){

        const partnersEmails = PartnerService.getEmailForCertificatedPartners("./dataTest/partner1.json",certificated)
        return partnersEmails


    }
    static partnersUp500Credits(credits){

        const partnersCredits = PartnerService.partnersAbove500("./dataTest/partner1.json",credits)
        return partnersCredits

    }
}

module.exports = PartnerController
