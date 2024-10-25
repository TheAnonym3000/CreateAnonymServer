ServerEvents.recipes((event) => {
  event.shaped(
    Item.of("create_connected:item_silo", 2), // arg 1: output
    [
      "A  ",
      "A  ", // arg 2: the shape (array of strings)
      "   ",
    ],
    {
      A: "create:item_vault",
    }
  );
});
