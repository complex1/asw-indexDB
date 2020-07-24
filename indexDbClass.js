/* eslint-disable promise/param-names */
/* eslint-disable no-unused-vars */
class IndexDB {
  constructor (dbName, table) {
    this.table = table
    const request = indexedDB.open(dbName)
    request.onerror = e => {
      this.isConnected = false
      console.log("Why didn't you allow my web app to use IndexedDB?!")
    }
    request.onsuccess = e => {
      this.db = e.target.result
      this.isConnected = true
    }
    request.onupgradeneeded = e => {
      this.db = event.target.result
      this.isConnected = true
      this.db.createObjectStore(table, { keyPath: 'id', autoIncrement: true })
    }
  }

  CloseConnection () {
    var self = this
    return new Promise((reslove, reject) => {
      var request = store.close(obj)
      request.onerror = function (e) {
        return reject(new Error(e.target.error.message))
      }
      request.onsuccess = e => {
        this.isConnected = false
        return reslove(e.target.result)
      }
    })
  }

  SetData (obj) {
    var self = this
    return new Promise((reslove, reject) => {
      var transaction = self.db.transaction([self.table], 'readwrite')
      var store = transaction.objectStore(self.table)
      obj.timestamp = obj.timestamp || (new Date()).toUTCString()
      var request = store.add(obj)
      request.onerror = function (e) {
        return reject(new Error(e.target.error.message))
      }
      request.onsuccess = function (e) {
        return reslove(e.target.result)
      }
    })
  }

  UpdateById (id, newObj) {
    var self = this
    return new Promise((reslove, reject) => {
      var transaction = self.db.transaction([self.table], 'readwrite')
      var store = transaction.objectStore(self.table)
      newObj.id = id
      var request = store.put(newObj)
      request.onerror = function (e) {
        return reject(new Error(e.target.error.message))
      }
      request.onsuccess = function (e) {
        return reslove(e.target.result)
      }
    })
  }

  GetById (id) {
    var self = this
    return new Promise((reslove, reject) => {
      var transaction = self.db.transaction([self.table], 'readwrite')
      var store = transaction.objectStore(self.table)
      var request = store.get(id)
      request.onerror = function (e) {
        return reject(new Error(e.target.error.message))
      }
      request.onsuccess = function (e) {
        return reslove(e.target.result)
      }
    })
  }

  GetAll () {
    var self = this
    return new Promise((reslove, reject) => {
      var transaction = self.db.transaction([self.table], 'readwrite')
      var store = transaction.objectStore(self.table)
      var allData = []
      store.openCursor().onsuccess = function (event) {
        var cursor = event.target.result
        if (cursor === null) {
          return reslove(allData)
        }
        allData.push(cursor.value)
        cursor.continue()
      }
      store.openCursor.onerror = function (e) {
        return reject(new Error(e.target.error.message))
      }
    })
  }

  DeleteById (id) {
    var self = this
    return new Promise((reslove, reject) => {
      var transaction = self.db.transaction([self.table], 'readwrite')
      var store = transaction.objectStore(self.table)
      var request = store.delete(id)
      request.onerror = function (e) {
        return reject(new Error(e.target.error.message))
      }
      request.onsuccess = function (e) {
        return reslove(e)
      }
    })
  }

  DeleteAll () {
    var self = this
    return new Promise((reslove, reject) => {
      var transaction = self.db.transaction([self.table], 'readwrite')
      var store = transaction.objectStore(self.table)
      var request = store.clear()
      request.onerror = function (e) {
        return reject(new Error(e.target.error.message))
      }
      request.onsuccess = function (e) {
        return reslove(e)
      }
    })
  }
}
export default IndexDB
