# wt-indexDB
> IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high performance searches of this data. While DOM Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution.

**wt-indexDB** is **wrapper** on the top of **IndexedDB** where all **CRUD** actions (GET, PUT, DELETE) are implemented which works **asynchronously**.

## # How to use
````bash
npm install wt-indexdb
````

------------


### How to import
```javascript
import indexDB from 'wt-indexdb'
const MyDb = new indexDB('MyDatabase', 'MyTable')
```

------------

### Add Data
```javascript
if(MyDb.isConnected) {
	MyDb.SetData(obj).then((e) => {
		console.log(e)
	}).catch((e) => {
		console.log(e)
	})
}
```
this method will add your object and return you **index** of your object and it also add one property**"index"**in your object.

------------
### Update Data
```javascript
if(MyDb.isConnected) {
	MyDb.UpdateById(id, obj).then((e) => {
		console.log(e)
	}).catch((e) => {
		console.log(e)
	})
}
```

------------
### Get By ID
```javascript
if(MyDb.isConnected) {
	MyDb.GetById(id).then((e) => {
		console.log(e)
	}).catch((e) => {
		console.log(e)
	})
}
```

------------
### Get All
```javascript
if(MyDb.isConnected) {
	MyDb.GetAll().then((e) => {
		console.log(e)
	}).catch((e) => {
		console.log(e)
	})
}
```

------------
### Delete By ID
```javascript
if(MyDb.isConnected) {
	MyDb.DeleteById(id).then((e) => {
		console.log(e)
	}).catch((e) => {
		console.log(e)
	})
}
```

------------
### Delete All
```javascript
if(MyDb.isConnected) {
	MyDb.DeleteAll().then((e) => {
		console.log(e)
	}).catch((e) => {
		console.log(e)
	})
}
```

------------
### Close Connection
```javascript
if(MyDb.isConnected) {
	MyDb.CloseConnection().then((e) => {
		console.log(e)
	}).catch((e) => {
		console.log(e)
	})
}
```

------------
#### Author
**complex1**
# asw-indexDB
