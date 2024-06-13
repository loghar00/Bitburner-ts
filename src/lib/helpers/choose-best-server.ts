import { NS } from "@ns";

export function calcBestTarget(ns: NS): String{
const pHackLevel = ns.getHackingLevel();
  const servers0ports = ns.scan();
  var bestTarget = servers0ports[0];
  var bestTargetMoney = ns.getServerMaxMoney(bestTarget);
  // checks for best server using servers right next to running server
  // may add arg/flag for checking for servers n nodes deep
  for (let i = 0; i < servers0ports.length; ++i){
    let curServer = servers0ports[i];
    let curServerMoneyThresh = ns.getServerMaxMoney(curServer);
    let curServerHackThresh = ns.getServerRequiredHackingLevel(curServer)
    // if the server has more money than what we've seen and the hack level is 1/2
    // of current hack level -> make server the best target
    if (curServerMoneyThresh > bestTargetMoney && curServerHackThresh < (pHackLevel / 2)){
      bestTarget = curServer;
      bestTargetMoney = curServerMoneyThresh;
    }
  }
  // return the best server to target
  // meant to be used with controller script
  return bestTarget;
}