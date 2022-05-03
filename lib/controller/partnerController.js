const Reader = require("./../../lib/utilities/read");
const PartnerService = require("./../../lib/services/partnerService");

class PartnerController{

    static getListOfPartners(){

        const partener = Reader.readJsonFile("visualpartners.json");
        return partener;

    }
    static EmailForCertificatedPartners(){

        const partnersEmails = PartnerService.getEmailForCertificatedPartners("visualpartners.json");
        return partnersEmails;


    }
    static partnersUp500Credits(credits){

        const partnersCredits = PartnerService.partnersAbove500("visualpartners.json",credits);
        return partnersCredits;

    }
}

module.exports = PartnerController;
