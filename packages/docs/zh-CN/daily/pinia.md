#多条数据修改-$patch
```
对象
store.$patch({
	count:store.count+2,
	msg:store.msg === 'hello world'?'疫情':'hello world'
})
函数
store.$patch((state)=>{
	state.count = state.count+2
	state.msg = state.msg === 'hello world'?'疫情':'hello world'
})
```
###getter 调用是对象 
页面使用
store.xx
###Actions 调用是 函数
页面使用
store.xx()

*可以直接调用 store 的任何方法
*action之间的相互调用，直接用 this 访问即可。
*store之间的相互调用