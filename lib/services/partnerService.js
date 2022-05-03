const Reader = require('./../../lib/utilities/read')

class PartnerService {

    static getListOfPartners(partner){
        
        const partener = Reader.readJsonFile(partner)
        return partener
    }
    static getEmailForCertificatedPartners(partner){

        const partnerEmails = Reader.readJsonFile(partner)
        const certificatedPartners = partnerEmails.filter((partner) => partner.haveCertification === true)
        const emailsCertificated = certificatedPartners.map((partner) => partner.email)
        return emailsCertificated
    }
    static partnersAbove500(partner,amountCredits){
        const partnerlist = Reader.readJsonFile(partner)
        const partnerUp500 = partnerlist.filter((partner) => partner.credits > amountCredits)
        const partnerAbove500Credits = partnerUp500.map((partner) => partner.name)
        return partnerAbove500Credits
    }
}

module.exports = PartnerService