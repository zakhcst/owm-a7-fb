const { disableBilling } = require("../utils/disable-billing");

exports.checkBudgetPubSub = async (pubsubEvent, context) => {
  const pubsubData = JSON.parse(
    Buffer.from(pubsubEvent.data, "base64").toString()
  );
  if (pubsubData.costAmount <= pubsubData.budgetAmount) {
    return `No action necessary. (Current cost: ${pubsubData.costAmount})`;
  }
  return checkBudgetPubSub();
};
