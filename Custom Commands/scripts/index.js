console.warn('reloaded!');
import { world } from '@minecraft/server';

world.beforeEvents.chatSend.subscribe((eventData) => {
    const player = eventData.sender;
    if (!eventData.message.startsWith("!")) return;
    switch (eventData.message) {
        case '!gmc':
            eventData.cancel = true;
            player.runCommandAsync('gamemode c')
            player.runCommandAsync('tellraw @s {"rawtext":[{"text":"Successfully switched to creative!"}]}');
            break;
        case '!gms':
            eventData.cancel = true;
            player.runCommandAsync('gamemode s');
            player.runCommandAsync('tellraw @s {"rawtext":[{"text":"Successfully switched to survival!"}]}');
            break;
        case '!help':
            eventData.cancel = true;
            player.runCommandAsync('tellraw @s {"rawtext":[{"text":"§eShowing help list §o§b1/1§r§e.\n§f1. §2!gmc\n§f2. §2!gmc\n§f3. §2!cc\n§f4. §2!spawn"}]}');
            break;
        case '!cc':
            eventData.cancel = true;
            player.runCommandAsync('tellraw @a {"rawtext":[{"text":"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "}]}');
            break;
        case '!spawn':
            eventData.cancel = true;
            player.runCommandAsync('tp @s 0 -60 0 facing 0 -60 1');
            break;
        default:
            eventData.cancel = true;
            player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§cHey! §r§7Command doesn't exist! Please do §o§g!help §r§7for the list of commands."}]}`)
            player.runCommandAsync('playsound note.bass @s')
        break;
    }
})