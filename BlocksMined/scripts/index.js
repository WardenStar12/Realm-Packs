import { world, system } from '@minecraft/server';

world.afterEvents.playerBreakBlock.subscribe(evd => {
    evd.player.runCommandAsync('scoreboard players add @s BlocksMined 1'); 
})