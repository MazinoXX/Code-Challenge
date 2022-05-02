const Reader = require('./../../lib/utilities/read')

class PartnerService {

    static getListOfPartners(partner){
        
        return Reader.readJsonFile(partner)
    }
    static getEmailForCertificatedPartners(partner){

        const partnerEmails = Reader.readJsonFile(partner)
        const certificatedPartners = partnerEmails.filter((partner) => partner.haveCertification === true)
        const emailsCertificated = certificatedPartners.map((partner) => partner.email)
        return emailsCertificated
    }
    static partnersAbove500(partner){
        const partnerlist = Reader.readJsonFile(partner)
        const partnerUp500 = partnerlist.filter((partner) => partner.credits > 500)
        const partnerAbove500Credits = partnerUp500.map((partner) => partner.name)
        return partnerAbove500Credits
    }
}

module.exports = PartnerService