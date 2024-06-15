import { NS } from "@ns";

// hack helper to be used with deploy-script
// takes a target as an arg
export async function main(ns: NS): Promise<void> {
    // assumes target is already nuked and no ports to open
    const hackTarget = ns.args[0].toString()
    while(true){
        await ns.hack(hackTarget)
    }
}