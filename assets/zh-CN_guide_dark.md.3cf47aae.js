import{_ as n,o as l,c as p,a as s,b as o,t as e,g as c}from"./app.bb3e78c2.js";const u=JSON.parse('{"title":"\u591C\u95F4\u6A21\u5F0F","description":"","frontmatter":{"title":"\u591C\u95F4\u6A21\u5F0F","lang":"en-US"},"headers":[{"level":2,"title":"\u539F\u7406","slug":"\u539F\u7406","link":"#\u539F\u7406","children":[]},{"level":2,"title":"\u4E3B\u9898\u8272\u8986\u76D6","slug":"\u4E3B\u9898\u8272\u8986\u76D6","link":"#\u4E3B\u9898\u8272\u8986\u76D6","children":[]}],"relativePath":"zh-CN/guide/dark.md"}'),t={name:"zh-CN/guide/dark.md"},r={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),F=c(`<p>\u9ED8\u8BA4\u7684\u8BDD\u591C\u95F4\u6A21\u5F0F\u5207\u6362\u6309\u94AE\u662F\u4E00\u76F4\u6709\u7684\uFF0C\u53F3\u4E0A\u89D2\u90A3\u4E2A\u592A\u9633\u56FE\u6807</p><h2 id="\u539F\u7406" tabindex="-1">\u539F\u7406 <a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a></h2><p>\u5F00\u5173\u64CD\u4F5C\u4FEE\u6539\u7684\u662F HTML \u6839\u6807\u7B7E\u7684\u6837\u5F0F\uFF0C\u4F1A\u52A0\u4E0A dark \u6837\u5F0F</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dark</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zh-CN</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u4E8B\u5148\u5B9A\u4E49\u4E00\u4E9B css\u53D8\u91CF\u6765\u5B8C\u6210\u4E0D\u540C\u8BED\u8A00\u4E0B\u6216\u8005\u4E0D\u540C\u6A21\u5F0F\u4E0B\u7684\u6837\u5F0F\u53D8\u6362</p><h2 id="\u4E3B\u9898\u8272\u8986\u76D6" tabindex="-1">\u4E3B\u9898\u8272\u8986\u76D6 <a class="header-anchor" href="#\u4E3B\u9898\u8272\u8986\u76D6" aria-hidden="true">#</a></h2><p>\u4FEE\u6539 theme/custom.scss \u6587\u4EF6\u5373\u53EF</p><p>\u7B80\u5355\u5C55\u793A\u90E8\u5206</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u91CD\u5199\u4E3B\u9898\u8272</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4E3B\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-c-brand</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--vp-c-blue</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-c-brand-light</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--vp-c-blue-light</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-c-brand-lighter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--vp-c-blue-lighter</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-c-brand-dark</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--vp-c-blue-dark</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-c-brand-darker</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--vp-c-blue-darker</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  // \u526F\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-c-second</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--vp-c-pink</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-c-second-light</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--vp-c-pink-light</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-c-second-lighter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--vp-c-pink-lighter</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-c-second-dark</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--vp-c-pink-dark</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-c-second-darker</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--vp-c-pink-darker</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">dark</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,9);function y(a,A,C,i,d,h){return l(),p("div",null,[s("h1",r,[o(e(a.$frontmatter.title)+" ",1),D]),F])}const _=n(t,[["render",y]]);export{u as __pageData,_ as default};
