import { NS } from "@ns";
import { calcBestTarget } from "./lib/helpers/choose-best-server";


export async function main(ns:NS): Promise<void> {
    // gets first target when function is run
    const curTarget = calcBestTarget(ns);
    const adjServers = ns.scan();
    const hackHelper = "/lib/helpers/hack-script.js";
    const helperScripts = [hackHelper];

    for(let i = 0; i < adjServers.length; ++i){
        let curServer = adjServers[i];
        if (ns.fileExists("BruteSSH.exe")){
            ns.brutessh(curServer)
        }
        ns.nuke(curServer);
        ns.scp(helperScripts, curServer);
        // checks for brutessh file
        ns.tprint(curTarget);
        ns.exec(hackHelper, curServer, 1, curTarget);
    }
    
    while(true){
        await ns.sleep(60000);
    }
}