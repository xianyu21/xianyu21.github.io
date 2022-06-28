import{_ as s,c as t,a as n,b as p,t as o,g as c,o as e}from"./app.7b0d2c51.js";const _='{"title":"\u591C\u95F4\u6A21\u5F0F","description":"","frontmatter":{"title":"\u591C\u95F4\u6A21\u5F0F","lang":"en-US"},"headers":[{"level":2,"title":"\u539F\u7406","slug":"\u539F\u7406"},{"level":2,"title":"css\u53D8\u91CF","slug":"css\u53D8\u91CF"}],"relativePath":"zh-CN/guide/dark.md","lastUpdated":null}',u={},l={id:"frontmatter-title",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),k=c(`<p>\u9ED8\u8BA4\u7684\u8BDD\u591C\u95F4\u6A21\u5F0F\u5207\u6362\u6309\u94AE\u662F\u4E00\u76F4\u6709\u7684\uFF0C\u53F3\u4E0A\u89D2\u90A3\u4E2A\u592A\u9633\u56FE\u6807</p><h2 id="\u539F\u7406" tabindex="-1">\u539F\u7406 <a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a></h2><p>\u5F00\u5173\u64CD\u4F5C\u4FEE\u6539\u7684\u662F HTML \u6839\u6807\u7B7E\u7684\u6837\u5F0F\uFF0C\u4F1A\u52A0\u4E0A dark \u6837\u5F0F</p><p>\u5F53\u7136\u5207\u6362\u8BED\u8A00\u65F6\u4E5F\u4F1A\u4E3A\u5176\u4FEE\u6539 lang \u5C5E\u6027</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u4E8B\u5148\u5B9A\u4E49\u4E00\u4E9B css\u53D8\u91CF\u6765\u5B8C\u6210\u4E0D\u540C\u8BED\u8A00\u4E0B\u6216\u8005\u4E0D\u540C\u6A21\u5F0F\u4E0B\u7684\u6837\u5F0F\u53D8\u6362</p><h2 id="css\u53D8\u91CF" tabindex="-1">css\u53D8\u91CF <a class="header-anchor" href="#css\u53D8\u91CF" aria-hidden="true">#</a></h2><p>css \u53D8\u91CF\u6587\u4EF6\u5728 vuetom/styles/vars.scss \u6587\u4EF6\u4E2D</p><p>\u7B80\u5355\u5C55\u793A\u90E8\u5206</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #1496ce<span class="token punctuation">;</span>
  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #19aeee<span class="token punctuation">;</span>
  <span class="token property">--color-border</span><span class="token punctuation">:</span> #ad295c8a<span class="token punctuation">;</span>
  <span class="token property">--color-block</span><span class="token punctuation">:</span> #2a7f8a<span class="token punctuation">;</span>
  <span class="token property">--color-strong</span><span class="token punctuation">:</span> #c13e74<span class="token punctuation">;</span>
  <span class="token property">--color-code</span><span class="token punctuation">:</span> #7ea1c5<span class="token punctuation">;</span>
  <span class="token property">--color-border-left</span><span class="token punctuation">:</span> #1d8ab9<span class="token punctuation">;</span>
  <span class="token property">--color-code-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>77<span class="token punctuation">,</span>208<span class="token punctuation">,</span>225<span class="token punctuation">,</span>0.08<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-block-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>77<span class="token punctuation">,</span>208<span class="token punctuation">,</span>225<span class="token punctuation">,</span>0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--linear-title</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #32defd<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>247 69 152<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-shadow</span><span class="token punctuation">:</span> 0 5px 6px -5px <span class="token function">rgba</span><span class="token punctuation">(</span>133<span class="token punctuation">,</span>133<span class="token punctuation">,</span>133<span class="token punctuation">,</span>.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-code-shadow</span><span class="token punctuation">:</span> 5px 5px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-code-shadow-h</span><span class="token punctuation">:</span> 5px 5px 10px <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.dark</span> <span class="token punctuation">{</span>
  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #18baff<span class="token punctuation">;</span>
  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #189bd3<span class="token punctuation">;</span>
  <span class="token property">--color-border</span><span class="token punctuation">:</span> #ad295c8a<span class="token punctuation">;</span>
  <span class="token property">--color-block</span><span class="token punctuation">:</span> #2a7f8a<span class="token punctuation">;</span>
  <span class="token property">--color-strong</span><span class="token punctuation">:</span> #c13e74<span class="token punctuation">;</span>
  <span class="token property">--color-code</span><span class="token punctuation">:</span> #7ea1c5<span class="token punctuation">;</span>
  <span class="token property">--color-border-left</span><span class="token punctuation">:</span> #1d8ab9<span class="token punctuation">;</span>
  <span class="token property">--color-code-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>77<span class="token punctuation">,</span>208<span class="token punctuation">,</span>225<span class="token punctuation">,</span>0.08<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-block-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>77<span class="token punctuation">,</span>208<span class="token punctuation">,</span>225<span class="token punctuation">,</span>0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--linear-title</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #32defd<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>247 69 152<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-shadow</span><span class="token punctuation">:</span> 0 5px 6px -5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-code-shadow</span><span class="token punctuation">:</span> 5px 5px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-code-shadow-h</span><span class="token punctuation">:</span> 5px 5px 10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9875\u9762\u5F15\u7528\u53EF\u4EE5\u4F7F\u7528</p><div class="language-css"><pre><code><span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5F53\u7136\u4E5F\u53EF\u4EE5\u5728\u6587\u6863\u4E2D\u91CD\u65B0\u5B9A\u4E49</p>`,13);function r(a,d,g,h,b,f){return e(),t("div",null,[n("h1",l,[p(o(a.$frontmatter.title)+" ",1),i]),k])}var x=s(u,[["render",r]]);export{_ as __pageData,x as default};