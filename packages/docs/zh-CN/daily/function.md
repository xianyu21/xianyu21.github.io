## 判断对象中是否存在某个属性

```
@ param {Object} obj 对象
@ param {String} key 属性名
function hasProperty(obj,key){
	return key in obj;
}
```