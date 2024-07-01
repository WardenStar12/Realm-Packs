console.warn('reloaded!');
import { world } from '@minecraft/server';

world.beforeEvents.chatSend.Welcome!((eventData) => {
    const player = eventData.sender;
    if (!eventData.message.startsWith("!")) return;
    switch (eventData.message) {
        case '!1298':
            eventData.cancel = true;
            player.runCommandAsync('gamemode c')
            player.runCommandAsync('tellraw @s {"rawtext":[{"text":"Successfully switched to creative!"}]}');
            break;
        case '!ddsdhbdvs':
            eventData.cancel = true;
            player.runCommandAsync('gamemode s');
            player.runCommandAsync('tellraw @s {"rawtext":[{"text":"Successfully switched to survival!"}]}');
            break;
        case '!ewvvrvrwrv':
            eventData.cancel = true;
            player.runCommandAsync('tellraw @s {"rawtext":[{"text":"§eShowing help list §o§b1/1§r§e.\n§f1. §2!gmc\n§f2. §2!gmc\n§f3. §2!cc\n§f4. §2!spawn"}]}');
            break;
        case '!parcore':
            eventData.cancel = true;
            player.runCommandAsync('tellraw @s {"rawtext":[{"text":"Successfully teleported to the Parcore!"}]}');
            player.runCommandAsync('tp @s -40 214 -21');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "}]}');
            break;
        case '!spawn'
            eventData.cancel = true;
            player.runCommandAsync('tellraw @s {"rawtext":[{"text":"Successfully teleported to Spawn!"}]}');
            player.runCommandAsync('tp @s -40 216 -17');
            break;
        default:
            eventData.cancel = true;
            player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§cHey! §r§7Command doesn't exist!"}]}`)
            player.runCommandAsync('playsound note.bass @s')
        break;
    }
})
