```javascript
// Correct usage of $inc operator with a numeric value
db.collection.updateOne({ _id: 1 }, { $inc: { field: 1 } });
```