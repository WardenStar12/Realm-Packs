import * as Minecraft from "@minecraft/server"
import { world } from '@minecraft/server'

Minecraft.system.run(function tick(){
    Minecraft.system.run(tick)

    for (let player of Minecraft.world.getPlayers()){
        let tags = player.getTags();

				if (tags.filter(tag => tag.startsWith('rank:'))){
					let ranks = tags.filter(tag => tag.startsWith('rank:')).map(tag => tag.replace('rank:', ''))
    				ranks = ranks.length ? ranks : ["§aMember"]
            	player.nameTag = (`§l§8<§r${ranks.join("§r] [")}§r§l§8> §r§f${player.name}`)
        		} else {
					player.nameTag = (`§l§8<§r[§aMember§l§8> §r§f${player.name}`)
				}
					
    }
})

world.beforeEvents.chatSend.subscribe((data) => {
    const tags = data.sender.getTags()
    let ranks = tags.filter(tag => tag.startsWith('rank:')).map(tag => tag.replace('rank:', ''))
    ranks = ranks.length ? ranks : ["§aMember"]
    if (data.message.startsWith("!*")){
        data.cancel = true
        return
    }
    const text = `§l§8<§r${ranks.join("§r] [")}§r§l§8> §r§f${data.sender.name} §c» §7${data.message}`
    world.sendMessage({rawtext: [{text: text}]})
    data.cancel = true
})