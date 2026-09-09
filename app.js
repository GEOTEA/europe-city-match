const axes = ['A','H','I','G','E','C'];

const questions = [
  {axis:'A',category:'LIFESTYLE · 생활 방식',text:'여행지에서 가장 마음에 드는 하루는?',options:['한적한 곳에서 천천히 쉬기','여유롭게 산책하고 카페 방문하기','관광과 휴식을 적절히 섞기','여러 장소를 부지런히 돌아보기','축제와 사람이 모인 곳을 밤까지 즐기기']},
  {axis:'A',category:'LIFESTYLE · 생활 방식',text:'내가 살고 싶은 동네의 분위기는?',options:['조용하고 평온한 곳','느긋하고 아늑한 곳','적당히 활기찬 곳','새로운 행사가 자주 열리는 곳','언제나 사람과 활동이 넘치는 곳']},
  {axis:'H',category:'CULTURE · 역사와 문화',text:'도시를 여행할 때 가장 먼저 찾는 장소는?',options:['새롭게 조성된 복합문화공간','현대적인 건축물','도시를 대표하는 거리와 광장','오래된 성당과 박물관','도시 전체의 역사적 흔적']},
  {axis:'H',category:'CULTURE · 역사와 문화',text:'더 흥미롭게 느껴지는 도시의 이야기는?',options:['미래에 새롭게 만들어질 도시','최근 빠르게 성장한 도시','현재 사람들의 생활 모습','전통과 현대가 공존하는 도시','오랜 역사가 켜켜이 쌓인 도시']},
  {axis:'I',category:'INNOVATION · 기술과 변화',text:'내가 참여하고 싶은 도시 프로젝트는?',options:['전통시장과 골목 보존','주민 휴식 공간 조성','문화시설과 공연장 만들기','친환경 교통수단 개발하기','첨단 기술 연구단지 조성하기']},
  {axis:'I',category:'INNOVATION · 기술과 변화',text:'새로운 기술이 등장하면 나는?',options:['꼭 필요한지 먼저 지켜본다','익숙해진 뒤 천천히 사용한다','필요할 때 적절히 활용한다','적극적으로 배우고 활용한다','누구보다 먼저 시험해 본다']},
  {axis:'G',category:'CONNECTION · 세계와의 연결',text:'내가 살고 싶은 도시는?',options:['서로를 잘 아는 친밀한 도시','지역의 개성이 뚜렷한 도시','주민과 방문객이 어우러지는 도시','다양한 문화와 언어를 접하는 도시','세계 여러 나라의 사람이 모이는 도시']},
  {axis:'G',category:'CONNECTION · 세계와의 연결',text:'모둠 활동을 할 때 나는?',options:['혼자 맡은 일에 집중한다','친한 친구와 깊이 있게 협력한다','필요한 역할을 맡아 참여한다','서로 다른 의견을 적극적으로 연결한다','다양한 사람을 모아 협력을 이끈다']},
  {axis:'E',category:'GREEN LIFE · 환경과 생활',text:'우리 동네에 하나를 더 만들 수 있다면?',options:['편리한 상업시설','문화·공연 시설','넓은 광장과 휴식 공간','자전거도로와 대중교통망','도심 숲과 친환경 에너지 시설']},
  {axis:'E',category:'GREEN LIFE · 환경과 생활',text:'내가 생각하는 좋은 도시란?',options:['필요한 시설이 가까이 있는 도시','즐길 거리가 많은 도시','생활과 휴식이 조화로운 도시','걷거나 자전거로 이동하기 좋은 도시','다음 세대까지 환경을 지키는 도시']},
  {axis:'C',category:'SCENERY · 기후와 풍경',text:'가장 마음에 드는 여행지의 풍경은?',options:['눈과 얼음이 만든 북쪽의 풍경','서늘한 숲과 호수','온화한 공원과 강변','햇살이 비치는 해안 도시','따뜻한 바다와 활기찬 해변']},
  {axis:'C',category:'SCENERY · 기후와 풍경',text:'야외에서 활동하기 좋은 날씨는?',options:['춥고 맑은 날','서늘하고 상쾌한 날','온화하고 선선한 날','따뜻하고 햇살 좋은 날','여름처럼 덥고 뜨거운 날']}
];

