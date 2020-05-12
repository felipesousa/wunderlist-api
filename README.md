## 👋🏻📕 Bye and thank you!

On 6th May, 2020, Wunderlist has now shut down. The lists will no longer sync across devices and the webapp is no longer available. For that reason the project will be archived, thank's everyone who used and helps the project along the time!

# Wunderlist-api
> :closed_book: Wunderlist in a simple way.

---

[![NPM version](http://img.shields.io/npm/v/wunderlist-api.svg?style=flat)](https://www.npmjs.com/package/wunderlist-api)
[![Dependency Status](https://david-dm.org/felipesousa/wunderlist-api.svg)](https://david-dm.org/felipesousa/wunderlist-api)
[![devDependency Status](https://david-dm.org/felipesousa/wunderlist-api/dev-status.svg)](https://david-dm.org/felipesousa/wunderlist-api#info=devDependencies)

## Installation
`[sudo] npm install --save wunderlist-api`

## Changelog

- **1.0.0** - ES6 MODULES! You can use Wunderlist-api with new sintax based in ES6, based in Class and features ES6!
- **0.2.2** - The names of some methods have changed from version **0.2.x**, please see the new names from the need.

## Docs
  - [Authorization](#authorization)
  - [User](#user)
    - [User Informations](#user-information)
    - [Avatar´s](#avatar)
  - [Lists](#lists)
    - [Get all lists](#get-all-lists)
    - [Get specified list](#get-specified-list)
    - [Make a list from state (public or private)](##make-a-list-from-state-public-or-private)
    - [Create list](#create-list)
    - [Update list](#update-list)
    - [Delete list](#delete-list)
    - [Users authorized in list](#users-authorized-in-list)
  - [Notes](#notes)
    - [Get note from list](##get-notes-from-list)
    - [Get note from task](#get-notes-from-task)
    - [Create Note](#create-note)
    - [Delete Note](#delete-note)
  - [Tasks](#tasks)
    - [Get all tasks](#get-all-tasks)
    - [Get task for state](#get-tasks-for-state)
    - [Get specified task](#get-specified-task)
    - [Create task](#create-task)
    - [Delete task](#delete-task)
  - [Subtasks](#subtasks)
    - [Get subtask from list](#get-subtask-from-list)
    - [Get completed subtasks from list](#get-completed-subtasks-from-list)
    - [Get subtask from task](#get-subtask-from-task)
    - [Get completed subtask from task](#get-completed-subtask-from-task)
    - [Create subtask](#create-subtask)
    - [Delete subtask](#delete-subtask)
  - [Task Comments](#task-comments)
    - [Get comments from Task](#get-comments-from-task)
    - [Get comments from Lists](#get-comments-from-lists)
    - [Create Comment](#create-comment)
  - [Membership](#membership)
    - [Get Membership](#get-membership)
    - [Add member to list](#add-member-to-list)
    - [Remove a Member from a List](#remove-a-member-from-a-list)


## Concepts

There are some parameters that are needed to operate certain methods, among all, some are rather odd, such as the `revision`, that is the amount of change that this task note, user, list, comment, subtask, in short, anything was modified, by default, it comes with the value `1`. When required this parameter, you must enter the value of the `current revision` and not the following number. For example, to delete a user from the list that was newly created, I pass the current value of revision in case the value `1`.
For more information on types of parameters or any other matter, please visit the [official site Wunderlist](https://developer.wunderlist.com/documentation).


## Usage

#### Authorization
  To access the information have 2 data, the first the access token and the Client ID, this information is [available here.](https://developer.wunderlist.com/apps)

  - accessToken - string
  - clientId - string

  ```javascript
  'use strict';

  import Wunderlist from 'wunderlist-api';

  const wunderlist = new Wunderlist({
    clientId: 'Your Client ID',
    accessToken: 'Your Access Token'
  })
  // => authenticated
  ```

> All the following methods may be accessed in the same way, only changing the parameter when it becomes necessary, show only an example that can be repeated after any other. The method is based on the concept of [promises](https://spring.io/understanding/javascript-promises).

Universal Exampler: *for all methods is REQUIRED use `.then()`  for get response!*

```javascript
// authentication
wunderlist.method(parameters)
  .then( response => {
    // response
  })
  .catch( error => {
    // handle error
  });
```


#### User

##### User information

```javascript
wunderlist.user()
```

##### Avatar
- userId: integer
- size: integer (optional)
- fallback: boolean (optional)

```javascript
wunderlist.avatar(userId, size, fallback)
```

#### Lists

##### Get All lists
```javascript
wunderlist.getLists()
```

##### Get specified list
- listId: integer

```javascript
wunderlist.getList(listId)
```

##### Make a list from state (public or private)
- listId: integer
- revision: integer
- public: boolean

```javascript
wunderlist.avatar(listId, revision, public)
```

##### Create List
- title: string

```javascript
wunderlist.createList(title)
```

##### Update List
- listId: integer
- revision: integer
- title: string

```javascript
wunderlist.updateList(listId, revision, title)
```

##### Delete List
- listId: integer
- revision: integer

```javascript
wunderlist.deleteList(listId, revision)
```

##### Users authorized in list
- listId: integer

```javascript
wunderlist.listUsers(listId)
```

#### Notes

##### Get notes from list
- listId: integer

```javascript
wunderlist.notesList(listId)
```

##### Get notes from task
- taskId: integer

```javascript
wunderlist.notesTask(taskId)
```

##### Create note
- taskId: integer
- content: string

```javascript
wunderlist.createNote(taskId, content)
```

##### Delete note
- noteId: integer
- revision: integer

```javascript
wunderlist.deleteNote(noteId, revision)
```

#### Tasks

##### Get all tasks
- listId: integer

```javascript
wunderlist.getTasks(listId)
```

##### Get tasks for state
- listId: integer
- state: boolean (completed or incompleted)

```javascript
wunderlist.getTasksForState(listId, state)
```

##### Get specified task
- taskId: integer

```javascript
wunderlist.getTask(taskId)
```

##### Create task
- listId: integer
- title: string
- state: boolean
- starred: boolean

```javascript
wunderlist.createTask(listId, title, state, starred)
```

##### Delete Task
- taskId: integer
- revision: integer

```javascript
wunderlist.deleteTask(taskId, revision)
```

#### Subtasks

##### Get subtask from list
- taskId: integer

```javascript
wunderlist.subtaskList(taskId)
```

##### Get completed subtasks from list
- listId: integer
- completed: boolean

```javascript
wunderlist.subtaskListState(listId, completed)
```

##### Get subtask from task
- taskId: integer

```javascript
wunderlist.subtaskComment(taskId)
```

##### Get completed subtask from task

- taskId: integer
- completed: boolean

```javascript
wunderlist.subtaskCommentState(taskId, completed)
```

##### Create subtask
- taskId: integer
- title: string
- completed: boolean

```javascript
wunderlist.createSubstask(taskId, title, completed)
```

##### Delete subtask
- subtaskId: integer
- revision: integer

```javascript
wunderlist.deleteSubtask(subtaskId, revision)
```


#### Task Comments

##### Get comments from Task
- taskId: integer

```javascript
wunderlist.commentsTaks(taskId)
```

##### Get comments from Lists
- listId: integer

```javascript
wunderlist.commentsList(listId)
```

##### Create Comment
- taskId: integer
- text: string

```javascript
wunderlist.createComment(taskId, text)
```

#### Membership

##### Get Membership

```javascript
wunderlist.getMembership()
```

##### Add member to list
- user_id: integer
- listId: string
- muted: boolean

```javascript
wunderlist.addMember(user_id, listId, muted)
```

##### Remove a Member from a List
- user_id: integer
- revision: integer

```javascript
wunderlist.removeMember(user_id, revision)
```

## Contributing
- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am "Add some feature"`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request :D

For more information on types of parameters or any other matter, please visit the [official site Wunderlist](https://developer.wunderlist.com/documentation).

[License MIT](https://github.com/felipesousa/wunderlist-api/blob/master/LICENSE) @ 2016 Felipe Sousa
