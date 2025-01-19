# MongoDB $inc Operator Error with String Value

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment numeric fields; using it with a string value will lead to unexpected results.

## Bug Description

The bug arises from incorrectly passing a string value to the `$inc` operator, causing an error or unintended modification of the document.

## Bug Reproduction

1.  Connect to a MongoDB instance.
2.  Create a collection (e.g., `myCollection`).
3.  Insert a document with a numeric field (e.g., `{ _id: 1, field: 0 }`).
4.  Attempt to update the document using `db.collection.updateOne({ _id: 1 }, { $inc: { field: "1" } });`
5.  Observe the error or unexpected result.

## Solution

The solution is to ensure that the value passed to the `$inc` operator is always a number.