import { world, system } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';

world.afterEvents.playerSpawn.subscribe(event => event.player.teleport(world.getDefaultSpawnLocation(), {dimension: world.getDimension("overworld")}))
world.beforeEvents.itemUse.subscribe(data => {
    const player = data.source
    const kills = world.scoreboard.getObjective("Kills").getScore(player)
    const deaths = world.scoreboard.getObjective("Deaths").getScore(player)
    const kdr = deaths === 0 ? kills : kills / deaths
    if (data.itemStack.typeId === "minecraft:iron_ingot") {
        system.run(() => main())
    }

    function main() {
        const form = new ActionFormData()
            .title('§l§f⟫⟫ §eCustom§cPvP ')
            .body(`§fName: §6${player.name} \n\n\n§f|| §cKills§f: ${kills} || §cDeaths§f: ${deaths} || §cKDR§f: ${kdr.toFixed(2)} ||\n\n\n\n\n\n\n `)
            .button('Submit')
            .show(player)
    }
})