const services=[
 ['layout-template','Bubble Development',"Build powerful web applications and SaaS products using Bubble's flexible no-code platform.",['SaaS applications','MVP development','Marketplace platforms','Complex workflows','API integrations']],
 ['sparkles','AI Integration','Bring AI into your product with practical, business-focused implementations.',['OpenAI integrations','AI assistants','Content generation','AI automation','AI workflows']],
 ['pen-tool','UI/UX Design','Create intuitive, conversion-focused interfaces that users actually enjoy.',['Product design','Responsive design','Design systems','Wireframes','UX optimisation']],
 ['plug-zap','API & Third-Party Integrations','Connect your product with the tools your business already depends on.',['Stripe','Twilio','SendGrid','Google APIs','Custom APIs']],
 ['layers-3','SaaS & Marketplace Development','Turn your business model into a scalable digital platform.',['Multi-user platforms','Subscription systems','Payments','Dashboards','Admin systems']],
 ['workflow','Automation','Eliminate repetitive work by connecting your systems and automating your workflows.',['Business automation','Notifications','CRM workflows','Data synchronisation','Backend automation']]
];
const features=[['badge-check','Business-First Thinking','We understand the business problem before building the solution.'],['rocket','Fast Product Development','Validate ideas and launch products faster without unnecessary development overhead.'],['network','Complex Integrations','Payments, APIs, AI, communications, automation and third-party systems — connected into one product.'],['heart-handshake','Long-Term Partnership',"We don't disappear after launch. We help improve, maintain and scale your product."]];
const cases=[['Girl Par Golf','A community and events platform helping women golfers find playing partners, discover golf events, and connect through shared golfer profiles — plus a vendor marketplace for approved event partners.','Bubble • Events & Booking • Vendor Marketplace'],['The Wandering Delbino','A social matching app for travelers, connecting people based on shared flights, destinations and travel plans so they can meet like-minded people on the road.','Bubble • Matching Workflows'],['Steyel','An AI-powered fashion discovery app that turns any outfit photo into a shoppable catalog — identifying clothing and accessories and surfacing where to buy them.','Bubble • AI Image Recognition']];
const process=[['01','Discover','We understand your idea, business model, users and goals.'],['02','Plan','We define the product structure, workflows, technical approach and roadmap.'],['03','Design','We create a modern, intuitive and conversion-focused product experience.'],['04','Build','We develop the application, integrations, workflows and backend systems.'],['05','Launch & Scale','We test, launch, optimise and continue improving your product.']];
const stats=[['3+','Years','Digital Product Development'],['50+','Features','Features & Workflows Delivered'],['20+','Integrations','Integrations Implemented'],['10+','Products','Products & Platforms Built']];
const testimonials=[['Maya Chen','Founder, FutureLayer','“The team brought rare clarity to a complicated product idea. We went from a loose concept to a platform our customers can use — without the usual development drag.”'],['Alex Walker','Operations Director, Northbeam','“Thoughtful, responsive and exceptionally strong on the details. Every workflow was considered from the business side, not just the technical one.”'],['Samir Patel','Co-founder, ClauseFlow','“Web Perdictors made AI feel practical. The product is cleaner, faster and much easier for our team to operate than we expected.”']];
const faqs=[['What types of products do you build?','We build SaaS platforms, marketplaces, internal business tools, MVPs, dashboards and custom web applications.'],['Why use Bubble?','Bubble allows businesses to launch sophisticated applications faster while reducing traditional development overhead.'],['Can you integrate AI into an existing application?','Yes. We can integrate AI capabilities into existing Bubble and web applications.'],['Can you work with an existing Bubble application?','Yes. We can audit, improve, debug, redesign and extend existing Bubble applications.'],['Do you provide support after launch?','Yes. We can provide ongoing maintenance, improvements and product development support.'],['How do we start?','Book a free consultation and tell us about your product, goals and current challenges.']];
const icon=n=>`<i data-lucide="${n}"></i>`;
document.querySelector('#services-grid').innerHTML=services.map((s,i)=>`<article class="service-card reveal"><div class="service-icon">${icon(s[0])}</div><span class="service-num">0${i+1}</span><h3>${s[1]}</h3><p>${s[2]}</p><div class="tag-list">${s[3].map(t=>`<span>${t}</span>`).join('')}</div></article>`).join('');
document.querySelector('#partner-features').innerHTML=features.map(f=>`<article class="partner-feature reveal"><div>${icon(f[0])}</div><h3>${f[1]}</h3><p>${f[2]}</p></article>`).join('');
document.querySelector('#case-grid').innerHTML=cases.map((c,i)=>`<article class="case-card reveal"><div class="case-art"><div class="mock-window"></div></div><div class="case-content"><span class="case-kicker">0${i+1} — CASE STUDY</span><h3>${c[0]}</h3><p>${c[1]}</p><div class="case-footer"><span class="case-tech">${c[2]}</span><a href="#contact" aria-label="Ask about ${c[0]}">${icon('arrow-up-right')}</a></div></div></article>`).join('');
document.querySelector('#process-track').innerHTML=process.map(p=>`<article class="process-step reveal"><span>${p[0]}</span><h3>${p[1]}</h3><p>${p[2]}</p></article>`).join('');
document.querySelector('#stats-grid').innerHTML=stats.map(s=>`<div class="stat reveal"><b data-count="${s[0]}">${s[0]}</b><p>${s[2]}</p></div>`).join('');
document.querySelector('#testimonial-track').innerHTML=testimonials.map((t,i)=>`<article class="testimonial ${i?'optional-testimonial':''}"><div class="quote-mark">“</div><blockquote>${t[2].replace(/[“”]/g,'')}</blockquote><div class="person"><div class="avatar">${t[0].split(' ').map(x=>x[0]).join('')}</div><div><b>${t[0]}</b><small>${t[1]}</small></div></div></article>`).join('');
document.querySelector('#faq-list').innerHTML=faqs.map((f,i)=>`<article class="faq-item ${i===0?'open':''}"><button class="faq-question" aria-expanded="${i===0}">${f[0]} ${icon('plus')}</button><div class="faq-answer"><p>${f[1]}</p></div></article>`).join('');
lucide.createIcons();
const nav=document.querySelector('.nav-wrap'),menu=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>20));menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open);});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.querySelectorAll('.faq-question').forEach(q=>q.addEventListener('click',()=>{const item=q.parentElement,was=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(x=>{x.classList.remove('open');x.querySelector('button').setAttribute('aria-expanded','false')});if(!was){item.classList.add('open');q.setAttribute('aria-expanded','true')}}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
let slide=0;const track=document.querySelector('#testimonial-track');function updateSlider(){if(innerWidth<561){track.querySelectorAll('.testimonial').forEach((el,i)=>el.style.display=i===slide?'block':'none')}else track.querySelectorAll('.testimonial').forEach(el=>el.style.display='block')}updateSlider();document.querySelector('.next').onclick=()=>{slide=(slide+1)%testimonials.length;updateSlider()};document.querySelector('.previous').onclick=()=>{slide=(slide+testimonials.length-1)%testimonials.length;updateSlider()};addEventListener('resize',updateSlider);
document.querySelector('#contact-form').addEventListener('submit',async e=>{
  e.preventDefault();
  const form=e.currentTarget;
  const status=form.querySelector('.form-status');
  const button=form.querySelector('button[type="submit"]');
  const originalButtonText=button.innerHTML;
  button.disabled=true;
  button.textContent='Sending…';
  status.textContent='';
  status.classList.remove('form-status-error','form-status-success');
  try{
    const response=await fetch('https://formspree.io/f/moeabgjk',{
      method:'POST',
      body:new FormData(form),
      headers:{'Accept':'application/json'}
    });
    if(response.ok){
      status.textContent='Thanks — your project inquiry has been sent. We\u2019ll be in touch shortly.';
      status.classList.add('form-status-success');
      form.reset();
    }else{
      const data=await response.json().catch(()=>null);
      const message=data&&data.errors&&data.errors.length?data.errors.map(x=>x.message).join(', '):'Something went wrong. Please try again or email us directly.';
      status.textContent=message;
      status.classList.add('form-status-error');
    }
  }catch(err){
    status.textContent='Something went wrong. Please check your connection and try again, or email us directly.';
    status.classList.add('form-status-error');
  }finally{
    button.disabled=false;
    button.innerHTML=originalButtonText;
  }
});
