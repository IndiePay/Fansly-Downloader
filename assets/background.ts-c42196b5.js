import{aq as n,ar as h}from"./common-1bc81878.js";const i=async()=>{const t=await chrome.tabs.create({url:"https://fansly.com",active:!1}),a=(await chrome.scripting.executeScript({target:{tabId:t.id},func:()=>{const e=JSON.parse(localStorage.getItem("session_active_session")||"null");return e&&(e.deviceId=localStorage.getItem("device_device_id")||""),e}}))[0].result;return a?(await chrome.storage.local.set({session:a}),t.id&&chrome.tabs.remove(t.id),!0):(await chrome.windows.update(t.windowId,{focused:!0}),await chrome.tabs.update(t.id,{active:!0}),!1)},r=async()=>{await i()&&d("/")};chrome.runtime.onInstalled.addListener(t=>{t.reason==chrome.runtime.OnInstalledReason.INSTALL&&r()});chrome.action.onClicked.addListener(async()=>{r()});chrome.runtime.onMessage.addListener((t,o,a)=>(t.method=="RECHECK"&&i().then(a),t=="GET_TOKEN"&&chrome.storage.local.get("token").then(({token:e})=>a(e)),t.method=="getAccountInfo"&&n().then(e=>{a(e)}),t.method=="updateQuota"&&n().then(e=>{if(!e)return a(!1);h(e.email,e.token,t.payload||1).then(c=>{a(c)})}),t.method=="createWindow"&&d(t.payload),t.method=="Download"&&chrome.downloads.download({url:t.url,filename:t.filename,conflictAction:"overwrite",saveAs:!1}),!0));async function d(t){const o=await chrome.system.display.getInfo(),a=1440,e=768,c=Math.ceil((o[0].bounds.width-a)/2),l=Math.ceil((o[0].bounds.height-e)/2),s=chrome.runtime.getURL(`index.html#${t}`);return await chrome.windows.create({url:s,type:"panel",focused:!0,width:a,height:e,left:c,top:l})}