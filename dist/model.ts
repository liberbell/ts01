let displayName: string = "Jess`s standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost = 425;

interface InventoryItem{
  displayName: string;
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;

  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {
  item.trackingNumber = "12345"
}

let inventoryItem = getInventoryItem(trackingNumber);
let updateInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();
// saveInventoryItem(inventoryItem);

saveInventoryItem({
  displayName: "Mac book",
  inventoryType: "Computer",
  trackingNumber: "MBP123455",
  createDate: new Date(),
  originalCost: 1499
});
