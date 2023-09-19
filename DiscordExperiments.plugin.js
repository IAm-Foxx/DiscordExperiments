/**
 * @name DiscordExperiments
 * @author TheFoxBoy
 * @description Access DiscordExperiments Tab
 * @version 1.4.0
 * @authorId 469566586718519307
 * @website https://github.com/The-Fox-Boy/DiscordExperiments
 * @source https://github.com/The-Fox-Boy/DiscordExperiments
 */

module.exports = class discordExperiments {
  start() {
    BdApi.showToast("DiscordExperiments v1.4.0 Loaded", {type:"info",icon: true,timeout: 7500,forceShow: true});
    try {
      let c = window.webpackChunkdiscord_app.push([[Symbol()],{},({c})=>Object.values(c)]);
      let u = c.find((x)=> x?.exports?.default?.getUsers).exports.default;
      let m = Object.values(u._dispatcher._actionHandlers._dependencyGraph.nodes);
      u.getCurrentUser().flags |= 1;
      m.find((x)=>x.name === "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
      try {m.find((x)=>x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user:{flags: 1}})} catch {}
      m.find((x)=>x.name === "ExperimentStore").storeDidChange()
    } catch (err) {
      console.log(err);
      BdApi.showNotice(
        "Oh No! There seems to be an error!",
        {
          type: "error",
          buttons: [
            {
              label: "Report an Error/Issue",
              onClick: () => window.open("https://github.com/The-Fox-Boy/DiscordExperiments/issues", "mozillaTab")
            }
          ]
        }
      );
      return BdApi.showNotice(
        `Error: ${err}`,
        {
          type: "error",
          buttons: [
            {
              label: "Report",
              onClick: () => window.open("https://github.com/The-Fox-Boy/DiscordExperiments/issues", "mozillaTab")
            }
          ]
        }
      );
    }
  }

  stop() {
    BdApi.showNotice("DiscordExperiments | You need to reboot BD to disable DiscordExperiments", {
      type: "warning",
      buttons: [{
        label: " Reboot BD",
        onClick: () => location.reload()
      }]
    });
  }
}
