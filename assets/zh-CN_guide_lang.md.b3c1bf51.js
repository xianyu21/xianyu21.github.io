import{_ as a,c as t,a as n,b as p,t as e,g as o,o as c}from"./app.7b0d2c51.js";const b='{"title":"\u591A\u56FD\u8BED\u8A00\u914D\u7F6E","description":"","frontmatter":{"title":"\u591A\u56FD\u8BED\u8A00\u914D\u7F6E","lang":"en-US"},"headers":[{"level":2,"title":"\u6539\u914D\u7F6E\u6587\u4EF6","slug":"\u6539\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"\u6539\u9996\u9875","slug":"\u6539\u9996\u9875"}],"relativePath":"zh-CN/guide/lang.md","lastUpdated":null}',l={},i={id:"frontmatter-title",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=o(`<p>\u4F60\u4E5F\u53EF\u4EE5\u914D\u7F6E\u591A\u56FD\u8BED\u8A00\uFF0C\u4EE5\u9996\u9875\u4E3A\u4F8B\uFF0C\u5148\u5728\u914D\u7F6E\u6587\u4EF6\u91CC\u914D\u7F6E\u4E0B locales\uFF0C\u7136\u540E\u521B\u5EFA\u5BF9\u5E94\u7684\u8BED\u8A00\u6587\u4EF6\u5939\u4E0E\u6587\u4EF6</p><h2 id="\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u6539\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u9700\u8981\u5728 config.ts \u4E2D\u914D\u7F6E locales\uFF0C\u6CE8\u610F themeConfig \u5C5E\u6027\u91CC\u4E5F\u8981\u914D\uFF0C\u4E24\u4E2A locales \u5185\u5BB9\u662F\u4E0D\u4E00\u6837\u7684</p><p>themeConfig \u4E2D\u7684 locales \u914D\u7F6E\u662F\u4E3A\u4E86\u5C55\u793A\u4E0B\u62C9\u83DC\u5355\u7684\u5C55\u793A\u5185\u5BB9</p><p>\u6839Config \u4E2D\u7684 locales \u914D\u7F6E\u662F\u4E3A\u4E86\u5C55\u793A\u5934\u90E8\u6807\u9898\u5185\u5BB9\uFF0Cdescription\u5C5E\u6027\u53EF\u6709\u53EF\u65E0</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> defineConfigWithTheme<span class="token operator">&lt;</span>VuetomThemeConfig<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    locales<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&#39;/zh-CN/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">&#39;\u7B80\u4F53\u4E2D\u6587&#39;</span><span class="token punctuation">,</span>
        selectText<span class="token operator">:</span> <span class="token string">&#39;\u591A\u56FD\u8BED\u8A00&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string">&#39;/en-US/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>
        selectText<span class="token operator">:</span> <span class="token string">&#39;Languages&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;/zh-CN/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&#39;Vuetom \u4E3B\u9898&#39;</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">&#39;\u4E3A Vitepress \u63D0\u4F9B\u7684\u4E00\u6B3E\u4E3B\u9898&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/en-US/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&#39;Vuetom Theme&#39;</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">&#39;Theme For Vitepress&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>locales</strong> \u4E2D\u7684\u5C5E\u6027\u4ECB\u7ECD</p><p><b>lang</b>: \u4F1A\u76F4\u63A5\u8BBE\u7F6E\u7ED9 <code>&lt;html&gt;</code> \u6807\u7B7E</p><p><b>title</b>: \u4E0D\u540C\u8BED\u8A00\u65F6\u7F51\u7AD9\u7684\u6807\u9898\uFF0C\u4F1A\u66FF\u6362\u4E4B\u524D\u5B9A\u4E49\u7684 title</p><p><b>description</b>: \u4E0D\u540C\u8BED\u8A00\u65F6\u7F51\u7AD9\u7684\u63CF\u8FF0</p><p><b>label</b>: \u8BED\u8A00\u9009\u62E9\u65F6\u5C55\u793A\u51FA\u6765\u7684\u6587\u672C\u5185\u5BB9\uFF08\u4F8B\u5982\uFF1A\u4E2D\u6587\u6216English\uFF09</p><p><b>selectText</b>: \u8BED\u8A00\u9009\u62E9\u65F6\u4E0B\u62C9\u83DC\u5355\u7684\u6587\u672C\uFF08\u4F8B\u5982\uFF1A\u591A\u56FD\u8BED\u8A00\u6216\u8005Languages\uFF09</p><h2 id="\u6539\u9996\u9875" tabindex="-1">\u6539\u9996\u9875 <a class="header-anchor" href="#\u6539\u9996\u9875" aria-hidden="true">#</a></h2><p>\u5728 .vitepress \u540C\u7EA7\u76EE\u5F55\u65B0\u5EFA <code>zh-CN</code> \u548C <code>en-US</code> \u6587\u4EF6\u5939\uFF0C\u7136\u540E\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E2D\u5206\u522B\u521B\u5EFA\u4E00\u4E2A <code>index.md</code> \u6587\u4EF6</p><p><strong>zh-CN/index.md</strong> \u4E2D\u5199\u5165 <strong>\u4E2D\u6587\u9996\u9875</strong> \u8981\u5C55\u793A\u7684\u5185\u5BB9</p><p><strong>en-US/index.md</strong> \u4E2D\u5199\u5165 <strong>\u82F1\u6587\u9996\u9875</strong> \u8981\u5C55\u793A\u7684\u5185\u5BB9</p><p>\u539F\u6765\u4E0E .vitepress \u540C\u7EA7\u7684 <code>index.md</code> \u6587\u4EF6\u4E2D\u53EF\u4EE5\u6539\u4E3A\u8F6C\u53D1\u81F3 <code>zh-CN/index</code> \u6216\u8005 <code>en-US/index</code></p><p>\u4F8B\u5982\u4E0B\u65B9\u7684\u4EE3\u7801\uFF0C\u4F1A\u76F4\u63A5\u5C06 <code>/</code> \u8F6C\u53D1\u5230 <code>/zh-CN/</code> \u8FD9\u6837\u5C31\u4F1A\u76F4\u63A5\u524D\u5F80\u4E2D\u6587\u9996\u9875\u4E86</p><div class="language-markdown"><pre><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token font-matter yaml language-yaml">title: &#39;Vuetom Theme&#39;
lang: en-US
page: true</span>
<span class="token punctuation">---</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preferredLang <span class="token operator">=</span> <span class="token string">&#39;zh-CN&#39;</span>
  window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preferredLang<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u5176\u5B9E\u539F\u7406\u5C31\u662F\u8DEF\u5F84\u524D\u52A0\u4E86\u4E00\u4E2A\u8BED\u8A00\u6807\u8BC6\uFF0C\u90A3\u4E48\u5C31\u5728\u9875\u9762\u6587\u4EF6\u5916\u52A0\u4E2A\u8BED\u8A00\u6587\u4EF6\u5939\u5C31\u597D\u4E86<br> \u9700\u8981\u5904\u7406\u7684\u5C31\u662F\u4E66\u5199\u5BFC\u822A\u680F\u548C\u83DC\u5355\u680F\u65F6\u8BB0\u5F97\u8981\u5728 link \u5C5E\u6027\u524D\u52A0\u4E0A\u8BED\u8A00\u6807\u8BC6</p></div><p>\u4E0B\u9762\u8BD5\u8BD5\u8BBF\u95EE\u4E00\u4E0B\uFF1A</p><p>\u8BBF\u95EE localhost:3000/zh-CN/ \u4F1A\u524D\u5F80\u4E2D\u6587\u9996\u9875</p><p>\u8BBF\u95EE localhost:3000/en-US/ \u4F1A\u524D\u5F80\u82F1\u6587\u9996\u9875</p><p>\u8BBF\u95EE localhost:3000 \u4F1A\u524D\u5F80 localhost:3000/zh-CN/</p>`,24);function k(s,d,g,h,m,f){return c(),t("div",null,[n("h1",i,[p(e(s.$frontmatter.title)+" ",1),r]),u])}var C=a(l,[["render",k]]);export{b as __pageData,C as default};