const cities = [
  {id:'reykjavik',name:'레이캬비크',country:'아이슬란드',wiki:'Reykjavík',v:[2,2,4,3,5,1],type:'주요 도시 · 지열 에너지',title:'자연과 함께하는 독립적 탐험가',desc:'복잡한 일상보다 자연의 리듬을 즐기며, 남들과 다른 길도 담담하게 걸어가는 성향입니다.',book:'아이슬란드의 수도입니다. 판의 경계에 있어 화산 활동이 활발하며, 풍부한 지열 에너지를 도시 생활에 활용합니다.'},
  {id:'london',name:'런던',country:'영국',wiki:'London',v:[5,4,4,5,2,2],type:'세계 도시',title:'세계를 무대로 움직이는 도전가',desc:'다양한 사람과 기회가 모이는 곳에서 새로운 경험을 찾아 적극적으로 움직이는 성향입니다.',book:'영국의 수도이자 산업 혁명이 시작된 나라의 대표 도시입니다. 경제·문화적 영향력이 큰 세계 도시입니다.'},
  {id:'paris',name:'파리',country:'프랑스',wiki:'Paris',v:[4,5,3,5,2,3],type:'세계 도시 · 문화 도시',title:'일상에서도 아름다움을 찾는 감성가',desc:'풍부한 문화와 이야기에 마음이 끌리고, 익숙한 일상에서도 자신만의 아름다움을 발견합니다.',book:'프랑스의 수도이자 패션과 문화의 중심지입니다. 에펠탑을 비롯한 세계적인 랜드마크가 있습니다.'},
  {id:'nice',name:'니스',country:'프랑스',wiki:'Nice',v:[2,4,2,4,3,5],type:'지중해 휴양 도시',title:'햇살과 여유를 사랑하는 낭만가',desc:'빠르게 앞서가기보다 좋은 풍경과 편안한 시간을 충분히 누릴 줄 아는 성향입니다.',book:'프랑스 남부의 대표적인 휴양 도시입니다. 지중해성 기후가 나타나 여름이 덥고 건조합니다.'},
  {id:'madrid',name:'마드리드',country:'에스파냐',wiki:'Madrid',v:[5,4,3,4,2,5],type:'수도 · 정치 중심지',title:'열정과 에너지가 넘치는 활동가',desc:'사람들과 어울리고 새로운 활동에 참여할 때 에너지를 얻는 적극적인 성향입니다.',book:'에스파냐의 수도이자 정치 중심지입니다. 카탈루냐와 같은 지역의 자치와 갈등도 나타납니다.'},
  {id:'barcelona',name:'바르셀로나',country:'에스파냐',wiki:'Barcelona',v:[5,4,4,4,3,5],type:'항구 도시 · 문화 도시',title:'개성과 창의성을 표현하는 예술가',desc:'자신만의 감각을 자유롭게 표현하고, 전통과 새로운 생각을 조합하는 일을 즐깁니다.',book:'지중해와 맞닿은 항구 도시이자 카탈루냐의 중심지입니다. 가우디의 사그라다 파밀리아 성당으로 유명합니다.'},
  {id:'geneva',name:'제네바',country:'스위스',wiki:'Geneva',v:[2,3,3,5,4,2],type:'국제기구 도시',title:'대화와 균형을 중시하는 조정자',desc:'서로 다른 생각을 차분히 듣고 모두가 받아들일 수 있는 균형점을 찾는 성향입니다.',book:'스위스 제2의 도시로, 국제 연합 유럽 본부를 비롯한 여러 국제기구가 위치한 세계 도시입니다.'},
  {id:'brussels',name:'브뤼셀',country:'벨기에',wiki:'Brussels',v:[4,3,3,5,3,2],type:'유럽 연합의 중심 도시',title:'다양한 의견을 연결하는 협력가',desc:'각자의 차이를 존중하면서 공동의 목표를 위해 사람과 생각을 연결하는 데 강점이 있습니다.',book:'벨기에의 수도이며 유럽 연합의 주요 기관이 위치해, 유럽의 정치적 중심 역할을 합니다.'},
  {id:'rome',name:'로마',country:'이탈리아',wiki:'Rome',v:[4,5,2,4,2,5],type:'역사·문화 도시',title:'시간의 흔적을 탐색하는 이야기꾼',desc:'오래된 장소와 사람들의 이야기에 호기심이 많고, 과거에서 현재의 의미를 발견합니다.',book:'이탈리아의 수도로 다양한 고대 로마 유적이 분포한 문화 도시이며, 도시 안에 바티칸 시국이 있습니다.'},
  {id:'essen',name:'에센',country:'독일',wiki:'Essen',v:[3,3,4,3,4,2],type:'산업 전환 도시',title:'낡은 것에서 가능성을 찾는 재생가',desc:'이미 가진 것의 가치를 다시 발견하고, 쓸모를 잃은 공간을 새롭게 바꾸는 데 흥미를 느낍니다.',book:'과거 철강·석탄 산업이 발달했던 도시입니다. 산업 유산을 문화 공간으로 바꾸며 도시 전환을 이루었습니다.'},
  {id:'bilbao',name:'빌바오',country:'에스파냐',wiki:'Bilbao',v:[3,4,4,3,3,4],type:'산업 전환 도시',title:'문화로 변화를 만드는 혁신가',desc:'익숙한 모습을 그대로 두기보다 새로운 아이디어를 더해 매력적으로 변화시키는 성향입니다.',book:'쇠퇴한 공업 지역에 문화 시설을 조성해 활력을 되찾은 대표적인 산업 전환 도시입니다.'},
  {id:'manchester',name:'맨체스터',country:'영국',wiki:'Manchester',v:[4,3,4,4,2,2],type:'산업 전환 도시',title:'끊임없이 다시 도전하는 개척자',desc:'변화를 두려워하지 않고 실패와 경험을 발판으로 새로운 기회를 만들어 가는 성향입니다.',book:'산업 혁명기에 면직물 공업으로 성장했습니다. 이후 산업 구조를 바꾸며 새로운 도시 기능을 발전시켰습니다.'},
  {id:'sophia',name:'소피아 앙티폴리스',country:'프랑스',wiki:'Sophia Antipolis',v:[2,1,5,4,4,5],type:'첨단 산업 지역',title:'자연 속에서 미래를 설계하는 연구자',desc:'조용히 깊이 탐구하면서도, 지식과 기술을 연결해 전에 없던 해답을 만드는 성향입니다.',book:'프랑스 남부에 조성된 첨단 산업 단지입니다. 연구 기관과 정보 통신 관련 기업이 모여 있습니다.'},
  {id:'oulu',name:'오울루',country:'핀란드',wiki:'Oulu',v:[2,1,5,3,5,1],type:'첨단 산업 도시',title:'차분하게 미래 기술을 만드는 개발자',desc:'화려하게 드러내기보다 한 가지 문제에 집중해 실용적이고 새로운 해결책을 만드는 성향입니다.',book:'핀란드 북부의 첨단 산업 도시입니다. 대학과 연구 기관을 중심으로 정보 통신 산업이 발달했습니다.'},
  {id:'kista',name:'시스타',country:'스웨덴 · 스톡홀름',wiki:'Kista',v:[4,1,5,5,3,1],type:'첨단 산업 지구',title:'세계와 연결되는 디지털 선구자',desc:'빠르게 변화하는 기술을 즐기고, 세계 여러 사람과 연결해 아이디어를 확장하는 성향입니다.',book:'스톡홀름에 있는 첨단 산업 지구로 정보 통신 기술 기업과 연구 기관이 집중되어 있습니다.'},
  {id:'freiburg',name:'프라이부르크',country:'독일',wiki:'Freiburg im Breisgau',v:[2,4,3,2,5,3],type:'친환경 도시',title:'지속가능한 일상을 실천하는 생태주의자',desc:'거창한 말보다 생활 속 작은 선택을 꾸준히 실천하며 주변 환경을 소중히 여깁니다.',book:'태양광 에너지, 대중교통, 자전거 이용을 확대하며 지속가능한 도시를 만들어 가는 독일의 친환경 도시입니다.'},
  {id:'copenhagen',name:'코펜하겐',country:'덴마크',wiki:'Copenhagen',v:[3,3,4,4,5,2],type:'친환경 도시',title:'편리함과 환경을 조화시키는 설계자',desc:'사람들의 편리한 생활과 환경 보호가 함께 가능하도록 현실적인 방법을 찾는 성향입니다.',book:'자전거 중심 교통 체계와 친환경 에너지 정책을 적극적으로 운영하는 덴마크의 수도입니다.'},
  {id:'malmo',name:'말뫼',country:'스웨덴',wiki:'Malmö',v:[3,2,4,4,5,2],type:'친환경 도시 · 전환 도시',title:'다양성과 친환경 변화를 이끄는 실천가',desc:'다양한 배경을 가진 사람들과 어울리며 더 지속가능한 공동체를 직접 만들어 가는 성향입니다.',book:'과거 산업 지역을 친환경 주거 지역으로 전환하고 재생 에너지와 지속가능한 도시 개발을 추진했습니다.'}
];

