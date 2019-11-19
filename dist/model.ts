let displayName: string = "Jess`s standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost = 425;

function getInventoryItem(trackingNumber: string): object {
  return null;
}

function saveInventoryItem(item) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
