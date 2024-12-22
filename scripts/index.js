import { Player, world } from "@minecraft/server";
import { Bank, BankMenuHandler } from "./form";

const bank = new Bank();

world.afterEvents.itemUse.subscribe((ev) => {
    const player = ev.source;
    const item = ev.itemStack;

    if (item && item.typeId === "minecraft:compass") {
        bank.BankMenuHandler(player);
    }
});