const cityCoordinates={
  reykjavik:[64.1466,-21.9426],london:[51.5074,-0.1278],paris:[48.8566,2.3522],nice:[43.7102,7.262],madrid:[40.4168,-3.7038],barcelona:[41.3874,2.1686],geneva:[46.2044,6.1432],brussels:[50.8503,4.3517],rome:[41.9028,12.4964],essen:[51.4556,7.0116],bilbao:[43.263,-2.935],manchester:[53.4808,-2.2426],sophia:[43.6156,7.055],oulu:[65.0121,25.4651],kista:[59.403,17.944],freiburg:[47.999,7.842],copenhagen:[55.6761,12.5683],malmo:[55.605,13.0038]
};

const state={current:0,answers:Array(questions.length).fill(null),scores:null,ranked:[],result:null};
const $=s=>document.querySelector(s);
const screens=['#startScreen','#quizScreen','#loadingScreen','#resultScreen'];
const letters=['A','B','C','D','E'];

function show(id){screens.forEach(s=>$(s).classList.toggle('active',s===id));window.scrollTo(0,0)}
function start(){state.current=0;state.answers.fill(null);show('#quizScreen');renderQuestion()}
function renderQuestion(){
  const q=questions[state.current];
  $('#questionNumber').textContent=String(state.current+1).padStart(2,'0');
  $('#progressBar').style.width=`${((state.current+1)/questions.length)*100}%`;
  $('#questionCategory').textContent=q.category;$('#questionText').textContent=q.text;
  $('#backButton').style.visibility=state.current?'visible':'hidden';
  $('#options').innerHTML=q.options.map((o,i)=>`<button class="option ${state.answers[state.current]===i+1?'selected':''}" data-value="${i+1}"><span class="letter">${letters[i]}</span><span>${o}</span></button>`).join('');
  $('#options').querySelectorAll('.option').forEach(btn=>btn.addEventListener('click',()=>selectAnswer(Number(btn.dataset.value),btn)));
}
function selectAnswer(value,btn){
  state.answers[state.current]=value;
  document.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');
  setTimeout(()=>{if(state.current<questions.length-1){state.current++;renderQuestion()}else calculate()},230);
}
function calculate(){
  const profile={};axes.forEach(a=>{const vals=questions.map((q,i)=>q.axis===a?state.answers[i]:null).filter(Boolean);profile[a]=vals.reduce((x,y)=>x+y,0)/vals.length});
  state.scores=profile;
  state.ranked=cities.map(city=>{
    let distance=0,totalWeight=0;
    city.v.forEach((target,i)=>{const a=axes[i],pair=questions.map((q,j)=>q.axis===a?state.answers[j]:null).filter(Boolean);const strong=pair.every(x=>x===1)||pair.every(x=>x===5);const w=strong?1.2:1;distance+=w*Math.abs(profile[a]-target);totalWeight+=w});
    return {...city,raw:100*(1-distance/(4*totalWeight))};
  }).sort((a,b)=>b.raw-a.raw);
  state.result=state.ranked[0];
  show('#loadingScreen');
  const captions=['생활의 리듬을 살펴보는 중...','좋아하는 도시 풍경을 찾는 중...','유럽의 도시들과 비교하는 중...'];let i=0;$('#loadingCaption').textContent=captions[0];
  const tick=setInterval(()=>{$('#loadingCaption').textContent=captions[++i%captions.length]},550);
  setTimeout(()=>{clearInterval(tick);renderResult()},1650);
}
async function fetchCityImage(city){
  try{
    const response=await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(city.wiki)}`);
    if(!response.ok)throw new Error('image');const data=await response.json();
    return {src:data.originalimage?.source||data.thumbnail?.source||'',credit:`사진: Wikimedia Commons · ${data.title}`};
  }catch{return {src:'',credit:'도시 사진을 불러오지 못했습니다.'}}
}
async function renderResult(){
  const city=state.result;const score=getMatchScore(city);
  $('#cityName').textContent=city.name;$('#countryName').textContent=city.country;$('#cityType').textContent=city.type;$('#matchScore').textContent=score;
  $('#personalityTitle').textContent=`“${city.title}”`;$('#personalityDescription').textContent=city.desc;$('#textbookDescription').textContent=city.book;
  const countryOnly=value=>value.split(' · ')[0];
  $('#similarCities').innerHTML=state.ranked.slice(1,3).map(x=>`<span class="similar-city"><b>${x.name}</b><small>${countryOnly(x.country)}</small></span>`).join('');
  $('#locationCity').textContent=city.name;$('#locationCountry').textContent=countryOnly(city.country);
  const [lat,lon]=cityCoordinates[city.id]||[53,10];
  const position=[((lon+25)/70)*100,((72-lat)/38)*100];
  $('#mapMarker').style.left=`${position[0]}%`;$('#mapMarker').style.top=`${position[1]}%`;
  const traitData=axes.map((a,i)=>({a,value:state.scores[a],target:city.v[i]})).sort((x,y)=>Math.abs(y.value-3)-Math.abs(x.value-3)).slice(0,3);
  const labels={A:['여유로움','활동 에너지'],H:['현대 감각','문화 감성'],I:['안정 지향','혁신 성향'],G:['지역 친밀','세계 연결'],E:['도시 편의','친환경성'],C:['북쪽 풍경','따뜻한 햇살']};
  $('#traits').innerHTML=traitData.map(t=>`<div class="trait"><span>${labels[t.a][t.value>=3?1:0]}</span><strong>${Math.round(58+Math.abs(t.value-3)*17)}%</strong></div>`).join('');
  show('#resultScreen');
  const img=await fetchCityImage(city);const el=$('#cityImage');
  el.style.display=img.src?'block':'none';el.src=img.src;el.alt=`${city.name} 도시 전경`;$('#photoCredit').textContent=img.credit;
  history.replaceState(null,'',`${location.pathname}?city=${city.id}`);
}
function toast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2100)}
function getMatchScore(city){return Number.isFinite(city.raw)?Math.max(62,Math.min(97,Math.round(city.raw))):92}
function roundedRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill()}
function wrapText(ctx,text,x,y,maxWidth,lineHeight,maxLines=99){const chars=[...text];let line='',lines=[];for(const ch of chars){const test=line+ch;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=ch}else line=test}if(line)lines.push(line);lines.slice(0,maxLines).forEach((l,i)=>ctx.fillText(l,x,y+i*lineHeight));return y+Math.min(lines.length,maxLines)*lineHeight}
async function makeResultImage(){
  await document.fonts.ready;const city=state.result,canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1920;const ctx=canvas.getContext('2d');
  const g=ctx.createLinearGradient(0,0,1080,1920);g.addColorStop(0,'#173b4c');g.addColorStop(1,'#0f718f');ctx.fillStyle=g;ctx.fillRect(0,0,1080,1920);
  let drew=false;const img=$('#cityImage');if(img.src&&img.complete&&img.naturalWidth){try{ctx.drawImage(img,0,0,1080,610);drew=true}catch{}}
  if(drew){const shade=ctx.createLinearGradient(0,130,0,610);shade.addColorStop(0,'rgba(10,28,38,0)');shade.addColorStop(1,'rgba(10,28,38,.94)');ctx.fillStyle=shade;ctx.fillRect(0,0,1080,610)}
  ctx.textAlign='left';ctx.fillStyle='rgba(255,255,255,.82)';ctx.font='500 27px "Noto Sans KR"';ctx.fillText('당신과 잘 맞는 유럽 도시는',70,400);
  ctx.fillStyle='#fff';ctx.font='700 76px "Gowun Batang"';ctx.fillText(city.name,70,490);ctx.fillStyle='#bfeaf0';ctx.font='600 25px "Noto Sans KR"';ctx.fillText(city.country,72,538);
  ctx.fillStyle='#fff';roundedRect(ctx,42,570,996,1270,34);
  ctx.fillStyle='#1677a8';ctx.font='800 23px "Noto Sans KR"';ctx.fillText(city.type,80,640);ctx.textAlign='right';ctx.fillStyle='#b67605';ctx.fillText(`${getMatchScore(city)}% MATCH`,1000,640);ctx.textAlign='left';
  ctx.fillStyle='#17242d';ctx.font='700 42px "Gowun Batang"';ctx.fillText(`“${city.title}”`,80,715);ctx.fillStyle='#53616a';ctx.font='400 26px "Noto Sans KR"';wrapText(ctx,city.desc,80,770,920,42,3);
  ctx.fillStyle='#eef4f4';roundedRect(ctx,70,870,940,158,18);ctx.fillStyle='#1677a8';ctx.font='800 21px "Noto Sans KR"';ctx.fillText('교과서 속 도시',98,910);ctx.fillStyle='#3e505a';ctx.font='400 23px "Noto Sans KR"';wrapText(ctx,city.book,98,953,870,34,3);

  ctx.fillStyle='#1677a8';ctx.font='800 21px "Noto Sans KR"';ctx.fillText('도시의 위치',80,1090);ctx.textAlign='right';ctx.fillStyle='#17242d';ctx.font='700 22px "Noto Sans KR"';ctx.fillText(`${city.name}  `,1000,1090);const cityWidth=ctx.measureText(`${city.name}  `).width;ctx.fillStyle='#7c8a91';ctx.font='500 17px "Noto Sans KR"';ctx.fillText(city.country.split(' · ')[0],1000-cityWidth,1090);ctx.textAlign='left';
  const map=$('.map-land'),mx=190,my=1120,mw=700,mh=615;
  ctx.fillStyle='#b9deeb';ctx.fillRect(mx,my,mw,mh);if(map.complete&&map.naturalWidth){try{ctx.drawImage(map,mx,my,mw,mh)}catch{}}
  const [lat,lon]=cityCoordinates[city.id]||[53,10],px=mx+((lon+25)/70)*mw,py=my+((72-lat)/38)*mh;
  ctx.beginPath();ctx.arc(px,py,15,0,Math.PI*2);ctx.fillStyle='rgba(230,75,60,.24)';ctx.fill();ctx.beginPath();ctx.arc(px,py,8,0,Math.PI*2);ctx.fillStyle='#e64b3c';ctx.fill();ctx.lineWidth=4;ctx.strokeStyle='#fff';ctx.stroke();
  ctx.strokeStyle='#d8e1e2';ctx.lineWidth=2;ctx.strokeRect(mx,my,mw,mh);
  ctx.fillStyle='#78878d';ctx.font='500 19px "Noto Sans KR"';ctx.fillText(`함께 잘 맞는 도시  ${state.ranked.slice(1,3).map(x=>`${x.name}(${x.country.split(' · ')[0]})`).join(' · ')}`,80,1790);
  ctx.textAlign='center';ctx.fillStyle='rgba(255,255,255,.72)';ctx.font='600 21px "Noto Sans KR"';ctx.fillText('나와 잘 맞는 유럽 도시는?',540,1875);ctx.fillStyle='rgba(255,255,255,.5)';ctx.font='400 15px "Noto Sans KR"';ctx.fillText('© 2026 이인규 선생님(덕계중). All rights reserved.',540,1905);
  return new Promise((resolve,reject)=>{try{canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('blob')),'image/png',.95)}catch(e){reject(e)}});
}
async function saveImage(){try{const blob=await makeResultImage();const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`나와_잘_맞는_도시_${state.result.name}.png`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);toast('결과 이미지를 저장했어요.')}catch{toast('사진 보호 설정으로 저장할 수 없어요. 화면을 캡처해 주세요.')}}
async function shareResult(){
  const url=`${location.origin}${location.pathname}?city=${state.result.id}`;const data={title:`나와 잘 맞는 유럽 도시는 ${state.result.name}!`,text:`나는 ${state.result.title} 유형, ${state.result.name}와 잘 맞아요.`,url};
  try{const blob=await makeResultImage();const file=new File([blob],`유럽도시_${state.result.name}.png`,{type:'image/png'});if(navigator.canShare?.({files:[file]})){await navigator.share({...data,files:[file]});return}}catch{}
  if(navigator.share){try{await navigator.share(data);return}catch(e){if(e.name==='AbortError')return}}
  try{await navigator.clipboard.writeText(url);toast('결과 링크를 복사했어요.')}catch{toast('주소창의 링크를 복사해 주세요.')}
}
function openSharedResult(id){const city=cities.find(c=>c.id===id);if(!city)return false;state.result=city;state.ranked=[city,...cities.filter(c=>c.id!==id).slice(0,2)];state.scores=Object.fromEntries(axes.map((a,i)=>[a,city.v[i]]));renderResult();return true}

$('#startButton').addEventListener('click',start);$('#backButton').addEventListener('click',()=>{if(state.current){state.current--;renderQuestion()}});$('#homeButton').addEventListener('click',()=>{history.replaceState(null,'',location.pathname);show('#startScreen')});
$('#restartButton').addEventListener('click',()=>{history.replaceState(null,'',location.pathname);start()});$('#saveButton').addEventListener('click',saveImage);$('#shareButton').addEventListener('click',shareResult);
const shared=new URLSearchParams(location.search).get('city');if(!shared||!openSharedResult(shared))show('#startScreen');
