const mail = require("@sendgrid/mail");

export default async function Mail(req, res) {
  mail.setApiKey(
    "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"
  );

  const data = req.body;

  const msg = {
    to: data.email1,
    cc: data.email2 ? data.email2 : " " + "," + data.email3 ? data.email3 : " ",
    from: "suprawhiz@gmail.com",
    subject: "TICKET REPORT",
    text:
      "Company: " +
      data.company +
      "<br>" +
      "<br>" +
      "Driver License: " +
      data.driverLic +
      "<br>" +
      "<br>" +
      "Truck Number: " +
      data.truckNumber +
      "<br>" +
      "<br>" +
      "Client Phone: " +
      data.clientPhone +
      "<br>" +
      "<br>" +
      "Start Time: " +
      data.startTime +
      "<br>" +
      "<br>" +
      "End Time: " +
      data.endTime +
      "<br>" +
      "<br>" +
      "Contractor: " +
      data.contractor +
      "<br>" +
      "<br>" +
      "Delivery Location: " +
      data.deliveryLocation +
      "<br>" +
      "<br>" +
      "Notes: " +
      data.notes +
      "<br>" +
      "<br>" +
      "Phone: " +
      data.phone +
      "<br>" +
      "<br>" +
      "TotalLoads: " +
      data.totalLoads +
      "<br>" +
      "<br>" +
      "Total Hours: " +
      data.totalHours +
      "<br>" +
      "<br>" +
      "Customer Name: " +
      data.customerName +
      "<br>" +
      "<br>" +
      "Load Info: " +
      data.loadInfo,
    html:
      "Company: " +
      data.company +
      "<br>" +
      "<br>" +
      "Driver License: " +
      data.driverLic +
      "<br>" +
      "<br>" +
      "Truck Number: " +
      data.truckNumber +
      "<br>" +
      "<br>" +
      "Client Phone: " +
      data.clientPhone +
      "<br>" +
      "<br>" +
      "Start Time: " +
      data.startTime +
      "<br>" +
      "<br>" +
      "End Time: " +
      data.endTime +
      "<br>" +
      "<br>" +
      "Contractor: " +
      data.contractor +
      "<br>" +
      "<br>" +
      "Delivery Location: " +
      data.deliveryLocation +
      "<br>" +
      "<br>" +
      "Notes: " +
      data.notes +
      "<br>" +
      "<br>" +
      "Phone: " +
      data.phone +
      "<br>" +
      "<br>" +
      "TotalLoads: " +
      data.totalLoads +
      "<br>" +
      "<br>" +
      "Total Hours: " +
      data.totalHours +
      "<br>" +
      "<br>" +
      "Customer Name: " +
      data.customerName +
      "<br>" +
      "<br>" +
      "Load Info: " +
      data.loadInfo,
    //  +'<br>'+
    // loads.load_id+'<br>'+
    // loads.loadSite+'<br>'+
    // loads.Material+'<br>'+
    // loads.ton
  };

  try {
    await mail.send(msg);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log(error.response.data, error);
    res.status(400).send("Message not sent.");
  }
}
