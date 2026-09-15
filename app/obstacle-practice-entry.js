export function installObstaclePractice({store,start,wardrobe,subscribeWardrobe}){
 const params=new URLSearchParams(location.search);
 if(params.get('map')!=='obstacle'||params.get('practice')!=='1')return;
 const host=document.createElement('section');host.className='obstacle-practice-entry';host.setAttribute('aria-label','Obstacle Dash practice');
 const title=document.createElement('strong');title.textContent='Obstacle Dash';
 const info=document.createElement('span');info.textContent='Race against 4 bots · Move + Jump';
 const button=document.createElement('button');button.textContent='Start race';button.type='button';
 const back=document.createElement('a');back.href='/67park-kimi-mobile/?online=1&v=ui-39';back.textContent='Back to island';
 button.onclick=()=>{if(wardrobe.open||store.getState().phase==='playing')return;start();};
 host.append(title,info,button,back);document.body.append(host);
 const update=()=>{host.hidden=wardrobe.open||!['roam','ready'].includes(store.getState().phase);};
 const unsub=store.subscribe(update),unsubWardrobe=subscribeWardrobe(update);update();
 window.addEventListener('pagehide',()=>{unsub();unsubWardrobe?.();host.remove();},{once:true});
}
