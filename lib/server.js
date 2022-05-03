const PartnerController = require("./../lib/controller/partnerController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/partner", (req,res) => {
    const listOfPertners = PartnerController.getListOfPartners();
    res.json(listOfPertners);
});
app.get("/v1/partner/emails", (req,res) => {
    const listEmails = PartnerController.EmailForCertificatedPartners();
    res.json(listEmails);
});
app.get("/v1/partner/student/:credist", (req,res) => {
    const credist = req.params.credist;
    const partnerAbove500 = PartnerController.partnersUp500Credits(credist);
    res.json(partnerAbove500);
});



app.listen(port, () => {
    console.log(`Server up on port ${port}`);
}
);