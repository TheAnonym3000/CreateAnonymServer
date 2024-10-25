ServerEvents.customCommand('waystone', event => {
  event.player.give(Item.of('waystones:waystone', 1))
})